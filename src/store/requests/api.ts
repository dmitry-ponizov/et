import { GetRequestsData, GetRequestsOptionsData, GetRequestsShiftsData, GetReportToUser, ValidateRequest, SetNewRequest, CancelRequests, RequestAuthHistory, GetUserShiftsForVacation, GetUserSchedulesByRequestType } from '../../constants/api';
import { axiosInstance } from '../../config/api';

export function fetchRequestsApi(params: any) {
  return axiosInstance.post(GetRequestsData, params)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
}


export const getRequestOptionsApi = (params: any) => {
  return axiosInstance.post(GetRequestsOptionsData, params)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
}

export const getRequestShiftApi = (params: any) => {
  return axiosInstance.post(GetRequestsShiftsData, params)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
}

export const getReportToUserApi = (params: any) => {
    return axiosInstance.post(GetReportToUser, params)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
}

export const validateRequestApi = (params: any) => {
    return axiosInstance.post(ValidateRequest, params)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
}

export const setRequestApi = (params: any) => {
  return axiosInstance.post(SetNewRequest, params)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
}

export const cancelRequestApi = (params: any) => {
  return axiosInstance.post(CancelRequests, params)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
}

export const getAuthHistoryApi = (params: any) => {
  return axiosInstance.post(RequestAuthHistory, params)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
}

export const getUserShiftsForVacationApi = (params: any) => {
  return axiosInstance.post(GetUserShiftsForVacation, params)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
}

export const getUserSchedulesApi = (params: any) => {
  return axiosInstance.post(GetUserSchedulesByRequestType, params)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
}