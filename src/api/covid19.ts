// request.ts
import axios from 'axios';

const request = axios.create({
  baseURL: 'https://covid19-api.com',
  timeout: 10000,
});

// 封装 GET 请求
export const getCovidData = async () => {
  try {
    const response = await request.get('/country/China');
    return response.data;
  } catch (error) {
    console.error('请求数据失败:', error);
    return null;
  }
};
