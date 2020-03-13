import { GetUserData, GetTimeSheetForMonth, GetProcessedData, GetUserSubordinates, GetAccrualBalancesData } from '../../constants/api';
import { axiosInstance } from '../../config/api';


export const fetchAccrualBalancesApi = async (params: any) => {
  try {
    return await axiosInstance.post(GetAccrualBalancesData, params);
  } catch (error) {
    throw new Error(error);
  }
}


export const getUserDataApi = async (params: FormData) => {
  try {
    return await axiosInstance.post(GetUserData, params);
  } catch (error) {
    throw new Error(error);
  }
}

export const getTimeSheetForMonthApi = async (params: { month: string, year: string, userId: string, sessionId: string }) => {
  try {
    return await axiosInstance.get(`${GetTimeSheetForMonth}&month=${params.month}&year=${params.year}&userId=${params.userId}&SessionID=${params.sessionId}`)
  } catch (error) {
    throw new Error(error);
  }
}

export const getProcessedDataApi = async (params: { from: string, to: string, userId: string, sessionId: string }) => {
  try {
    return await axiosInstance.get(`${GetProcessedData}&firstDate=${params.from}&lastDate=${params.to}&userId=${params.userId}&SessionID=${params.sessionId}`)
  } catch (error) {
    throw new Error(error);
  }
}

export const GetUserSubordinatesApi = async (params: { userId: string, sessionId: string, pageNumber: string, items: number }) => {
  try {
    return await axiosInstance.get(`${GetUserSubordinates}&userId=${params.userId}&filter_page=${params.pageNumber}&filter_items_per_page=${params.items}&SessionID=${params.sessionId}`)
  } catch (error) {
    throw new Error(error);
  }
}

