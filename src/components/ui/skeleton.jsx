import React from "react"
import { cn } from "../../lib/utils"

function Skeleton({ className = "" }) {
  return <div className={cn("animate-pulse rounded-md bg-gray-200", className)} />
}

export { Skeleton }
