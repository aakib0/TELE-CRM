import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// cn = className helper
// It merges Tailwind classes safely and removes duplicates
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
