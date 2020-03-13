import { axiosInstance } from '../../config/api';
import { GetTeamSummary, GetTeamMembers, GetTotalAttendance, GetEmployeesOnVacation, GetExusedLeaves, GetEmployeesOnVacationList, GetExusedLeavesList, GetAbsentEmployeesList } from '../../constants/api';


export const fetchTeamSummaryApi = async (sessionId: string) => {
  try {
    return axiosInstance.get(`${GetTeamSummary}&SessionID=${sessionId}`)
  } catch (error) {
    throw new Error(error);
  }
}


export const fetchTeamMembersApi = async (url: string) => {
  try {
    return axiosInstance.get(`${GetTeamMembers}${url}&filter_items_per_page=0`)
  } catch (error) {
    throw new Error(error);
  }
}

export const fetchTotalAttendanceApi = async (url: string) => {
  try {
    return axiosInstance.get(`${GetTotalAttendance}${url}`)
  } catch (error) {
    throw new Error(error);
  }
}

export const getEmployeesOnVacationApi = async (sessionId: string) => {
  try {
    return axiosInstance.get(`${GetEmployeesOnVacation}&SessionID=${sessionId}`)
  } catch (error) {
    throw new Error(error);
  }
}

export const getExusedLeavesApi = async (sessionId: string) => {
  try {
    return axiosInstance.get(`${GetExusedLeaves}&SessionID=${sessionId}`)
  } catch (error) {
    throw new Error(error);
  }
}

export const fetchEmployeesOnVacationListApi = async (sessionId: string) => {
  try {
    return axiosInstance.get(`${GetEmployeesOnVacationList}&SessionID=${sessionId}`)
  } catch (error) {
    throw new Error(error);
  }
}

export const fetchExusedLeavesListApi = async (sessionId: string) => {
  try {
    return axiosInstance.get(`${GetExusedLeavesList}&SessionID=${sessionId}`)
  } catch (error) {
    throw new Error(error);
  }
}
export const fetchAbsentEmployeesListApi = async (sessionId: string) => {
  try {
    return axiosInstance.get(`${GetAbsentEmployeesList}&SessionID=${sessionId}`)
  } catch (error) {
    throw new Error(error);
  }
}
