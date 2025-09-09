import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// cn = className helper
// It merges Tailwind classes safely and removes duplicates
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}
