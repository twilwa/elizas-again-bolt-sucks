"use client";

import { useState } from "react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { MarketplaceHeader } from "@/components/marketplace/MarketplaceHeader";
import { AgentGrid } from "@/components/marketplace/AgentGrid";
import { CategoryTabs } from "@/components/marketplace/CategoryTabs";

export default function MarketplacePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-base-100">
        <div className="container mx-auto px-4 py-6">
          <MarketplaceHeader searchQuery={searchQuery} onSearch={setSearchQuery} />
          <CategoryTabs 
            selectedCategory={selectedCategory} 
            onSelectCategory={setSelectedCategory} 
          />
          <AgentGrid 
            searchQuery={searchQuery} 
            category={selectedCategory} 
          />
        </div>
      </div>
    </DashboardLayout>
  );
}