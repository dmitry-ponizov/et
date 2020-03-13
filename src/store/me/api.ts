import { axiosInstance } from '../../config/api';
import { ChangeAvatar, EditUserInfo } from '../../constants/api';


export const changeAvatarApi = async (params: any) => {
  try {
    return await axiosInstance.post(ChangeAvatar, params);
  } catch (error) {
    throw new Error(error);
  }
}

export const editUserInfoApi = async (params: any) => {
  try {
    return await axiosInstance.post(EditUserInfo, params);
  } catch (error) {
    throw new Error(error);
  }
}