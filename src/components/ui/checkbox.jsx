import React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check } from "lucide-react" 
import { cn } from "../../lib/utils" 


const Checkbox = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <CheckboxPrimitive.Root
      ref={ref}
     
      className={cn(
       
        "peer h-4 w-4 shrink-0 rounded-sm border border-gray-300 " +
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 " +
          "disabled:cursor-not-allowed disabled:opacity-50 " +
         
          "data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600",
        className
      )}
      {...props}
    >
    
      <CheckboxPrimitive.Indicator className="flex items-center justify-center text-white">
        <Check className="h-3 w-3" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
})

Checkbox.displayName = "Checkbox"

export { Checkbox }
