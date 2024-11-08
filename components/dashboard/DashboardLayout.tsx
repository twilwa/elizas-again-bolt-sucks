"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Bot,
  Wallet,
  Settings,
  Menu,
  X,
  BookOpen,
  Package,
  Users,
  BarChart,
} from "lucide-react";
import Link from "next/link";
import { ScrollArea } from "@/components/ui/scroll-area";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuItems = [
    { icon: Bot, label: "My Agents", href: "/dashboard" },
    { icon: Package, label: "Marketplace", href: "/marketplace" },
    { icon: Users, label: "Connected Clients", href: "/dashboard/clients" },
    { icon: BookOpen, label: "Tutorials", href: "/dashboard/tutorials" },
    { icon: BarChart, label: "Analytics", href: "/dashboard/analytics" },
    { icon: Settings, label: "Settings", href: "/dashboard/settings" },
  ];

  return (
    <div className="min-h-screen bg-base-100">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={cn(
          "fixed top-0 left-0 z-50 h-full w-64 bg-neutral transform transition-transform duration-200 ease-in-out lg:translate-x-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-16 items-center justify-between px-4 border-b border-base-300">
          <Link href="/" className="flex items-center space-x-2">
            <Bot className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Elizas</span>
          </Link>
          <button
            className="btn btn-ghost btn-sm lg:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <ScrollArea className="h-[calc(100vh-4rem)] py-4">
          <nav className="space-y-2 px-2">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-base-300 transition-colors"
              >
                <item.icon className="h-5 w-5 text-primary" />
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
        </ScrollArea>
      </div>

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Top bar */}
        <div className="sticky top-0 z-40 h-16 border-b border-base-300 bg-base-100/95 backdrop-blur">
          <div className="flex h-16 items-center gap-4 px-4">
            <button
              className="btn btn-ghost btn-sm lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </button>
            <div className="flex-1" />
            <button className="btn btn-ghost btn-sm">
              <Wallet className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Page content */}
        <main className="min-h-[calc(100vh-4rem)]">{children}</main>
      </div>
    </div>
  );
}