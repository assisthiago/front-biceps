import instance from '@/request/instance';

const ENDPOINT = '/auth';

export const login = async (data) => {
  try {
    const response = await instance.post(`${ENDPOINT}/login`, data);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
}
