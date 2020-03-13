import { GET_ME_DATA, GET_ME_DATA_START, GET_ME_DATA_SUCCESS, GET_ME_DATA_FAIL, CHANGE_AVATAR, EDIT_USER, EDIT_USER_START, EDIT_USER_SUCCESS, EDIT_USER_FAIL, EDIT_USER_RESET, SET_AVATAR} from '../global/actionTypes';
// Get Me data
export const getMeDataAction = (params: FormData) => {
    return {
        type: GET_ME_DATA,
        params
    };
};

export const getMeDataStartAction = () => {
    return {
        type: GET_ME_DATA_START
    };
};

export const getMeDataSuccessAction = (payload: Array<object>) => {
    return {
        type: GET_ME_DATA_SUCCESS,
        payload
    };
};

export const getMeDataFailAction = (error: string) => {
    return {
        type: GET_ME_DATA_FAIL,
        error
    };
};


// Change avatar
export const changeAvatarAction = (payload: FormData) => {
    return {
        type: CHANGE_AVATAR,
        payload
    }
}

// Edit user info
export const editUserAction = (params: any) => {
    return {
        type: EDIT_USER,
        params
    }
}

export const editUserStartAction = () => {
    return {
        type: EDIT_USER_START
    }
}

export const editUserSuccessAction = (payload: any) => {
    return {
        type: EDIT_USER_SUCCESS,
        payload
    }
}

export const editUserFailAction = (error: string) => {
    return {
        type: EDIT_USER_FAIL,
        error
    }
}
export const editUserResetAction = () => {
    return {
        type: EDIT_USER_RESET,
    }
}

// Set avatar
export const setAvatarAction = (payload: any) => {
    return {
        type: SET_AVATAR,
        payload
    }
}



