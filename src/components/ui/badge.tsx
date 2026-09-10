import * as React from "react"

import { cn } from "@/lib/utils"

function Badge({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-full border border-border px-2 py-0.5 text-xs font-medium text-foreground",
        className
      )}
      {...props}
    />
  )
}

export { Badge }
