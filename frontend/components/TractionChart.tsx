'use client';

import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

export default function TractionChart() {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const chartInstance = echarts.init(chartRef.current);

    const option = {
      backgroundColor: 'transparent',
      tooltip: {
        trigger: 'axis',
        backgroundColor: '#0B1117', // Deep Navy Grey
        borderColor: '#1F2937',     // Slate-800
        textStyle: {
          color: '#FFFFFF',
          fontSize: 12,
          fontFamily: 'Inter, sans-serif'
        },
        axisPointer: {
          type: 'line',
          lineStyle: {
            color: '#38BDF8',       // Electric Cyan
            width: 1,
            type: 'dashed'
          }
        }
      },
      grid: {
        top: '10%',
        left: '4%',
        right: '4%',
        bottom: '5%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        axisLine: { lineStyle: { color: '#1F2937' } },
        axisLabel: {
          color: '#6B7280',
          fontSize: 11,
          fontFamily: 'Inter, sans-serif'
        }
      },
      yAxis: {
        type: 'value',
        splitLine: { lineStyle: { color: '#1F2937', type: 'solid' } },
        axisLabel: {
          color: '#6B7280',
          fontSize: 11,
          fontFamily: 'Inter, sans-serif',
          formatter: '${value}M'
        }
      },
      series: [
        {
          name: 'Capital Flow',
          type: 'line',
          smooth: true,
          symbol: 'circle',
          symbolSize: 6,
          itemStyle: { color: '#38BDF8' }, // Electric Cyan
          lineStyle: { color: '#38BDF8', width: 2 },
          // Using object dictionary formatting instead of "new echarts" prevents TypeScript compiler crashes
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                { offset: 0, color: 'rgba(56, 189, 248, 0.25)' }, 
                { offset: 1, color: 'rgba(56, 189, 248, 0.0)' }
              ]
            }
          },
          data: [12, 18, 24, 21, 35, 42] // Synthetic metrics
        }
      ]
    };

    chartInstance.setOption(option);

    const handleResize = () => chartInstance.resize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      chartInstance.dispose();
    };
  }, []);

  return <div ref={chartRef} className="w-full h-full min-h-[340px]" />;
}