import { Chart } from '@antv/g2'
import React, { useEffect, useRef } from 'react'

export default function Chart1() {
  const chartRef = useRef<Chart | null>(null);

  const initChart = () => {
    const chart = new Chart({
      container: 'container1',
      height: 640,
      padding: 0,
      inset: 50,
    });
    chart.coordinate({ type: 'theta' });

    chart
      .interval()
      .transform({ type: 'stackY' })
      .data({
        type: 'fetch',
        value:
          'https://gw.alipayobjects.com/os/bmw-prod/79fd9317-d2af-4bc4-90fa-9d07357398fd.csv',
      })
      .encode('y', 'value')
      .encode('color', 'name')
      .style('stroke', 'white')
      .scale('color', {
        palette: 'spectral',
        offset: (t) => t * 0.8 + 0.1,
      })
      .label({
        text: 'name',
        radius: 0.8,
        fontSize: 10,
        fontWeight: 'bold',
      })
      .label({
        text: (d, i, data) => (i < data.length - 3 ? d.value : ''),
        radius: 0.8,
        fontSize: 9,
        dy: 12,
      })
      .animate('enter', { type: 'waveIn' })
      .legend(false);

    chart.render();
  };

  useEffect(() => {
    initChart();
  }, []);

  return (
    <div
    id="container1"
    ref={chartRef}></div>
  )
}
