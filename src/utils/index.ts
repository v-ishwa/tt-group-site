import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge classes with tailwind-merge with clsx full feature */
export default function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const remToPx = (rem: number) => {
  return rem * 16;
};
