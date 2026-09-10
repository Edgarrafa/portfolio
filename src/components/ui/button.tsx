import * as React from "react"

import { cn } from "@/lib/utils"

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 [&_svg]:shrink-0"

const variants = {
  default: "bg-primary text-primary-foreground hover:bg-primary/90",
  outline: "border border-input bg-input/30 shadow-xs hover:bg-input/50 hover:text-accent-foreground",
  ghost: "hover:bg-accent/50 hover:text-accent-foreground",
}

const sizes = {
  default: "h-9 px-4 py-2",
  sm: "h-8 px-3",
}

type ButtonProps = {
  variant?: keyof typeof variants
  size?: keyof typeof sizes
} & (
  | (React.ComponentProps<"button"> & { href?: undefined })
  | (React.ComponentProps<"a"> & { href: string })
)

// Renders a link when given an href, otherwise a button
function Button({ variant = "default", size = "default", className, ...props }: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className)

  if (props.href !== undefined) return <a className={classes} {...props} />
  return <button className={classes} {...props} />
}

export { Button }
