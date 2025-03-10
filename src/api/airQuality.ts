import request from "../utils/request";

// 获取中国各省空气质量
export const getAirQualityData = async () => {
  return request({
    url: "https://api.waqi.info/feed/china/",
    method: "get",
    params: {
      token: "YOUR_API_KEY", // 需要替换成自己的 API Key
    },
  });
};
