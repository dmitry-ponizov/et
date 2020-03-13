import { FETCH_DIVISIONS, FETCH_DIVISIONS_START, FETCH_DIVISIONS_SUCCESS, FETCH_DIVISIONS_FAIL, FETCH_DEPARTMENTS, FETCH_DEPARTMENTS_START, FETCH_DEPARTMENTS_SUCCESS, FETCH_DEPARTMENTS_FAIL } from '../global/actionTypes';
import { IDepartment } from './types';

// Fetch divisions data
export const getDivisionsAction = () => {
    return {
        type: FETCH_DIVISIONS,
    };
};
export const getDivisionsStartAction = () => {
    return {
        type: FETCH_DIVISIONS_START
    };
};

export const getDivisionsSuccessAction = (payload: any) => {
    return {
        type: FETCH_DIVISIONS_SUCCESS,
        payload
    };
};

export const getDivisionsFailAction = (error: any) => {
    return {
        type: FETCH_DIVISIONS_FAIL,
        error
    };
};

// Fetch departments data
export const getDeptarmentsAction = (params: FormData) => {
    return {
        type: FETCH_DEPARTMENTS,
        params
    }
}

export const getDeptarmentsStartAction = () => {
    return {
        type: FETCH_DEPARTMENTS_START,
    }
}

export const getDeptarmentsSuccessAction = (payload: IDepartment[]) => {
    return {
        type: FETCH_DEPARTMENTS_SUCCESS,
        payload
    }
}

export const getDeptarmentsFailAction = (error: string) => {
    return {
        type: FETCH_DEPARTMENTS_FAIL,
        error
    }
}