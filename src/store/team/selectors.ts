import { ITeamState } from './types';

export const getTeamSummarySelector = (state: ITeamState) => {
    return state.summary.data;
};

export const teamSummaryLoadingSelector = (state: ITeamState) => {
    return state.summary.loading;
};

export const teamSummaryErrorSelector = (state: ITeamState) => {
    return state.summary.error;
};
export const getTeamMembersSelector = (state: ITeamState) => {
    return state.members.data;
};

export const teamMembersLoadingSelector = (state: ITeamState) => {
    return state.members.loading;
};

export const teamMembersErrorSelector = (state: ITeamState) => {
    return state.members.error;
};

export const totalAttendanceSelector = (state: ITeamState) => {
    return state.attendance.data;
};

export const totalAttendanceLoadingSelector = (state: ITeamState) => {
    return state.attendance.loading;
};

export const totalAttendanceErrorSelector = (state: ITeamState) => {
    return state.attendance.error;
};

export const employeesOnVacationSelector = (state: ITeamState) => {
    return state.employeesOnVacation.data;
};

export const employeesOnVacationLoadingSelector = (state: ITeamState) => {
    return state.employeesOnVacation.loading;
};

export const employeesOnVacationErrorSelector = (state: ITeamState) => {
    return state.employeesOnVacation.error;
};

export const excusedLeavesTodaySelector = (state: ITeamState) => {
    return state.excusedLeavesToday.data;
};

export const excusedLeavesTodayLoadingSelector = (state: ITeamState) => {
    return state.excusedLeavesToday.loading;
};

export const excusedLeavesTodayErrorSelector = (state: ITeamState) => {
    return state.excusedLeavesToday.error;
};

export const onVacationListSelector = (state: ITeamState) => {
    return state.onVacation.data;
};

export const onVacationListLoadingSelector = (state: ITeamState) => {
    return state.onVacation.loading;
};

export const onVacationListErrorSelector = (state: ITeamState) => {
    return state.onVacation.error;
};

export const exusedLeavesListSelector = (state: ITeamState) => {
    return state.exusedLeavesList.data;
};

export const exusedLeavesListLoadingSelector = (state: ITeamState) => {
    return state.exusedLeavesList.loading;
};

export const exusedLeavesListErrorSelector = (state: ITeamState) => {
    return state.exusedLeavesList.error;
};

export const absentEmployeesListSelector = (state: ITeamState) => {
    return state.absentEmployees.data;
};

export const absentEmployeesListLoadingSelector = (state: ITeamState) => {
    return state.absentEmployees.loading;
};

export const absentEmployeesListErrorSelector = (state: ITeamState) => {
    return state.absentEmployees.error;
};
