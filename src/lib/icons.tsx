import {
  ArrowRight, Brain, Search, Database, Code2, Users, Heart,
  Target, Compass, Users2, BookOpen, Globe,
  Pill, Landmark, Microscope, HeartHandshake, Building2, Sprout,
  ArrowUpRight, Plug, Briefcase, GraduationCap,
  Mail, Phone, MapPin, Send, Menu, X,
} from "lucide-react";
import type { ReactNode } from "react";

const map: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number }>> = {
  ArrowRight, Brain, Search, Database, Code2, Users, Heart,
  Target, Compass, Users2, BookOpen, Globe,
  Pill, Landmark, Microscope, HeartHandshake, Building2, Sprout,
  ArrowUpRight, Plug, Briefcase, GraduationCap,
  Mail, Phone, MapPin, Send, Menu, X,
};

export function icon(name: string, props?: { size?: number; strokeWidth?: number }): ReactNode {
  const Comp = map[name];
  if (!Comp) return null;
  return <Comp {...props} />;
}
