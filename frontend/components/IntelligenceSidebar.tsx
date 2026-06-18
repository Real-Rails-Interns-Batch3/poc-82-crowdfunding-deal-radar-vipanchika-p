'use client';

import React, { useEffect, useState } from 'react';

interface SecCompany {
  company: string;
  cik: string;
  ticker: string;
}

export default function IntelligenceSidebar() {
  const [companies, setCompanies] = useState<SecCompany[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/sec-edgar')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch SEC EDGAR data');
        }
        return res.json();
      })
      .then((result) => {
        setCompanies(result);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const downloadCSV = () => {
    if (companies.length === 0) return;

    let csv = 'Company,CIK,Ticker\n';

    companies.forEach((company) => {
      csv += `${company.company},${company.cik},${company.ticker}\n`;
    });

    const blob = new Blob([csv], {
      type: 'text/csv;charset=utf-8;',
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = 'sec_edgar_companies.csv';
    link.click();

    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-[#0B1117] border border-[#1F2937] rounded-xl p-6 space-y-6 h-full">

      <h2 className="text-base font-bold text-white">
        Intelligence Sidebar
      </h2>

      <div>
        <h4 className="text-[10px] uppercase font-bold tracking-widest text-[#38BDF8]">
          Live SEC EDGAR Data
        </h4>

        {loading && (
          <p className="text-gray-400 mt-3">
            Loading...
          </p>
        )}

        {error && (
          <p className="text-red-500 mt-3">
            {error}
          </p>
        )}

        {!loading && companies.length > 0 && (
          <div className="mt-4 space-y-4 max-h-80 overflow-y-auto">

            {companies.map((company) => (
              <div
                key={company.cik}
                className="border-b border-[#1F2937] pb-3"
              >
                <p className="text-white font-semibold">
                  {company.company}
                </p>

                <p className="text-sm text-gray-400">
                  CIK: {company.cik}
                </p>

                <p className="text-sm text-gray-400">
                  Ticker: {company.ticker}
                </p>
              </div>
            ))}

          </div>
        )}
      </div>

      <div>
        <h4 className="text-[10px] uppercase font-bold tracking-widest text-[#818CF8]">
          Why This Matters
        </h4>

        <p className="text-xs text-gray-400 mt-2">
          This dashboard retrieves live company information from the SEC EDGAR
          service through the FastAPI backend instead of relying on hardcoded
          values.
        </p>
      </div>

      <button
        onClick={downloadCSV}
        disabled={companies.length === 0}
        className="w-full bg-[#38BDF8] text-black font-bold text-xs py-3 rounded-lg hover:bg-[#0EA5E9] disabled:opacity-50"
      >
        Download SEC Data
      </button>

    </div>
  );
}