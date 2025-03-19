import { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";
import { getPopulationData } from "../../api/population";

const Chart2 = () => {
  const [chartData, setChartData] = useState({ countries: [], populations: [] });

  useEffect(() => {
    getPopulationData()
      .then((res) => {
        if (!res.data || res.data.length === 0) return;

        // 过滤出人口最多的前10个国家
        const sortedData = res.data
          .filter((country: { population: unknown; }) => country.population) // 确保有数据
          .sort((a: { population: number; }, b: { population: number; }) => b.population - a.population) // 按人口降序排序
          .slice(0, 10); // 取前10个

        setChartData({
          countries: sortedData.map((c: { name: { common: unknown; }; }) => c.name.common), // 提取国家名
          populations: sortedData.map((c: { population: unknown }) => c.population), // 提取人口数据
        });
      })
      .catch((error) => console.error("数据获取失败:", error));
  }, []);

  const getOption = () => ({
    title: { text: "全球人口最多的 10 个国家" },
    tooltip: { trigger: "axis" as 'axis' },
    xAxis: {
      type: "category" as 'category', data: chartData.countries, axisLabel: {
        interval: 0 // 0 表示所有标签都显示，不间隔
      }
    },
    yAxis: {
      type: "value" as 'value',
      axisLabel: {
        formatter: (value: number) => {
          if (value >= 1000000000) {
            return value/100000000 + '亿';
          } else if (value >= 10000) {
            return value/10000 + '万';
          }
          return value.toString();
        }
      }
    },
    series: [
      {
        name: "人口数量",
        type: "bar" as 'bar',
        data: chartData.populations,
        color: "#73C0DE",
      },
    ],
  });

  return (
    <ReactECharts option={getOption()} style={{ height: 400 }} />
  );
};

export default Chart2;
