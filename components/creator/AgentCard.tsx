import { Bot, Users, Wallet, Star } from "lucide-react";
import { Agent } from "./types";

interface AgentCardProps {
  agent: Agent;
  onClick: () => void;
}

export function AgentCard({ agent, onClick }: AgentCardProps) {
  return (
    <div 
      className="card bg-neutral hover:shadow-lg transition-all cursor-pointer" 
      onClick={onClick}
    >
      <figure className="relative">
        <img
          src={agent.image}
          alt={agent.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4 flex items-center gap-2 bg-base-100/90 rounded-full px-3 py-1">
          <Star className="h-4 w-4 text-yellow-500 fill-current" />
          <span className="text-sm font-medium">{agent.rating}</span>
        </div>
      </figure>

      <div className="card-body">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="card-title text-xl">{agent.name}</h3>
            <p className="text-sm text-base-content/70">{agent.category}</p>
          </div>
          <div className="badge badge-primary">{agent.price}</div>
        </div>

        <p className="text-sm mb-6">{agent.description}</p>

        <div className="grid grid-cols-3 gap-2 text-sm">
          <div className="flex items-center gap-1">
            <Bot className="h-4 w-4 text-primary" />
            <span>{agent.stats.tasks}+ tasks</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4 text-primary" />
            <span>{agent.stats.clients} clients</span>
          </div>
          <div className="flex items-center gap-1">
            <Wallet className="h-4 w-4 text-primary" />
            <span>{agent.stats.tokens} tokens</span>
          </div>
        </div>
      </div>
    </div>
  );
}