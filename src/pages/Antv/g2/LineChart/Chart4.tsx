import { Chart } from '@antv/g2'
import  { useEffect, useRef } from 'react'

export default function Chart4() {
  const chartRef = useRef(null);

  const initChart = () => {

    const chart = new Chart({
      container: 'container4',
      autoFit: true,
    });

    chart
      .line()
      .data({
        type: 'fetch',
        value:
          'https://gw.alipayobjects.com/os/bmw-prod/551d80c6-a6be-4f3c-a82a-abd739e12977.csv',
        transform: [
          // Mock missing data.
          {
            type: 'map',
            callback: (d: { date: { getUTCMonth: () => number; }; close: unknown; }) => ({
              ...d,
              close: d.date.getUTCMonth() < 3 ? NaN : d.close,
            }),
          },
        ],
      })
      .encode('x', 'date')
      .encode('y', 'close')
      .style('connect', true)
      .style('connectStroke', '#aaa');

    chart.render();

  };

  useEffect(() => {
    initChart();
  }, []);

  return (
    <div
      id="container4"
      style={{ height: 400 }}
      ref={chartRef}></div>
  )
}
