import { AgentCard } from "./AgentCard";
import { mockAgents } from "./mockData";

interface AgentGridProps {
  searchQuery: string;
  category: string;
}

export function AgentGrid({ searchQuery, category }: AgentGridProps) {
  const filteredAgents = mockAgents.filter((agent) => {
    const matchesSearch =
      searchQuery === "" ||
      agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      agent.creator.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      agent.category.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = 
      category === "all" || 
      agent.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredAgents.map((agent) => (
        <AgentCard key={agent.id} agent={agent} />
      ))}
    </div>
  );
}