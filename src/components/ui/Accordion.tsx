import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "../../lib/utils"

export interface AccordionProps {
  items: { title: string; content: React.ReactNode }[];
  className?: string;
}

export function Accordion({ items, className }: AccordionProps) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={cn("space-y-4", className)}>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div 
            key={i} 
            className="border-4 border-black shadow-[4px_4px_0px_0px_black] bg-white transition-colors"
          >
            <button
              onClick={() => toggle(i)}
              className={cn(
                "w-full flex justify-between items-center p-4 md:p-6 text-left font-bold text-xl md:text-2xl uppercase tracking-wider transition-colors",
                isOpen ? "bg-[#D02020] text-white" : "hover:bg-gray-50 text-black"
              )}
            >
              <span>{item.title}</span>
              <div className={cn("inline-flex items-center justify-center p-1 border-2 transition-transform duration-200", 
                  isOpen ? "rotate-180 border-white text-white" : "border-black text-black"
              )}>
                <ChevronDown className="w-6 h-6" strokeWidth={3} />
              </div>
            </button>
            {isOpen && (
              <div className="p-4 md:p-6 bg-[#FFF9C4] text-black border-t-4 border-black text-base md:text-lg font-medium leading-relaxed">
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  )
}
