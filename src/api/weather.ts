import request from "../utils/request";

// 获取中国气温数据
export const getWeatherData = () => {
  return request({
    url: "/forecast",
    method: "get",
    params: {
      latitude: 31.2588,
      longitude: 121.4006,
      daily: "temperature_2m_max,temperature_2m_min",
      timezone: "Asia/Shanghai",
      past_days: 7,
    },
  });
};
