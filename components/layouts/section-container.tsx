import { cn } from "@/lib";

function SectionContainer({
  children,
  className,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section className={cn(className, "py-6")} {...props}>
      {children}
    </section>
  );
}

export { SectionContainer };
