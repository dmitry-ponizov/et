import { ICompanyState } from './types';

export const selectorDivisionsData = (state: ICompanyState) => {
    return state.divisions.data;
};

export const selectorDivisionsLoading = (state: ICompanyState) => {
    return state.divisions.loading;
};

export const selectorDivisionsError = (state: ICompanyState) => {
    return state.divisions.error;
};

export const selectorDepartmentsData = (state: ICompanyState) => {
    // To do change after made fetch departments by devision id
    if(!state.departments.data) return null
    const departments = [...state.departments.data]
    if(departments)  departments.length = 6
    return departments
};

export const selectorDepartmentsLoading = (state: ICompanyState) => {
    return state.departments.loading;
};

export const selectorDepartmentsError = (state: ICompanyState) => {
    return state.departments.error;
};