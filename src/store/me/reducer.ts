import { IMeState } from './types';
import produce, { Draft } from 'immer';
import { GET_ME_DATA_START, GET_ME_DATA_SUCCESS, GET_ME_DATA_FAIL, EDIT_USER_START, EDIT_USER_SUCCESS, EDIT_USER_FAIL, EDIT_USER_RESET, SET_AVATAR } from '../global/actionTypes';


const initialState = {
    user: {
        data: [],
        loading: false,
        error: null
    },
    editUserInfo: false,
    loading: false,
    error: null,
    avatar: '',
};

const getMeDataStart = (state: IMeState) => {
    return produce(state, (draft: Draft<IMeState>) => {
        draft.user.loading = true;
        draft.user.error = null;
    });
};

const getMeDataSuccess = (state: IMeState, action: any) => {
    return produce(state, (draft: Draft<IMeState>) => {
        draft.user.loading = false;
        draft.user.error = null;
        draft.user.data = action.payload;
    });
};

const getMeDataFail = (state: IMeState, action: any) => {
    return produce(state, (draft: Draft<IMeState>) => {
        draft.user.loading = false;
        draft.user.error = action.error;
    });
};

const editUserBasicInfoStart = (state: IMeState) => {
    return produce(state, (draft: Draft<IMeState>) => {
        draft.loading = true;
        draft.error = null;
        draft.editUserInfo = false
    });
}
const editUserBasicInfoSuccess = (state: IMeState, action: any) => {
    return produce(state, (draft: Draft<IMeState>) => {
        draft.loading = false;
        draft.error = null;
        draft.editUserInfo = true;
        draft.user.data.work_email = action.payload.work_email;
        draft.user.data.work_phone = action.payload.work_phone;
        draft.user.data.mobile_phone = action.payload.mobile_phone;
    });
};

const editUserBasicInfoFail = (state: IMeState, action: any) => {
    return produce(state, (draft: Draft<IMeState>) => {
        draft.loading = false;
        draft.error = action.error;
    });
};

const editUserBasicInfoReset = (state: IMeState) => {
    return produce(state, (draft: Draft<IMeState>) => {
        draft.editUserInfo = false;
        draft.loading = false;
        draft.error = null
    });
};

const setAvatar = (state: IMeState, action: any) => {
    return produce(state, (draft: Draft<IMeState>) => {
        draft.avatar = action.payload;
    });
};





const meReducer = (state: IMeState = initialState, action: any) => {
    switch (action.type) {
        case GET_ME_DATA_START:
            return getMeDataStart(state);
        case GET_ME_DATA_SUCCESS: 
            return getMeDataSuccess(state, action);
        case GET_ME_DATA_FAIL: 
            return getMeDataFail(state, action)
        case EDIT_USER_START:
            return editUserBasicInfoStart(state);
        case EDIT_USER_SUCCESS: 
            return editUserBasicInfoSuccess(state, action)
        case EDIT_USER_FAIL: 
            return editUserBasicInfoFail(state, action)
        case EDIT_USER_RESET: 
            return editUserBasicInfoReset(state)
        case SET_AVATAR: 
            return setAvatar(state, action)
        default: return state;
    }
};

export default meReducer;