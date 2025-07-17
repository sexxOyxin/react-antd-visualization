import request from "../utils/request";

// 获取全球人口数据
export const getPopulationData = async () => {
  return request({
    url: "https://restcountries.com/v3.1/region/europe",
    method: "get",
  });
};