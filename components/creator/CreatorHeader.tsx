import { Shield, Users, Bot, Wallet } from "lucide-react";
import { Creator } from "./types";

interface CreatorHeaderProps {
  creator: Creator;
}

export function CreatorHeader({ creator }: CreatorHeaderProps) {
  return (
    <div className="card bg-neutral mb-8">
      <div className="card-body">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="relative">
            <img
              src={creator.avatar}
              alt={creator.name}
              className="w-24 h-24 rounded-lg object-cover"
            />
            {creator.verified && (
              <div className="absolute -top-2 -right-2 bg-primary rounded-full p-1">
                <Shield className="h-4 w-4" />
              </div>
            )}
          </div>

          <div className="flex-1 space-y-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">{creator.name}</h1>
              <p className="text-base-content/70">{creator.bio}</p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Bot className="h-5 w-5 text-primary" />
                <span>{creator.stats.agents} Agents</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <span>{creator.stats.clients} Total Clients</span>
              </div>
              <div className="flex items-center gap-2">
                <Wallet className="h-5 w-5 text-primary" />
                <span>{creator.stats.volume} Volume</span>
              </div>
            </div>

            <div className="flex gap-2">
              {creator.socials.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-outline"
                >
                  {social.platform}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}