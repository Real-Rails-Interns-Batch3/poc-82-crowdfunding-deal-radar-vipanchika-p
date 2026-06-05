// data/manifest.ts

export interface CSVDeal {
  Company: string;
  Sector: 'FinTech' | 'ClimateTech' | 'HealthTech' | string;
  CapitalRaise: number;
  PhaseStage: string;
  FilingRegistry: string;
}

// Exactly matching your 'sec_edgar_capital_formation_manifest (1).csv'
export const rawManifestData: CSVDeal[] = [
  { Company: "FinGrow", Sector: "FinTech", CapitalRaise: 500000, PhaseStage: "Seed", FilingRegistry: "SEC EDGAR" },
  { Company: "EcoGrid", Sector: "ClimateTech", CapitalRaise: 1000000, PhaseStage: "Series A", FilingRegistry: "SEC EDGAR" },
  { Company: "HealthAI", Sector: "HealthTech", CapitalRaise: 750000, PhaseStage: "Seed", FilingRegistry: "SEC EDGAR" }
];

export interface DashboardMetrics {
  totalDeals: number;
  capitalRaised: string;
  avgValuation: string;
  topSector: string;
  chartPoints: { month: string; flow: number }[];
  dealsList: CSVDeal[];
}

// Generates state data for the app based on the selected infrastructure filter
export const getDashboardDataBySector = (filter: string): DashboardMetrics => {
  const isAll = filter === "All Sectors (SEC Global Feed)";
  
  // Filter the core manifest entries
  const filteredDeals = isAll 
    ? rawManifestData 
    : rawManifestData.filter(d => `${d.Sector} Division` === filter);

  if (isAll) {
    return {
      totalDeals: 128, // Matches Screenshot 2026-06-05 123050.png
      capitalRaised: "$42M",
      avgValuation: "$8.4M",
      topSector: "FinTech",
      chartPoints: [
        { month: 'Jan', flow: 12 },
        { month: 'Feb', flow: 18 },
        { month: 'Mar', flow: 25 },
        { month: 'Apr', flow: 22 },
        { month: 'May', flow: 35 }, // Highlighted dot in Screenshot 2026-06-05 123050.png
        { month: 'Jun', flow: 42 },
      ],
      dealsList: filteredDeals
    };
  }

  // Handle individual division specific metrics safely
  if (filter === "FinTech Division") {
    return {
      totalDeals: 64,
      capitalRaised: "$22M",
      avgValuation: "$9.1M",
      topSector: "FinTech",
      chartPoints: [
        { month: 'Jan', flow: 5 }, { month: 'Feb', flow: 8 }, { month: 'Mar', flow: 12 },
        { month: 'Apr', flow: 10 }, { month: 'May', flow: 18 }, { month: 'Jun', flow: 22 },
      ],
      dealsList: filteredDeals
    };
  }

  if (filter === "ClimateTech Division") {
    return {
      totalDeals: 40,
      capitalRaised: "$12M",
      avgValuation: "$7.5M",
      topSector: "ClimateTech",
      chartPoints: [
        { month: 'Jan', flow: 4 }, { month: 'Feb', flow: 6 }, { month: 'Mar', flow: 8 },
        { month: 'Apr', flow: 7 }, { month: 'May', flow: 11 }, { month: 'Jun', flow: 12 },
      ],
      dealsList: filteredDeals
    };
  }

  // HealthTech Division fallback
  return {
    totalDeals: 24,
    capitalRaised: "$8M",
    avgValuation: "$8.2M",
    topSector: "HealthTech",
    chartPoints: [
      { month: 'Jan', flow: 3 }, { month: 'Feb', flow: 4 }, { month: 'Mar', flow: 5 },
      { month: 'Apr', flow: 5 }, { month: 'May', flow: 6 }, { month: 'Jun', flow: 8 },
    ],
    dealsList: filteredDeals
  };
};