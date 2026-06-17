'use client';

import React from 'react';

export default function IntelligenceSidebar() {
  
  // Synthetic dataset tracking public data feed fields (FIX 3: Replaced SEC EDGAR with Demo Dataset)
  const secDatasetArray = [
    { Company: "FinGrow", Sector: "FinTech", CapitalRaise: "500000", PhaseStage: "Seed", FilingRegistry: "Demo Dataset" },
    { Company: "EcoGrid", Sector: "ClimateTech", CapitalRaise: "1000000", PhaseStage: "Series A", FilingRegistry: "Demo Dataset" },
    { Company: "HealthAI", Sector: "HealthTech", CapitalRaise: "750000", PhaseStage: "Seed", FilingRegistry: "Demo Dataset" }
  ];

  const handleDatasetDownloadEvent = () => {
    if (secDatasetArray.length === 0) return;

    const fileHeaders = Object.keys(secDatasetArray[0]).join(',') + '\n';
    const fileRows = secDatasetArray
      .map(entry => Object.values(entry).map(val => `"${val}"`).join(','))
      .join('\n');

    const combinedBlobUri = "data:text/csv;charset=utf-8," + encodeURIComponent(fileHeaders + fileRows);
    
    const virtualLinkDOMElement = document.createElement('a');
    virtualLinkDOMElement.setAttribute('href', combinedBlobUri);
    // FIX 4: Updated filename to eliminate SEC reference
    virtualLinkDOMElement.setAttribute('download', 'crowdfunding_demo_dataset.csv');
    
    document.body.appendChild(virtualLinkDOMElement);
    virtualLinkDOMElement.click();
    document.body.removeChild(virtualLinkDOMElement);
  };

  return (
    <div className="bg-[#0B1117] border border-[#1F2937] rounded-xl p-6 space-y-6 h-full"> {/* Surface: #0B1117, Borders: #1F2937 */}
      
      <div>
        <h2 className="text-base font-bold text-white tracking-tight">Intelligence Sidebar</h2>
      </div>

      {/* Section B: Why This Matters */}
      <div className="space-y-1">
        <h4 className="text-[10px] uppercase font-bold tracking-widest text-[#38BDF8]">Why This Matters</h4> {/* Accent Primary: #38BDF8 */}
        <p className="text-xs text-gray-400 leading-relaxed font-normal">
          Makes alternative capital formation and traction snapshots tangible to the public.
        </p>
      </div>

      {/* Section C: Who Controls The Rail */}
      <div className="space-y-1">
        <h4 className="text-[10px] uppercase font-bold tracking-widest text-[#818CF8]">Who Controls The Rail</h4> {/* Accent Secondary: #818CF8 */}
        {/* FIX 2: Replaced misleading wording with demonstration statement */}
        <p className="text-xs text-gray-400 leading-relaxed font-normal">
          This demonstration dashboard models how crowdfunding and regulatory disclosure data can be analyzed.
        </p>
      </div>

      {/* Section D: Filters */}
      <div className="space-y-2">
        <h4 className="text-[10px] uppercase font-bold tracking-widest text-gray-500">Infrastructure Filter</h4>
        <select className="w-full bg-[#030712] border border-[#1F2937] rounded-lg p-2.5 text-xs font-medium text-gray-300 focus:outline-none focus:border-[#38BDF8] transition-all cursor-pointer"> {/* Background: #030712 */}
          <option value="all">All Sectors (Demo Global Feed)</option>
          <option value="fintech">FinTech Division</option>
          <option value="climate">ClimateTech Division</option>
          <option value="health">HealthTech Division</option>
        </select>
      </div>

      {/* Section E: Download Utility */}
      <div className="pt-2">
        <button
          onClick={handleDatasetDownloadEvent}
          className="w-full bg-[#38BDF8] text-[#030712] font-bold text-xs py-3 px-4 rounded-lg transition-all hover:bg-[#38BDF8]/90 active:scale-[0.99]"
        >
          Download Sample Data
        </button>
      </div>

    </div>
  );
}