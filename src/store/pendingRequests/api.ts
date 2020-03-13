import { AuthtorizeRequest, AuthtorizeDeclineRequest } from '../../constants/api';
import { axiosInstance } from '../../config/api';

export function authtorizeRequestApi(url: string) {
  return axiosInstance.get(`${AuthtorizeRequest}${url}`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
}
export function AuthtorizeDeclineRequestApi(params: any) {
  return axiosInstance.post(AuthtorizeDeclineRequest, params)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
}