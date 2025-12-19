import { cn } from "@/lib/utils";
import { Solution } from "./solutionsData";

interface SolutionTabsProps {
  solutions: Solution[];
  activeId: string;
  onSelect: (id: string) => void;
}

const SolutionTabs = ({ solutions, activeId, onSelect }: SolutionTabsProps) => {
  const handleKeyDown = (e: React.KeyboardEvent, currentIndex: number) => {
    let newIndex = currentIndex;
    
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      e.preventDefault();
      newIndex = (currentIndex + 1) % solutions.length;
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      e.preventDefault();
      newIndex = (currentIndex - 1 + solutions.length) % solutions.length;
    }
    
    if (newIndex !== currentIndex) {
      onSelect(solutions[newIndex].id);
    }
  };

  return (
    <>
      {/* Desktop: Vertical tabs */}
      <nav
        role="tablist"
        aria-label="Soluciones"
        className="hidden lg:flex flex-col gap-2 min-w-[280px] pr-6 border-r border-border"
      >
        {solutions.map((solution, index) => {
          const Icon = solution.icon;
          const isActive = activeId === solution.id;
          
          return (
            <button
              key={solution.id}
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${solution.id}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => onSelect(solution.id)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className={cn(
                "group flex items-start gap-3 p-4 rounded-lg text-left transition-all duration-200",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                isActive
                  ? "bg-secondary/10 border border-secondary/30"
                  : "hover:bg-muted border border-transparent hover:border-border"
              )}
            >
              <div
                className={cn(
                  "flex items-center justify-center w-10 h-10 rounded-lg transition-colors",
                  isActive ? "bg-secondary/20" : "bg-muted group-hover:bg-muted"
                )}
              >
                <Icon
                  className={cn(
                    "h-5 w-5 transition-colors",
                    isActive ? "text-secondary" : "text-muted-foreground group-hover:text-foreground"
                  )}
                />
              </div>
              <div className="flex-1 min-w-0">
                <span
                  className={cn(
                    "block text-sm font-semibold transition-colors",
                    isActive ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
                  )}
                >
                  {solution.title}
                </span>
                <span className="block text-xs text-muted-foreground mt-0.5 truncate">
                  {solution.shortDesc}
                </span>
              </div>
            </button>
          );
        })}
      </nav>

      {/* Mobile/Tablet: Horizontal scrollable tabs */}
      <nav
        role="tablist"
        aria-label="Soluciones"
        className="lg:hidden flex gap-2 overflow-x-auto pb-4 mb-6 scrollbar-hide -mx-4 px-4"
      >
        {solutions.map((solution, index) => {
          const Icon = solution.icon;
          const isActive = activeId === solution.id;
          
          return (
            <button
              key={solution.id}
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${solution.id}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => onSelect(solution.id)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className={cn(
                "flex items-center gap-2 px-4 py-2.5 rounded-full whitespace-nowrap transition-all duration-200",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary",
                isActive
                  ? "bg-secondary text-secondary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
              )}
            >
              <Icon className="h-4 w-4" />
              <span className="text-sm font-medium">{solution.title.split(" ")[0]}</span>
            </button>
          );
        })}
      </nav>
    </>
  );
};

export default SolutionTabs;
