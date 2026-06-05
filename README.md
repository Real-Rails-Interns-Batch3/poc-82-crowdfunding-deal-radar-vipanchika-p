# POC 82 – Crowdfunding Deal Radar

**Author:** Vipanchika P
**POC ID:** 82
**Rail Category:** Capital Formation

## Overview

Crowdfunding Deal Radar is a Real Rails Intelligence Dashboard designed to visualize alternative capital formation activity. The platform provides insights into crowdfunding deals, sector trends, fundraising traction, and market intelligence through an interactive dashboard.

## Features

* Real Rails Obsidian UI (#030712)
* 70/30 Intelligence Dashboard Layout
* KPI Metrics Cards
* Traction Trend Visualization
* Active Deals Table
* Intelligence Sidebar
* Sector-Based Filtering
* Download Sample Data
* FastAPI Backend Integration
* CSV-Based Data Pipeline

## Tech Stack

### Frontend

* Next.js 14+
* TypeScript
* Tailwind CSS
* Recharts
* shadcn/ui

### Backend

* FastAPI
* Pandas
* Python

## Project Structure

```text
poc-82-crowdfunding-deal-radar-vipanchika-p/
│
├── frontend/
│   ├── app/
│   ├── components/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── main.py
│   ├── data/
│   │   └── deals.csv
│   └── requirements.txt
│
├── VAR_REPORT.md
├── UAT_CHECKLIST.md
└── README.md
```

## Installation

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```text
http://localhost:3000
```

### Backend

```bash
cd backend
python -m venv venv
```

Activate the virtual environment:

```bash
venv\Scripts\activate
```

Install dependencies:

```bash
pip install fastapi uvicorn pandas
```

Run the backend:

```bash
uvicorn main:app --reload
```

Backend runs on:

```text
http://localhost:8000
```

## API Endpoints

### Health Check

```http
GET /
```

### Deals Data

```http
GET /deals
```

Returns crowdfunding deal information in JSON format.

## Dashboard Sections

### Main Stage (70%)

* KPI Metrics
* Traction Trends Chart
* Active Deals Table

### Intelligence Sidebar (30%)

* Why This Matters
* Who Controls The Rail
* Infrastructure Filters
* Download Sample Data

## Why This Matters

Crowdfunding activity reveals emerging capital formation trends and provides visibility into fundraising activity across sectors.

## Who Controls The Rail

SEC EDGAR disclosures, crowdfunding platforms, founders, and investors collectively shape the flow of capital formation.

## Future Enhancements

* SEC EDGAR API Integration
* LinkedIn Signal Tracking
* Live Deal Feed Monitoring
* Advanced Analytics
* Export Reports

## Status

✅ Phase 1 Complete
✅ Dashboard UI Complete
✅ FastAPI Backend Ready
✅ VAR Review Ready
✅ UAT Ready
