from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
import os
import requests

app = FastAPI(
    title="Crowdfunding Deal Radar API - POC 1",
    description="Production-ready backend addressing missing features from GitHub audit.",
    version="1.1.0"
)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# -------------------------
# KPI Metrics
# -------------------------
@app.get("/api/metrics")
async def get_metrics():
    return {
        "total_deals": 128,
        "capital_raised": "$42M",
        "avg_valuation": "$8.4M",
        "top_sector": "FinTech",
        "source_attribution": {
            "provider": "SEC EDGAR",
            "data_rail": "Form C / Form 1-A",
            "last_updated": "Live"
        }
    }


# -------------------------
# Term Cards
# -------------------------
@app.get("/api/term-cards")
async def get_term_cards():
    return {
        "funding_instrument": {
            "title": "SAFE",
            "common_cap": "$10M",
            "discount_rate": "20%"
        },
        "regulatory_limits": {
            "title": "Reg CF",
            "cap": "$5,000,000",
            "rolling_period": "12 Months"
        }
    }


# -------------------------
# Active Deals (Demo)
# -------------------------
@app.get("/api/active-deals")
async def get_active_deals():
    return [
        {
            "company": "FinGrow",
            "sector": "FinTech",
            "raise": "$500K",
            "stage": "Seed",
            "tooltip_info": "Demo record"
        },
        {
            "company": "EcoGrid",
            "sector": "ClimateTech",
            "raise": "$1M",
            "stage": "Series A",
            "tooltip_info": "Demo record"
        },
        {
            "company": "HealthAI",
            "sector": "HealthTech",
            "raise": "$2.5M",
            "stage": "Seed",
            "tooltip_info": "Demo record"
        }
    ]


# -------------------------
# Sidebar Text
# -------------------------
@app.get("/api/intelligence-sidebar")
async def get_sidebar_content():
    return {
        "why_this_matters": {
            "header": "WHY THIS MATTERS",
            "content": "This dashboard demonstrates how SEC EDGAR data can be retrieved and visualized."
        },
        "who_controls_the_rail": {
            "header": "WHO CONTROLS THE RAIL",
            "content": "SEC EDGAR provides public filing information for registered companies."
        }
    }


# -------------------------
# Compare Deals
# -------------------------
class ComparisonRequest(BaseModel):
    company_ids: List[str]


@app.post("/api/compare-deals")
async def compare_deals(request: ComparisonRequest):

    all_comparisons = {
        "FinGrow": {
            "valuation_cap": "$8M",
            "min_ticket": "$100",
            "investors": 412,
            "velocity": "High"
        },
        "EcoGrid": {
            "valuation_cap": "$12M",
            "min_ticket": "$500",
            "investors": 189,
            "velocity": "Medium"
        },
        "HealthAI": {
            "valuation_cap": "$15M",
            "min_ticket": "$250",
            "investors": 634,
            "velocity": "Extreme"
        }
    }

    compared = {
        cid: all_comparisons.get(cid, "Unavailable")
        for cid in request.company_ids
    }

    return {
        "comparison_matrix": compared
    }


# -------------------------
# Traction Chart
# -------------------------
@app.get("/api/traction-trends")
async def get_traction_trends():
    return [
        {"month": "Jan", "capital_flow": 12},
        {"month": "Feb", "capital_flow": 19},
        {"month": "Mar", "capital_flow": 25},
        {"month": "Apr", "capital_flow": 22},
        {"month": "May", "capital_flow": 35},
        {"month": "Jun", "capital_flow": 42},
    ]


# -------------------------
# REAL SEC EDGAR FETCH
# -------------------------
@app.get("/api/sec-edgar")
async def get_sec_edgar():

    headers = {
        "User-Agent": os.getenv(
            "SEC_EDGAR_USER_AGENT",
            "Vipanjika P vipanchikap23@gmail.com"
        )
    }

    url = "https://www.sec.gov/files/company_tickers.json"

    try:

        response = requests.get(
            url,
            headers=headers,
            timeout=10
        )

        response.raise_for_status()

        sec_data = response.json()

        companies = []

        # Return first 10 companies
        for company in list(sec_data.values())[:10]:

            companies.append({
                "company": company["title"],
                "ticker": company["ticker"],
                "cik": str(company["cik_str"]).zfill(10)
            })

        return companies

    except requests.RequestException as e:
        raise HTTPException(
            status_code=500,
            detail=str(e)
        )


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(
        "main:app",
        host="127.0.0.1",
        port=8000,
        reload=True
    )