import produce, { Draft } from 'immer';
import { IHomeState, IUsersBirthday, TNewMembers } from './types';
import {  
    FETCH_USERS_WITH_BIRTHDAY_START,
    FETCH_USERS_WITH_BIRTHDAY_SUCCESS,
    FETCH_USERS_WITH_BIRTHDAY_FAIL,
    FETCH_NEW_MEMBERS_START,
    FETCH_NEW_MEMBERS_SUCCESS,
    FETCH_NEW_MEMBERS_FAIL
} from '../global/actionTypes';

const initialState = {
    birthdays: {
        data: null,
        loading: false,
        error: null
    },
    newMembers: {
        data: null,
        loading: false,
        error: null
    }
};

const fetchUsersWithBirthdayStart = (state: IHomeState) => {
    return produce(state, (draft: Draft<IHomeState>) => {
        draft.birthdays.loading = true;
        draft.birthdays.data = null
        draft.birthdays.error = null    
    });
};

const fetchUsersWithBirthdaySuccess = (state: IHomeState, action: { type: string, payload: IUsersBirthday[]}) => {
    return produce(state, (draft: Draft<IHomeState>) => {
        draft.birthdays.loading = false;
        draft.birthdays.data = action.payload;
    });
};

const fetchUsersWithBirthdayFail = (state: IHomeState, action: { type: string, error: string}) => {
    return produce(state, (draft: Draft<IHomeState>) => {
        draft.birthdays.loading = false;
        draft.birthdays.error = action.error;
        draft.birthdays.data = null
    });
};

const setNewMembersStart = (state: IHomeState) => {
    return produce(state, (draft: Draft<IHomeState>) => {
        draft.newMembers.loading = true;
        draft.newMembers.data = null
        draft.newMembers.error = null    
    });
};

const setNewMembersSuccess = (state: IHomeState, action: { type: string, payload: TNewMembers[]}) => {
    return produce(state, (draft: Draft<IHomeState>) => {
        draft.newMembers.loading = false;
        draft.newMembers.data = action.payload;
    });
};

const setNewMembersFail = (state: IHomeState, action: { type: string, error: string}) => {
    return produce(state, (draft: Draft<IHomeState>) => {
        draft.newMembers.loading = false;
        draft.newMembers.error = action.error;
        draft.newMembers.data = null
    });
};

const teamReducer = (state: IHomeState = initialState, action: any) => {
    switch (action.type) {
        case FETCH_USERS_WITH_BIRTHDAY_START:
            return fetchUsersWithBirthdayStart(state);
        case FETCH_USERS_WITH_BIRTHDAY_SUCCESS:
            return fetchUsersWithBirthdaySuccess(state, action);
        case FETCH_USERS_WITH_BIRTHDAY_FAIL:
            return fetchUsersWithBirthdayFail(state, action);
        case FETCH_NEW_MEMBERS_START:
            return setNewMembersStart(state);
        case FETCH_NEW_MEMBERS_SUCCESS:
            return setNewMembersSuccess(state, action);
        case FETCH_NEW_MEMBERS_FAIL:
            return setNewMembersFail(state, action);
        default: return state;
    }
};

export default teamReducer;