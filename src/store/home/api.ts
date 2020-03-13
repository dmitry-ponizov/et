import { GetUsersBirthday, GetNewMembers } from '../../constants/api';
import { axiosInstance } from '../../config/api';


export const fetchUsersWithBirthdayApi = async (sessionId: string) => {
  try {
    return await axiosInstance.get(`${GetUsersBirthday}&SessionID=${sessionId}`);
  } catch (error) {
    throw new Error(error);
  }
}

export const fetchNewMembersApi = async (sessionId: string) => {
  try {
    return await axiosInstance.get(`${GetNewMembers}&SessionID=${sessionId}`);
  } catch (error) {
    throw new Error(error);
  }
}

