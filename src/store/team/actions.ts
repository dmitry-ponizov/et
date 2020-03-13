import { GET_TEAM_INFO, GET_TEAM_INFO_START, GET_TEAM_INFO_SUCCESS, GET_TEAM_INFO_FAIL, GET_TEAM_MEMBERS, GET_TEAM_MEMBERS_START, GET_TEAM_MEMBERS_SUCCESS, GET_TEAM_MEMBERS_FAIL, GET_TOTAL_ATTENDANCE, GET_TOTAL_ATTENDANCE_START, GET_TOTAL_ATTENDANCE_SUCCESS, GET_TOTAL_ATTENDANCE_FAIL, EMPLOYEES_ON_VACATION, EMPLOYEES_ON_VACATION_START, EMPLOYEES_ON_VACATION_SUCCESS, EXCUSED_LEAVES_TODAY, EXCUSED_LEAVES_TODAY_START, EXCUSED_LEAVES_TODAY_SUCCESS, EXCUSED_LEAVES_TODAY_FAIL, EMPLOYEES_ON_VACATION_LIST, EMPLOYEES_ON_VACATION_LIST_START, EMPLOYEES_ON_VACATION_LIST_SUCCESS, EMPLOYEES_ON_VACATION_LIST_FAIL, EXUSED_LEAVES_LIST, EXUSED_LEAVES_LIST_START, EXUSED_LEAVES_LIST_SUCCESS, EXUSED_LEAVES_LIST_FAIL, ABSENT_EMPLOYEES_LIST, ABSENT_EMPLOYEES_LIST_START, ABSENT_EMPLOYEES_LIST_SUCCESS, ABSENT_EMPLOYEES_LIST_FAIL, EMPLOYEES_ON_VACATION_FAIL } from '../global/actionTypes';
import { TeamSummary, ListType } from './types';

// Get team info
export const getTeamInfoAction = () => {
    return {
        type: GET_TEAM_INFO
    }
}

export const getTeamStartAction = () => {
    return {
        type: GET_TEAM_INFO_START
    }
}

export const getTeamSuccessAction = (payload: TeamSummary) => {
    return {
        type: GET_TEAM_INFO_SUCCESS,
        payload
    }
}

export const getTeamErrorAction = (error: string) => {
    return {
        type: GET_TEAM_INFO_FAIL,
        error
    }
}

// Get team members
export const getTeamMembersAction = (url: string) => {
    return {
        type: GET_TEAM_MEMBERS,
        url
    }
}

export const getTeamMembersStartAction = () => {
    return {
        type: GET_TEAM_MEMBERS_START
    }
}

export const getTeamMembersSuccessAction = (payload: ListType) => {
    return {
        type: GET_TEAM_MEMBERS_SUCCESS,
        payload
    }
}

export const getTeamMembersFailAction = (error: string) => {
    return {
        type: GET_TEAM_MEMBERS_FAIL,
        error
    }
}

// Get total attendance today
export const getTotalAttendanceTodayAction = (url: string) => {
    return {
        type: GET_TOTAL_ATTENDANCE,
        url
    }
}

export const getTotalAttendanceTodayStartAction = () => {
    return {
        type: GET_TOTAL_ATTENDANCE_START,
    }
}

export const getTotalAttendanceTodaySuccessAction = (payload: ListType) => {
    return {
        type: GET_TOTAL_ATTENDANCE_SUCCESS,
        payload
    }
}

export const getTotalAttendanceTodayFailAction = (error: string) => {
    console.log('here')
    return {
        type: GET_TOTAL_ATTENDANCE_FAIL,
        error
    }
}

// Get employees on vacation
export const getEmployeesOnVacationAction = () => {
    return {
        type: EMPLOYEES_ON_VACATION,
    }
}

export const getEmployeesOnVacationStartAction = () => {
    return {
        type: EMPLOYEES_ON_VACATION_START,
    }
}

export const getEmployeesOnVacationSuccessAction = (payload: ListType) => {
    return {
        type: EMPLOYEES_ON_VACATION_SUCCESS,
        payload
    }
}

export const getEmployeesOnVacationFailAction = (error: string) => {
    return {
        type: EMPLOYEES_ON_VACATION_FAIL,
        error
    }
}

// Get exused leaves today
export const getExusedLeavesAction = () => {
    return {
        type: EXCUSED_LEAVES_TODAY,
    }
}

export const getExusedLeavesStartAction = () => {
    return {
        type: EXCUSED_LEAVES_TODAY_START,
    }
}

export const getExusedLeavesSuccessAction = (payload: ListType) => {
    return {
        type: EXCUSED_LEAVES_TODAY_SUCCESS,
        payload
    }
}

export const getExusedLeavesFailAction = (error: string) => {
    return {
        type: EXCUSED_LEAVES_TODAY_FAIL,
        error
    }
}

// Get employees on vacation list
export const getEmployeesOnVacationListAction = () => {
    return {
        type: EMPLOYEES_ON_VACATION_LIST
    }
}

export const getEmployeesOnVacationListStartAction = () => {
    return {
        type: EMPLOYEES_ON_VACATION_LIST_START
    }
}

export const getEmployeesOnVacationListSuccessAction = (payload: ListType) => {
    return {
        type: EMPLOYEES_ON_VACATION_LIST_SUCCESS,
        payload
    }
}

export const getEmployeesOnVacationListFailAction = (error: string) => {
    return {
        type: EMPLOYEES_ON_VACATION_LIST_FAIL,
        error
    }
}

// Get exused leaves list
export const getExusedLeavesListAction = () => {
    return {
        type: EXUSED_LEAVES_LIST
    }
}

export const getExusedLeavesListStartAction = () => {
    return {
        type: EXUSED_LEAVES_LIST_START
    }
}

export const getExusedLeavesListSuccessAction = (payload: ListType) => {
    return {
        type: EXUSED_LEAVES_LIST_SUCCESS,
        payload
    }
}

export const getExusedLeavesListFailAction = (error: string) => {
    return {
        type: EXUSED_LEAVES_LIST_FAIL,
        error
    }
}

// Get absent employees list
export const getAbsentEmployeesListAction = () => {
    return {
        type: ABSENT_EMPLOYEES_LIST
    }
}

export const getAbsentEmployeesListStartAction = () => {
    return {
        type: ABSENT_EMPLOYEES_LIST_START
    }
}

export const getAbsentEmployeesListSuccessAction = (payload: ListType) => {
    return {
        type: ABSENT_EMPLOYEES_LIST_SUCCESS,
        payload
    }
}

export const getAbsentEmployeesListFailAction = (error: string) => {
    return {
        type: ABSENT_EMPLOYEES_LIST_FAIL,
        error
    }
}