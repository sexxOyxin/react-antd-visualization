// @ts-nocheck
import ReactECharts from 'echarts-for-react';
import chinaGeoJson from "../../assets/china.json";
import * as echarts from "echarts";
import { GeoJSONSourceInput } from 'echarts/types/src/coord/geo/geoTypes';


// 注册地图
echarts.registerMap("china", chinaGeoJson as GeoJSONSourceInput);


const data = [
  {
    name: '上海市',
    value: 140
  },
  {
    name: '北京市',
    value: 88
  },
  {
    name: '天津市',
    value: 141
  },
  {
    name: '河北省',
    value: 111
  },
  {
    name: '内蒙古自治区',
    value: 22
  },
  {
    name: '吉林省',
    value: 33
  },
  {
    name: '安徽省',
    value: 44
  },
  {
    name: '江西省',
    value: 55
  },
  {
    name: '湖北省',
    value: 66
  },
];
const Chart3 = () => {
  const option = {
    title: {
      text: '中国疫情分布',
      subtext: '疫情确诊数据',
      left: 'center',
    },
    tooltip: {
      trigger: 'item' as "item",
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
        type: "map" as 'map',
        map: 'china',
        roam: true,
        label: {
          show: false,
        },
        data,
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
