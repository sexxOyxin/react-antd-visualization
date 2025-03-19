import ReactECharts from 'echarts-for-react';
import chinaGeoJson from "../../assets/china.json";
import * as echarts from "echarts";

// 注册地图
echarts.registerMap("china", chinaGeoJson);

const Chart3 = () => {
  const option = {
    title: {
      text: '中国疫情分布',
      subtext: '疫情确诊数据',
      left: 'center',
    },
    tooltip: {
      trigger: 'item',
    },
    visualMap: {
      min: 0,
      max: 1000,
      left: 'left',
      top: 'bottom',
      text: ['高', '低'],
      calculable: true,
      inRange: {
        color: ['#e0ffff', '#ff0000'],
      },
    },
    series: [
      {
        name: '疫情确认',
        type: 'map',
        mapType: 'china',
        roam: true,
        label: {
          show: false,
        },
        data: [{
          name: '上海市',
          value: 10
      }, {
          name: '北京市',
          value: 20
      }],
      },
    ],
  };

  return (
    <div style={{ width: '100%', height: '400px' }}>
      <ReactECharts option={option} />
    </div>
  );
};

export default Chart3;
