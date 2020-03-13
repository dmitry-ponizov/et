import { IHomeState } from './types';

export const getUsersWithBirthdaySelector = (state: IHomeState) => {
    if(state.birthdays.data) {
        state.birthdays.data.length = 12
        return state.birthdays.data;
    }
    return null
}

export const getUsersWithBirthdayLoadingSelector = (state: IHomeState) => {
    return state.birthdays.loading;
}


export const getUsersWithBirthdayErrorSelector = (state: IHomeState) => {
    return state.birthdays.error;
}

export const getNewMembersSelector = (state: IHomeState) => {
    if(state.newMembers.data) {
        state.newMembers.data.length = 12
        return state.newMembers.data;
    }
    return null
}

export const getNewMembersLoadingSelector = (state: IHomeState) => {
    return state.newMembers.loading;
}


export const getNewMembersErrorSelector = (state: IHomeState) => {
    return state.newMembers.error;
}