import { FETCH_DIVISIONS_START, FETCH_DIVISIONS_SUCCESS, FETCH_DIVISIONS_FAIL, FETCH_DEPARTMENTS_START, FETCH_DEPARTMENTS_SUCCESS, FETCH_DEPARTMENTS_FAIL } from '../global/actionTypes';

import produce, { Draft } from 'immer';
import { ICompanyState } from './types';

const initialState = {
    divisions: {
        data: null,
        loading: false,
        error: null
    },
    departments: {
        data: null,
        loading: false,
        error: null
    }
};

const divisionsStart = (state: ICompanyState) => {
    return produce(state, (draft: Draft<ICompanyState>) => {
        draft.divisions.loading = true;
        draft.divisions.error = null;
    });
};

const divisionsSuccess = (state: ICompanyState, action: any) => {
    return produce(state, (draft: Draft<ICompanyState>) => {
        draft.divisions.loading = false;
        draft.divisions.error = null;
        draft.divisions.data = action.payload;
    });
};

const divisionsFail = (state: ICompanyState, action: any) => {
    return produce(state, (draft: Draft<ICompanyState>) => {
        draft.divisions.loading = false;
        draft.divisions.error = action.error;
    });
};

const departmentsStart = (state: ICompanyState) => {
    return produce(state, (draft: Draft<ICompanyState>) => {
        draft.departments.loading = true;
        draft.departments.error = null;
    });
};

const departmentsSuccess = (state: ICompanyState, action: any) => {
    return produce(state, (draft: Draft<ICompanyState>) => {
        draft.departments.loading = false;
        draft.departments.error = null;
        draft.departments.data = action.payload;
    });
};


const departmentsFail = (state: ICompanyState, action: any) => {
    return produce(state, (draft: Draft<ICompanyState>) => {
        draft.departments.loading = false;
        draft.departments.error = action.error;
    });
};

const companyReducer = (state: ICompanyState = initialState, action: any) => {
    switch (action.type) {
        case FETCH_DIVISIONS_START: return divisionsStart(state);
        case FETCH_DIVISIONS_SUCCESS: return divisionsSuccess(state, action);
        case FETCH_DIVISIONS_FAIL: return divisionsFail(state, action);
        case FETCH_DEPARTMENTS_START: return departmentsStart(state);
        case FETCH_DEPARTMENTS_SUCCESS: return departmentsSuccess(state, action);
        case FETCH_DEPARTMENTS_FAIL: return departmentsFail(state, action);
        default: return state;
    }
};

export default companyReducer;