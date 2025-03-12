import { Chart } from '@antv/g2';
import React, { useEffect, useRef } from 'react'
// 这里需要改一下中英文都适配的
// 右侧可输入 并且输入后成为tag 点击tag可增加次数 输相同的tag也能增加次数 修改怎么做？？？还没想
// 防抖节流做一下
const words = {
    'React': 2,
    'Vite': 4,
    'Ant Design': 5,
    'ECharts': 6,
    'TypeScript': 9,
    'Axios': 13,
    'Antv': 15,
    'Three': 11,
};
export default function Word() {
    const chartRef = useRef<Chart | null>(null);
    const initChart = () => {
        const chart = new Chart({
            container: 'container',
            autoFit: true,
        });

        chart
            .wordCloud()
            .data(Object.entries(words).map(([text, value]) => ({ text, value })))
            .layout({
                spiral: 'rectangular',
                fontSize: [20, 100],
            })
            .encode('color', 'text');

        chart.render();
    };

    useEffect(() => {
        initChart();
    }, []);
    return (
        <div
        id='container'
        ref={chartRef}
        ></div>
    )
}
