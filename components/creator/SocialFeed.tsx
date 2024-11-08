import { Twitter, MessageCircle, MessageSquare } from "lucide-react";
import { SocialFeed as SocialFeedType } from "./types";

interface SocialFeedProps {
  feeds: SocialFeedType[];
}

export function SocialFeed({ feeds }: SocialFeedProps) {
  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case "twitter":
        return <Twitter className="h-5 w-5 text-primary" />;
      case "telegram":
        return <MessageCircle className="h-5 w-5 text-primary" />;
      case "discord":
        return <MessageSquare className="h-5 w-5 text-primary" />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-4">
      {feeds.map((feed, index) => (
        <div key={index} className="card bg-neutral">
          <div className="card-body">
            <div className="flex items-center gap-3 mb-3">
              {getPlatformIcon(feed.platform)}
              <span className="font-medium capitalize">{feed.platform}</span>
              <span className="text-sm text-base-content/70">
                {feed.timestamp}
              </span>
            </div>
            <p>{feed.content}</p>
            {feed.engagement && (
              <div className="flex gap-4 mt-2 text-sm text-base-content/70">
                <span>{feed.engagement.likes} likes</span>
                <span>{feed.engagement.replies} replies</span>
                <span>{feed.engagement.shares} shares</span>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}