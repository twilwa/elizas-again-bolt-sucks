import { Agent } from "./types";
import { AgentCard } from "./AgentCard";

interface CreatorAgentsProps {
  agents: Agent[];
  onSelectAgent: (agent: Agent) => void;
}

export function CreatorAgents({ agents, onSelectAgent }: CreatorAgentsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {agents.map((agent) => (
        <AgentCard
          key={agent.id}
          agent={agent}
          onClick={() => onSelectAgent(agent)}
        />
      ))}
    </div>
  );
}