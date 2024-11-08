import { 
  TrendingUp, 
  LineChart, 
  Vote, 
  Users, 
  Gamepad2,
  Code,
  ShoppingCart,
  Briefcase,
  GraduationCap,
  Grid
} from "lucide-react";

const categories = [
  { id: "all", label: "All", icon: Grid },
  { id: "trending", label: "Trending", icon: TrendingUp },
  { id: "investing", label: "Investing", icon: LineChart },
  { id: "governance", label: "Governance", icon: Vote },
  { id: "social", label: "Social", icon: Users },
  { id: "metaverse", label: "Metaverse", icon: Gamepad2 },
  { id: "development", label: "Development", icon: Code },
  { id: "commerce", label: "Commerce", icon: ShoppingCart },
  { id: "business", label: "Business", icon: Briefcase },
  { id: "education", label: "Education", icon: GraduationCap },
];

interface CategoryTabsProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export function CategoryTabs({ selectedCategory, onSelectCategory }: CategoryTabsProps) {
  return (
    <div className="mb-8">
      <div className="tabs tabs-boxed gap-2 p-2">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <button
              key={category.id}
              className={`tab gap-2 ${
                selectedCategory === category.id ? "tab-active" : ""
              }`}
              onClick={() => onSelectCategory(category.id)}
            >
              <Icon className="h-4 w-4" />
              {category.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}