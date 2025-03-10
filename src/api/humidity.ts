import request from "../utils/request";

// 获取全国各省湿度
export const getHumidityData = async () => {
  return request({
    url: "https://api.open-meteo.com/v1/forecast",
    method: "get",
    params: {
      latitude: 35, // 设置一个大致的中国中心点
      longitude: 105,
      hourly: "humidity_2m",
    },
  });
};
