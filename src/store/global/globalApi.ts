import { GetGenericData, SetGenericData, GetEmployeesData } from '../../constants/api';
import { axiosInstance } from '../../config/api';

export function getGenericDataApi(params: any) {
    return axiosInstance.post(GetGenericData, params)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error;
      });
}


export function setGenericDataApi(params: any) {
    return axiosInstance.post(SetGenericData, params)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
}

export function getEmployeesDataApi(params: any) {
  return axiosInstance.post(GetEmployeesData, params)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
}