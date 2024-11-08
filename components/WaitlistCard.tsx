interface WaitlistCardProps {
  title: string;
  description: string;
}

export function WaitlistCard({ title, description }: WaitlistCardProps) {
  return (
    <div className="card bg-neutral bg-opacity-50 backdrop-blur-lg">
      <div className="card-body">
        <h2 className="card-title text-2xl font-bold">{title}</h2>
        <p className="text-gray-300">{description}</p>
        <div className="form-control">
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered bg-base-200 mb-4"
          />
          <button className="btn btn-primary w-full">Join Waitlist</button>
        </div>
      </div>
    </div>
  );
}