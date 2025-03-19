import { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";
import { getWeatherData } from "../../api/weather";

const Chart1 = () => {
  const [chartData, setChartData] = useState<{ dates: string[]; maxTemp: number[]; minTemp: number[] }>({
    dates: [],
    maxTemp: [],
    minTemp: [],
  });

  // const [chartData, setChartData] = useState({ dates: string[], maxTemp: [], minTemp: [] });

  useEffect(() => {
    getWeatherData()
      .then((res) => {
        const daily = res.data.daily;
        setChartData({
          dates: daily.time,
          maxTemp: daily.temperature_2m_max,
          minTemp: daily.temperature_2m_min,
        });
      })
      .catch((error) => console.error("数据获取失败:", error));
  }, []);

  const getOption = () => ({
    title: { text: "上海过去 7 天气温趋势" },
    tooltip: { trigger: "axis" },
    legend: { data: ["最高温度", "最低温度"] },
    xAxis: { type: "category", data: chartData.dates },
    yAxis: { type: "value", axisLabel: { formatter: "{value}°C" } },
    series: [
      { name: "最高温度", type: "line", data: chartData.maxTemp, color: "red" },
      { name: "最低温度", type: "line", data: chartData.minTemp, color: "blue" },
    ],
  });

  return (
      <ReactECharts option={getOption()} style={{ height: 400 }} />
  );
};

export default Chart1;
