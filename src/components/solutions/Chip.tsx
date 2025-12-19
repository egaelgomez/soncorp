import { cn } from "@/lib/utils";

interface ChipProps {
  children: React.ReactNode;
  variant?: "default" | "metric" | "tool" | "audience";
  className?: string;
}

const Chip = ({ children, variant = "default", className }: ChipProps) => {
  const variants = {
    default: "bg-muted border-border text-muted-foreground",
    metric: "bg-secondary/10 border-secondary/30 text-secondary",
    tool: "bg-primary/10 border-primary/30 text-primary",
    audience: "bg-accent/10 border-accent/30 text-foreground",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-1 text-xs font-medium rounded-full border transition-colors",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
};

export default Chip;
