import * as React from "react"
import { cn } from "../../lib/utils"

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  decorationPattern?: 'circle' | 'square' | 'triangle' | 'none';
  decorationColor?: 'red' | 'blue' | 'yellow';
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, decorationPattern = "circle", decorationColor = "red", ...props }, ref) => {
    
    const colorMap = {
      red: "bg-[#D02020]",
      blue: "bg-[#1040C0]",
      yellow: "bg-[#F0C020]",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "relative bg-white border-4 border-black shadow-[8px_8px_0px_0px_black] rounded-none p-6 md:p-8 transition-transform hover:-translate-y-1 hover:md:-translate-y-2",
          className
        )}
        {...props}
      >
        {decorationPattern !== "none" && (
          <div className="absolute top-4 right-4 w-4 h-4 md:w-6 md:h-6">
            {decorationPattern === 'circle' && (
              <div className={cn("w-full h-full rounded-full border-2 border-black", colorMap[decorationColor])} />
            )}
            {decorationPattern === 'square' && (
              <div className={cn("w-full h-full border-2 border-black", colorMap[decorationColor])} />
            )}
            {decorationPattern === 'triangle' && (
              <div 
                className={cn("w-full h-full border-2 border-black bg-black", colorMap[decorationColor])}
                style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }} 
              />
            )}
          </div>
        )}
        <div className="relative z-10 w-full">
          {children}
        </div>
      </div>
    )
  }
)
Card.displayName = "Card"

export { Card }
