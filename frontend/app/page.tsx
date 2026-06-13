'use client';

// Step 5: Updated import statement to include useState
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import IntelligenceSidebar from '@/components/IntelligenceSidebar'; 

const TractionChart = dynamic(
  () => import('@/components/TractionChart').then((mod) => mod.default),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex items-center justify-center">
        <span className="text-sm text-gray-500 animate-pulse font-medium">Spawning ECharts Pipeline Engine...</span>
      </div>
    )
  }
);

export default function Home() {
  // Step 5: Instantiated the local state container for modal tracking
  const [showInfo, setShowInfo] = useState(false);

  return (
    <main className="min-h-screen bg-[#0A0A12] text-white font-sans antialiased selection:bg-emerald-500/30">
      
      {/* Step 6: Added the fixed positioning (i) Trigger Button */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setShowInfo(true)}
          className="w-10 h-10 rounded-full border border-emerald-500 bg-black/70 text-emerald-400 font-bold transition-all hover:bg-emerald-500/10 focus:outline-none"
        >
          i
        </button>
      </div>

      <div className="flex h-screen overflow-hidden">
        
        {/* Main Stage Panel Area - 70% Width Split */}
        <div className="w-[70%] p-6 overflow-y-auto space-y-6">
          
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-white">
              Infocreon Internship - Crowdfunding Deal Radar
            </h1>
            <p className="text-xs text-gray-500 mt-1 uppercase tracking-widest font-semibold">
              Core Infrastructure Rail: <span className="text-emerald-400">Capital Formation</span>
            </p>
          </div>

          {/* KPI Metrics Dashboard Grid */}
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-[#0B1117] border border-[#1F2937] rounded-xl p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">Total Deals</p>
              <h2 className="text-2xl font-bold mt-1">128</h2>
            </div>
            <div className="bg-[#0B1117] border border-[#1F2937] rounded-xl p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">Capital Raised</p>
              <h2 className="text-2xl font-bold mt-1">$42M</h2>
            </div>
            <div className="bg-[#0B1117] border border-[#1F2937] rounded-xl p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">Avg Valuation</p>
              <h2 className="text-2xl font-bold mt-1">$8.4M</h2>
            </div>
            <div className="bg-[#0B1117] border border-[#1F2937] rounded-xl p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">Top Sector</p>
              <h2 className="text-2xl font-bold mt-1 text-emerald-400">FinTech</h2>
            </div>
          </div>

          {/* Analytics Chart Container */}
          <div className="bg-[#0B1117] border border-[#1F2937] rounded-xl p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-white tracking-tight">Traction Trends</h3>
              <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                Live SEC Stream
              </span>
            </div>
            <div className="h-64 w-full relative">
              <TractionChart />
            </div>
          </div>

          {/* Active Capital Table Stream */}
          <div className="bg-[#0B1117] border border-[#1F2937] rounded-xl p-5">
            <h3 className="text-sm font-semibold text-white mb-4 tracking-tight">Active Deals</h3>
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="text-xs uppercase tracking-wider text-gray-500 border-b border-[#1F2937]">
                  <th className="pb-3 font-semibold">Company</th>
                  <th className="pb-3 font-semibold">Sector</th>
                  <th className="pb-3 font-semibold">Raise</th>
                  <th className="pb-3 font-semibold">Stage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1F2937] text-gray-300">
                <tr className="group">
                  <td className="py-3.5 font-medium text-white group-hover:text-emerald-400 transition-colors">FinGrow</td>
                  <td className="py-3.5 text-gray-400">FinTech</td>
                  <td className="py-3.5">$500K</td>
                  <td className="py-3.5"><span className="text-xs bg-emerald-400/10 text-emerald-400 px-2 py-0.5 rounded font-medium">Seed</span></td>
                </tr>
                <tr className="group">
                  <td className="py-3.5 font-medium text-white group-hover:text-emerald-400 transition-colors">EcoGrid</td>
                  <td className="py-3.5 text-gray-400">ClimateTech</td>
                  <td className="py-3.5">$1M</td>
                  <td className="py-3.5"><span className="text-xs bg-indigo-400/10 text-[#818CF8] px-2 py-0.5 rounded font-medium">Series A</span></td>
                </tr>
                <tr className="group">
                  <td className="py-3.5 font-medium text-white group-hover:text-emerald-400 transition-colors">HealthAI</td>
                  <td className="py-3.5 text-gray-400">HealthTech</td>
                  <td className="py-3.5">$750K</td>
                  <td className="py-3.5"><span className="text-xs bg-emerald-400/10 text-emerald-400 px-2 py-0.5 rounded font-medium">Seed</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Intelligence Sidebar Panel Area - 30% Width Split */}
        <div className="w-[30%] border-l border-[#1F2937] bg-[#0B1117]">
          <IntelligenceSidebar />
        </div>

      </div>

      {/* Step 7: Conditional Modal Markup Injection */}
      {showInfo && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[1000] backdrop-blur-xs">
          <div className="bg-[#0B1117] border border-emerald-500 rounded-xl p-6 w-[420px] shadow-2xl">
            
            <h2 className="text-xl font-bold text-emerald-400">
              Architect Metadata
            </h2>

            <div className="mt-4 space-y-3 text-sm text-gray-300">
              <p>
                <strong>Architect:</strong> Vipanjika P
              </p>

              <p>
                <strong>Batch:</strong> Batch 2 Interns
              </p>

              <p>
                <strong>Stack:</strong>
                <br />
                Next.js
                <br />
                FastAPI
                <br />
                Tailwind CSS
                <br />
                ECharts
              </p>
            </div>

            <button
              onClick={() => setShowInfo(false)}
              className="mt-6 px-4 py-2 rounded-lg bg-emerald-600 text-white font-semibold transition-colors hover:bg-emerald-700"
            >
              Close
            </button>

          </div>
        </div>
      )}

    </main>
  );
}