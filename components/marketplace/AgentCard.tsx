import { 
  Twitter, 
  MessageCircle, 
  Bot,
  Users,
  Wallet,
  ExternalLink,
  Star
} from "lucide-react";
import { Agent } from "./types";
import Link from "next/link";

interface AgentCardProps {
  agent: Agent;
}

export function AgentCard({ agent }: AgentCardProps) {
  return (
    <div className="card bg-neutral hover:shadow-lg transition-all">
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

        <div className="space-y-4">
          {/* Creator Info */}
          <Link
            href={`/creator/${agent.creator.id}`}
            className="flex items-center gap-3 hover:bg-base-300 p-2 rounded-lg transition-colors"
          >
            <img
              src={agent.creator.avatar}
              alt={agent.creator.name}
              className="w-8 h-8 rounded-full"
            />
            <div>
              <p className="text-sm font-medium">{agent.creator.name}</p>
              <p className="text-xs text-base-content/70">Creator</p>
            </div>
          </Link>

          {/* Social Links */}
          <div className="flex gap-2">
            {agent.social.twitter && (
              <a
                href={agent.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-ghost btn-square"
              >
                <Twitter className="h-4 w-4" />
              </a>
            )}
            {agent.social.telegram && (
              <a
                href={agent.social.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-ghost btn-square"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            )}
          </div>

          {/* Stats */}
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

          {/* Action Buttons */}
          <div className="card-actions justify-end pt-2">
            <button className="btn btn-sm btn-ghost">
              Details
              <ExternalLink className="h-4 w-4" />
            </button>
            <button className="btn btn-sm btn-primary">
              Connect
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}