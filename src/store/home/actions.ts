import { IUsersBirthday, TNewMembers } from './types';
import { FETCH_USERS_WITH_BIRTHDAY, FETCH_USERS_WITH_BIRTHDAY_START, FETCH_USERS_WITH_BIRTHDAY_SUCCESS, FETCH_USERS_WITH_BIRTHDAY_FAIL, FETCH_NEW_MEMBERS, FETCH_NEW_MEMBERS_START, FETCH_NEW_MEMBERS_SUCCESS, FETCH_NEW_MEMBERS_FAIL } from '../global/actionTypes';

// Get birthday users
export const fetchUsersWithBirthdayAction = () => {
    return {
        type: FETCH_USERS_WITH_BIRTHDAY
    }
}

export const fetchUsersWithBirthdayStartAction = () => {
    return {
        type: FETCH_USERS_WITH_BIRTHDAY_START
    }
}

export const fetchUsersWithBirthdaySuccessAction = (payload: IUsersBirthday[]) => {
    return {
        type: FETCH_USERS_WITH_BIRTHDAY_SUCCESS,
        payload
    }
}

export const fetchUsersWithBirthdayFailAction = (error: string) => {
    return {
        type: FETCH_USERS_WITH_BIRTHDAY_FAIL,
        error
    }
}

// Fetch new members
export const fetchNewMembersAction = () => {
    return {
        type: FETCH_NEW_MEMBERS
    }
}

export const fetchNewMembersStartAction = () => {
    return {
        type: FETCH_NEW_MEMBERS_START
    }
}

export const fetchNewMembersSuccessAction = (payload: TNewMembers[]) => {
    return {
        type: FETCH_NEW_MEMBERS_SUCCESS,
        payload
    }
}

export const fetchNewMembersFailAction = (error: string) => {
    return {
        type: FETCH_NEW_MEMBERS_FAIL,
        error
    }
}