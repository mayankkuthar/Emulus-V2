import { createContext, useContext, useState, type ReactNode } from "react";

interface BookingContextType {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const BookingContext = createContext<BookingContextType>({
  open: false,
  setOpen: () => {},
});

export function BookingProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <BookingContext.Provider value={{ open, setOpen }}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  return useContext(BookingContext);
}
