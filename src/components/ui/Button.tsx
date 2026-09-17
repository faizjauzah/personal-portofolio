import * as React from "react"
import { cn } from "../../lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'yellow' | 'outline' | 'ghost';
  shape?: 'square' | 'pill';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", shape = "square", size = "default", ...props }, ref) => {
    
    const baseStyles = "inline-flex items-center justify-center font-bold uppercase tracking-wider transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
    
    const variants = {
      primary: "bg-[#D02020] text-white border-2 border-black hover:bg-[#D02020]/90",
      secondary: "bg-[#1040C0] text-white border-2 border-black hover:bg-[#1040C0]/90",
      yellow: "bg-[#F0C020] text-black border-2 border-black hover:bg-[#F0C020]/90",
      outline: "bg-white text-black border-2 border-black hover:bg-gray-50",
      ghost: "border-none text-black hover:bg-black/10 shadow-none active:translate-x-0 active:translate-y-0"
    };

    const shapes = {
      square: "rounded-none",
      pill: "rounded-full"
    };

    const sizes = {
      default: "h-11 px-6 py-2 text-base",
      sm: "h-9 px-4 text-sm",
      lg: "h-14 px-8 text-lg md:text-xl",
      icon: "h-11 w-11"
    };

    // The hard shadow and active press effect is applied to all non-ghost variants
    const effectStyles = variant !== 'ghost' 
      ? "shadow-[4px_4px_0px_0px_black] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
      : "";

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          shapes[shape],
          sizes[size],
          effectStyles,
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
