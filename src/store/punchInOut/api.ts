import { axiosInstance } from '../../config/api';
import { UserPunch, GetPunchOptions, SetUserPunch } from '../../constants/api';


export const getUserPunchApi = async (params: FormData, stationId: string) => {
  try {
    return await axiosInstance.post(`${UserPunch}&StationID=${stationId}`, params);
  } catch (error) {
    throw new Error(error);
  }
}

export const getPunchOptionsApi = async (params: FormData) => {
  try {
    return await axiosInstance.post(GetPunchOptions, params);
  } catch (error) {
    throw new Error(error);
  }
}

export const setUserPunchApi = async (params: FormData) => {
  try {
    return await axiosInstance.post(SetUserPunch, params);
  } catch (error) {
    throw new Error(error);
  }
}
