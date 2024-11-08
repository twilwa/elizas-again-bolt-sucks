"use client";

import { Rocket } from "lucide-react";
import Link from "next/link";
import { ConnectButton } from "./ConnectButton";
import { OktoButton } from "./OktoButton";

export function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="container mx-auto">
        <div className="flex-1">
          <Link href="/" className="flex items-center space-x-2">
            <Rocket className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">
              Elizas<span className="text-primary">.xyz</span>
            </span>
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 items-center">
            <li>
              <Link href="/marketplace" className="hover:text-primary">
                Marketplace
              </Link>
            </li>
            <li>
              <Link href="/dashboard" className="hover:text-primary">
                Dashboard
              </Link>
            </li>
            <li className="ml-4">
              <div className="flex gap-2">
                <ConnectButton />
                <OktoButton />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}