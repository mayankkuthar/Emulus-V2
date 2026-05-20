import { useRef, useState } from "react";
import { format } from "date-fns";
import { CalendarIcon, Clock, Video, Loader2, AlertCircle, CheckCircle } from "lucide-react";
import Turnstile from "react-turnstile";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { useBooking } from "@/lib/BookingContext";
import { sendBookingNotification, isEmailConfigured } from "@/lib/email";

const TIME_SLOTS = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
  "15:00", "15:30", "16:00", "16:30", "17:00",
];

const turnstileKey = import.meta.env.VITE_TURNSTILE_SITE_KEY as string;

export function BookDiscoveryCall() {
  const { open, setOpen } = useBooking();
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [token, setToken] = useState("");
  const turnstileRef = useRef<{ reset: () => void }>(null);

  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!date || !time || !name || !email) return;
    if (!token && turnstileKey) { setError("Please complete the security check."); return; }
    setError("");
    setSubmitting(true);

    try {
      const [hours, minutes] = time.split(":").map(Number);
      const startTime = new Date(date);
      startTime.setHours(hours, minutes, 0, 0);
      const endTime = new Date(startTime);
      endTime.setMinutes(endTime.getMinutes() + 30);

      const subject = `Discovery Call — ${name} & Emulus Consulting`;
      const body = [
        `Meeting: Discovery Call`,
        `Attendee: ${name}`,
        `Email: ${email}`,
        phone ? `Phone: ${phone}` : "",
        `Timezone: ${timezone}`,
        "",
        notes ? `Notes: ${notes}` : "",
      ]
        .filter(Boolean)
        .join("\n");

      const attendees = `Vineet.Garg@emulus.co` +
        (email ? `,${email}` : "");

      const teamsUrl =
        `https://teams.microsoft.com/l/meeting/new` +
        `?subject=${encodeURIComponent(subject)}` +
        `&startTime=${startTime.toISOString()}` +
        `&endTime=${endTime.toISOString()}` +
        `&content=${encodeURIComponent(body)}` +
        `&attendees=${encodeURIComponent(attendees)}`;

      window.open(teamsUrl, "_blank", "noopener,noreferrer");

      await sendBookingNotification({
        name,
        email,
        phone,
        date: format(date, "EEE, MMM d, yyyy"),
        time,
        timezone,
        notes,
        token,
      });

      setSubmitted(true);
    } catch {
      setError("Failed to send notification. Your Teams link has opened — please email us directly to confirm.");
    } finally {
      setSubmitting(false);
    }
  }

  function handleClose() {
    setOpen(false);
    setTimeout(() => {
      setSubmitted(false);
      setDate(undefined);
      setTime("");
      setName("");
      setEmail("");
      setPhone("");
      setNotes("");
      setError("");
      setToken("");
      turnstileRef.current?.reset();
    }, 200);
  }

  return (
    <Dialog open={open} onOpenChange={(v) => { if (!v) handleClose(); }}>
      <DialogContent className="sm:max-w-[520px] p-0 gap-0 rounded-2xl overflow-hidden">
        <div className="bg-gradient-to-br from-[#131931] to-[#0a0f24] px-8 pt-10 pb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
              <Video size={20} className="text-[#ff6a3d]" />
            </div>
            <DialogTitle className="text-white text-xl font-semibold m-0">
              Book a Discovery Call
            </DialogTitle>
          </div>
          <DialogDescription className="text-white/60 text-sm m-0">
            Scope a 30-minute discovery call. Pick a time that works for you and we'll set up a Microsoft Teams meeting.
          </DialogDescription>
        </div>

        {submitted ? (
          <div className="px-8 py-16 text-center">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
              <CheckCircle size={28} className="text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-[#131931] mb-2">You're all set!</h3>
            <p className="text-sm text-[#4b5474] mb-6 max-w-sm mx-auto">
              Microsoft Teams has opened with your meeting details pre-filled. We've also sent a notification to our team. Review and confirm the invite in Teams.
            </p>
            <p className="text-xs text-[#4b5474]">
              Didn't open? <a href="#" className="text-[#e54727] underline" onClick={(e) => { e.preventDefault(); handleSubmit as any; }}>Click here</a>
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="px-8 py-6 space-y-5 max-h-[60vh] overflow-y-auto">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="dc-name" className="text-xs font-mono uppercase tracking-wider text-[#2a3147]">
                  Full name <span className="text-[#e54727]">*</span>
                </Label>
                <Input
                  id="dc-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Your name"
                  className="rounded-xl border-[#eef0f6] bg-[#f6f7fa] h-11"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="dc-email" className="text-xs font-mono uppercase tracking-wider text-[#2a3147]">
                  Work email <span className="text-[#e54727]">*</span>
                </Label>
                <Input
                  id="dc-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="you@company.com"
                  className="rounded-xl border-[#eef0f6] bg-[#f6f7fa] h-11"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="dc-phone" className="text-xs font-mono uppercase tracking-wider text-[#2a3147]">
                Phone <span className="text-[#4b5474] font-normal normal-case tracking-normal">(optional)</span>
              </Label>
              <Input
                id="dc-phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+1 234 567 890"
                className="rounded-xl border-[#eef0f6] bg-[#f6f7fa] h-11"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-xs font-mono uppercase tracking-wider text-[#2a3147]">
                  Date <span className="text-[#e54727]">*</span>
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <button
                      type="button"
                      className={cn(
                        "flex h-11 w-full items-center justify-between rounded-xl border border-[#eef0f6] bg-[#f6f7fa] px-3 py-2 text-sm cursor-pointer transition-colors hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#e54727]/20",
                        !date && "text-[#4b5474]"
                      )}
                    >
                      {date ? format(date, "EEE, MMM d, yyyy") : "Pick a date"}
                      <CalendarIcon size={16} className="text-[#4b5474] shrink-0" />
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 rounded-xl !z-[80]" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      disabled={(d) => d <= new Date()}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="space-y-2">
                <Label className="text-xs font-mono uppercase tracking-wider text-[#2a3147]">
                  Time <span className="text-[#e54727]">*</span>
                </Label>
                <Select value={time} onValueChange={setTime} required>
                  <SelectTrigger className="rounded-xl border-[#eef0f6] bg-[#f6f7fa] h-11">
                    <SelectValue placeholder="Select time">
                      {time ? (
                        <span className="flex items-center gap-2">
                          <Clock size={14} />
                          {time}
                        </span>
                      ) : (
                        "Select time"
                      )}
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent className="rounded-xl max-h-60 !z-[80]">
                    {TIME_SLOTS.map((slot) => (
                      <SelectItem key={slot} value={slot}>
                        {slot}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="text-xs text-[#4b5474] flex items-center gap-1.5">
              <Clock size={12} />
              Timezone: {timezone} &middot; 30 min call
            </div>

            <div className="space-y-2">
              <Label htmlFor="dc-notes" className="text-xs font-mono uppercase tracking-wider text-[#2a3147]">
                Notes <span className="text-[#4b5474] font-normal normal-case tracking-normal">(optional)</span>
              </Label>
              <textarea
                id="dc-notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={3}
                placeholder="What would you like to discuss?"
                className="flex w-full rounded-xl border border-[#eef0f6] bg-[#f6f7fa] px-3 py-2 text-sm font-inherit text-[#131931] placeholder:text-[#4b5474]/60 focus:outline-none focus:ring-2 focus:ring-[#e54727]/20 focus:border-[#e54727] focus:bg-white transition-colors resize-none"
              />
            </div>

            {turnstileKey && (
              <Turnstile
                ref={turnstileRef}
                sitekey={turnstileKey}
                onVerify={(t) => { setToken(t); setError(""); }}
                theme="light"
                className="[&_iframe]:!w-full"
              />
            )}

            {error && (
              <div style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--c-destructive)", fontSize: 13 }}>
                <AlertCircle size={14} /> {error}
              </div>
            )}

            <div className="flex items-center gap-3 pt-2">
              <button
                type="submit"
                disabled={!date || !time || !name || !email || submitting || (!token && !!turnstileKey)}
                className="btn btn-accent flex-1 justify-center"
              >
                {submitting ? (
                  <><Loader2 size={14} className="animate-spin" /> Setting up...</>
                ) : (
                  <><Video size={14} /> Set up Teams Meeting</>
                )}
              </button>
              <button
                type="button"
                onClick={handleClose}
                className="btn btn-ghost"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
