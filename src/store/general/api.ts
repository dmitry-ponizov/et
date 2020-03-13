import { LoginPath, GetCurrentUserPath, GetStationID, GetPermissions } from '../../constants/api';
import { axiosInstance } from '../../config/api';


export const loginApi = async (params: FormData) => {
  try {
    return await axiosInstance.post(LoginPath, params);
  } catch (error) {
    throw new Error(error);
  }
}

export const getCurrentUserApi = async (sessionId: string) => {
  try {
    return await axiosInstance.get(`${GetCurrentUserPath}&SessionID=${sessionId}`);
  } catch (error) {
    throw new Error(error);
  }
}

export const getStationIdApi = async (params: FormData) => {
  try {
    return await axiosInstance.post(GetStationID, params);
  } catch (error) {
    throw new Error(error);
  }
}

export const getPermissionsApi = async (sessionId: string) => {
  try {
    return axiosInstance.get(`${GetPermissions}&SessionID=${sessionId}`)
  } catch (error) {
    throw new Error(error);
  }
}
