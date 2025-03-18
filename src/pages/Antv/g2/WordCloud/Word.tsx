import { Chart } from '@antv/g2';
import React, { useEffect, useRef } from 'react'

interface WordProps {
    props: { text: string; value: number}[];
}

export default function Word({props} : WordProps) {
    const chartRef = useRef<Chart | null>(null);
    const initChart = () => {
        const chart = new Chart({
            container: 'container',
            autoFit: true,
        });

        chart
            .wordCloud()
            .data(props)
            .layout({
                spiral: 'rectangular',
                fontSize: [20, 100],
            })
            .encode('color', 'text');

        chart.legend(false);
        chart.render();
    };

    useEffect(() => {
        initChart();
    }, [props]);

    return (
        <div
        id='container'
        ref={chartRef}
        ></div>
    )
}
