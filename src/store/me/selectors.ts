import { IMeState } from './types';

export const meDataSelector = (state: IMeState) => {
    return state.user.data;
}

export const meDataLoadingSelector = (state: IMeState) => {
    return state.user.loading;
}

export const meDataErrorSelector = (state: IMeState) => {
    return state.user.error;
}
export const editUserInfoStatusSelector = (state: IMeState) => {
    return state.editUserInfo;
}

export const meLoadingSelector = (state: IMeState) => {
    return state.loading;
}

export const meErrorSelector = (state: IMeState) => {
    return state.error;
}

export const avatarSelector = (state: IMeState) => {
    return state.avatar;
}

