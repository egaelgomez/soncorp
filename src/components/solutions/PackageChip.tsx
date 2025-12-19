import { cn } from "@/lib/utils";

interface PackageChipProps {
  name: string;
  description: string;
  isActive?: boolean;
  onClick?: () => void;
}

const PackageChip = ({ name, description, isActive, onClick }: PackageChipProps) => {
  const variants: Record<string, string> = {
    Starter: "hover:border-blue-500/50 hover:bg-blue-500/10",
    Growth: "hover:border-secondary/50 hover:bg-secondary/10",
    Enterprise: "hover:border-amber-500/50 hover:bg-amber-500/10",
  };

  const activeVariants: Record<string, string> = {
    Starter: "border-blue-500/50 bg-blue-500/10",
    Growth: "border-secondary/50 bg-secondary/10",
    Enterprise: "border-amber-500/50 bg-amber-500/10",
  };

  return (
    <button
      onClick={onClick}
      className={cn(
        "group flex flex-col items-start p-3 rounded-lg border border-border bg-card/50 transition-all duration-200",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        variants[name] || "hover:border-secondary/50",
        isActive && (activeVariants[name] || "border-secondary/50 bg-secondary/10")
      )}
    >
      <span className="text-sm font-semibold text-foreground">{name}</span>
      <span className="text-xs text-muted-foreground">{description}</span>
    </button>
  );
};

export default PackageChip;
