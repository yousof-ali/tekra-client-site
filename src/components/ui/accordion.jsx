"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDownIcon, Plus, PlusIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Accordion({
  ...props
}) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({
  className,
  ...props
}) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("mt-3", className)}
      {...props} />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}) {
  return (
    <AccordionPrimitive.Header className="flex   bg-white ">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          `focus-visible:ring-ring/50
          flex flex-1 items-start justify-between  px-3  gap-4
           py-4 text-left text-sm md:text-base font-medium
          transition-all outline-none hover:underline
          disabled:pointer-events-none disabled:opacity-50
          border-b border-transparent
          data-[state=open]:bg-blue-300
          data-[state=open]:border-b
          data-[state=open]:border-muted-foreground/30`,
          className
        )}
        {...props}
      >
        {children}
        <PlusIcon className="text-muted-foreground pointer-events-none size-6 shrink-0 translate-y-0.5 transition-transform duration-200 data-[state=open]:rotate-45" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}


function AccordionContent({
  className,
  children,
  ...props
}) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up px-3 data-[state=open]:animate-accordion-down pt-3 overflow-hidden text-sm data-[state=open]:bg-blue-300"
      {...props}>
      <div className={cn("pt-0 pb-4", className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
