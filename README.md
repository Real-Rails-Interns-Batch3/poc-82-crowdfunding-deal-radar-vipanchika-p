POC 82 – Crowdfunding Deal Radar
Author: Vipanchika P

POC ID: 82

Rail Category: Capital Formation

Overview
Crowdfunding Deal Radar is a Real Rails Intelligence Dashboard designed to visualize alternative capital formation activity. The platform ingest directly from SEC EDGAR disclosure feeds to track real-time organizational records, ticker distributions, and active market registrations through an interactive, streaming-ready panel dashboard.

Features
Real Rails Obsidian UI (#030712)

70/30 Intelligence Dashboard Layout

KPI Metrics Cards with Core Infrastructure Rails

Traction Trend Analytics via Dynamic ECharts Pipeline

Active Deals Table mapped to SEC CIK and Ticker data

Intelligence Sidebar with structural metadata triggers

Environment-backed API orchestration (.env.example)

FastAPI Backend Live Feed Pipeline

Tech Stack
Frontend
Next.js 14+ (App Router)

TypeScript (Strictly Typed Data Interfaces)

Tailwind CSS

Apache ECharts (Dynamic Client-side Rendering via next/dynamic)

shadcn/ui

Backend
FastAPI

Pandas / Python HTTP clients

Uvicorn ASGI Server

Project Structure
Plaintext
poc-82-crowdfunding-deal-radar-vipanchika-p/
│
├── frontend/
│   ├── app/
│   │   └── page.tsx           # Primary client-side rendering pipeline
│   ├── components/
│   │   ├── IntelligenceSidebar.tsx
│   │   └── TractionChart.tsx  # Dynamic asynchronous ECharts viewport
│   ├── public/
│   ├── .env.example           # Shared environment architecture blueprint
│   └── package.json           # Isolated frontend package manifest
│
├── backend/
│   ├── main.py                # Core FastAPI app router
│   ├── data/
│   └── requirements.txt
│
├── VAR_REPORT.md
├── UAT_CHECKLIST.md
└── README.md
Installation
Frontend Environment Setup
Copy the environment variables template:

Bash
cp frontend/.env.example frontend/.env.local
Spin up the Next.js production/dev workspace:

Bash
cd frontend
npm install
npm run dev
Frontend runs locally on: http://localhost:3000

Backend Engine Setup
Initialize and activate the virtual environment:

Bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows use: venv\Scripts\activate
Install active requirements and start the ASGI pipeline:

Bash
pip install -r requirements.txt
uvicorn main:app --reload
Backend routes listen on: http://localhost:8000

API Endpoints
Health Check
HTTP
GET /
Live SEC EDGAR Corporate Stream
HTTP
GET /api/sec-edgar
Returns structured, authenticated SEC corporate information in the following strict schema:

JSON
[
  {
    "company": "Apple Inc.",
    "ticker": "AAPL",
    "cik": "0000320193"
  }
]
Dashboard Sections
Main Stage (70%)
KPI Metrics Grid: Aggregated insights tracking total market opportunities, capital distribution scales, and high-frequency sectors.

Traction Trends Chart: Low-latency client-side rendering powered by Apache ECharts mapping real-time asset flows.

Active Deals Table: Strongly-typed corporate disclosure monitor showcasing Issuer Name, Ticker symbol, unique Central Index Key (CIK), and explicit real-time status indices.

Intelligence Sidebar (30%)
Context Engine: Direct metadata summaries detailing why capital formation visibility moves private markets.

Regulatory Rail Control: System level insights tracking SEC EDGAR disclosures, market founders, and fund clearing routing points.

Future Enhancements
LinkedIn Signal Tracking & Corporate Hierarchy Mapping

Advanced Time-Series forecasting models for market compliance timelines

Multi-format data output modules (Secure CSV/JSON exports)

Status
✅ Phase 1 Complete

✅ ECharts Micro-engine Active

✅ SEC EDGAR Live Feed Integration Wired

✅ Duplicate Root Dependencies Purged

✅ Environment Variables Template Staged
