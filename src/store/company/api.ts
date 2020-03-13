import { axiosInstance } from '../../config/api';
import { GetDivisionsPath, GetDepartmentsPath } from '../../constants/api';


export const fetchDivisionsApi = async (sessionId: string) => {
  try {
    return axiosInstance.get(`${GetDivisionsPath}&SessionID=${sessionId}`)
  } catch (error) {
    throw new Error(error);
  }
}

export const fetchDepartmentsApi = async (params: FormData) => {
  try {
    return axiosInstance.post(GetDepartmentsPath, params)
  } catch (error) {
    throw new Error(error);
  }
}