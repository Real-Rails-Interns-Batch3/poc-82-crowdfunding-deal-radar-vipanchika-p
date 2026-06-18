# POC 82 – Crowdfunding Deal Radar

**Author:** Vipanchika P  
**POC ID:** 82  
**Rail Category:** Capital Formation  

## Overview

Crowdfunding Deal Radar is an enterprise-grade Intelligence Dashboard designed to track and visualize alternative capital formation activity. By migrating from legacy static datasets to a live upstream integration with the SEC EDGAR disclosure pipeline, the platform delivers real-time corporate records, ticker distributions, and active market registrations through a low-latency, streaming-optimized user interface.

## Features

* **Real Rails Obsidian UI:** Deep-spectrum dark interface (`#030712`) engineered for high-density financial data visualization.
* **70/30 Architectural Layout:** Asymmetric split prioritizing core data metrics and real-time visualization streams over contextual intelligence rails.
* **KPI Metric Matrices:** At-a-glance performance tracking covering total market opportunities, aggregate capital metrics, and high-frequency sector flows.
* **Traction Trend Analytics:** Client-side charting via an asynchronous Apache ECharts micro-engine pipeline.
* **Active Disclosures Interface:** Strictly-typed table dynamically mapping real-time corporate issuers to their SEC CIK and Ticker configurations.
* **Intelligence Sidebar:** Contextual plane housing system control metadata, rail ownership insights, and environment configuration flags.
* **Decoupled API Architecture:** Fully containerized backend service leveraging decoupled environment profiles (`.env.example`).

## Tech Stack

### Frontend
* **Framework:** Next.js 14+ (App Router Architecture)
* **Language:** TypeScript (Strict Type Safety Interfaces)
* **Styling:** Tailwind CSS (Utility-First Responsive Grid)
* **Data Visualization:** Apache ECharts (Dynamic Async Client-side Hydration via `next/dynamic`)
* **Component Primitive:** shadcn/ui

### Backend
* **Framework:** FastAPI (Asynchronous Server Gateway Interface)
* **Data Processing:** Pandas / Python HTTP Infrastructure
* **Server:** Uvicorn ASGI Engine

---

## Project Structure

```text
poc-82-crowdfunding-deal-radar-vipanchika-p/
│
├── frontend/
│   ├── app/
│   │   └── page.tsx           # Primary client-side data orchestration plane
│   ├── components/
│   │   ├── IntelligenceSidebar.tsx
│   │   └── TractionChart.tsx  # Asynchronous ECharts analytics engine viewport
│   ├── public/
│   ├── .env.example           # Shared environment runtime blueprint
│   └── package.json           # Isolated frontend package manifest
│
├── backend/
│   ├── main.py                # Core FastAPI router and pipeline logic
│   ├── data/
│   └── requirements.txt
│
├── VAR_REPORT.md
├── UAT_CHECKLIST.md
└── README.md
Installation & Environment Setup
Frontend Deployment
Initialize Environment Configuration:
Instantiate your local runtime profile from the shared blueprint:

Bash
cp frontend/.env.example frontend/.env.local
Install Dependencies & Execute Development Server:

Bash
cd frontend
npm install
npm run dev
The local client interface will initialize at: http://localhost:3000

Backend Engine Initialization
Isolate Python Runtime Environment:

Bash
cd backend
python -m venv venv
source venv/bin/activate  # Windows Environments: venv\Scripts\activate
Provision Dependencies & Launch ASGI Pipeline:

Bash
pip install -r requirements.txt
uvicorn main:app --reload
The core service layer will listen at: http://localhost:8000

API Endpoints
System Health Diagnostics
HTTP
GET /
Returns infrastructure operational status and gateway connectivity.

SEC EDGAR Corporate Stream
HTTP
GET /api/sec-edgar
Returns authenticated corporate disclosure structures from the ingestion pipeline in the following strict JSON schema:

JSON
[
  {
    "company": "Apple Inc.",
    "ticker": "AAPL",
    "cik": "0000320193"
  }
]
Dashboard Sections
Main Stage (70% Canvas Width)
KPI Metrics Grid: Computes alternative capital metrics, macro-level volume distributions, and sector concentrations.

Traction Trends Chart: Low-overhead execution loop rendering high-density historical data patterns via Apache ECharts.

Active Deals Table: A typed tabular data grid tracking issuer identity, ticker assets, and Central Index Keys (CIK) with active, hardcoded status attributes.

Intelligence Sidebar (30% Canvas Width)
Context Engine: Provides specialized metadata summaries regarding the velocity of private market capital formation.

Regulatory Rail Control: System-level breakdowns detailing market controls across SEC EDGAR disclosures, core founders, and clearing routes.

Future Enhancements
Cross-referencing SEC filings against real-time LinkedIn signal intelligence tracking.

Time-series predictive forecasting for macro-level capital placement cycles.

Secure multi-format operational data exports (CSV, TSV, and JSON payloads).

Status
✅ Phase 1 Core Architecture Verified

✅ Client-Side ECharts Engine Operational

✅ SEC EDGAR Live Ingestion Pipeline Connected

✅ Redundant Root Manifests Purged

✅ Configuration Decoupling Implemented
