import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const BUSINESS = {
  name: "Junk Chomp",
  tagline: "JUNK REMOVAL",
  phoneDisplay: "(970) 987-7211",
  phoneHref: "tel:+19709877211",
  smsHref: "sms:+19709877211",
  serviceAreaShort: "Aspen to Glenwood Springs & beyond",
  serviceAreaFull: "Western & Northern Colorado",
  startingPrice: "$89",
  offerLine: "Junk removal starting at $89. Same-day service available!",
  facebookUrl: "https://www.facebook.com/profile.php?id=61595367287675",
  logoSrc: "/images/logo.png",
} as const;
