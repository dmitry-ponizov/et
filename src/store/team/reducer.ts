import produce, { Draft } from 'immer';
import {  
    GET_TEAM_INFO_START, 
    GET_TEAM_INFO_SUCCESS, 
    GET_TEAM_INFO_FAIL, 
    GET_TEAM_MEMBERS_START,
    GET_TEAM_MEMBERS_SUCCESS,
    GET_TEAM_MEMBERS_FAIL,
    GET_TOTAL_ATTENDANCE_START,
    GET_TOTAL_ATTENDANCE_SUCCESS,
    GET_TOTAL_ATTENDANCE_FAIL,
    EMPLOYEES_ON_VACATION_START,
    EMPLOYEES_ON_VACATION_SUCCESS,
    EMPLOYEES_ON_VACATION_FAIL,
    EXCUSED_LEAVES_TODAY_START,
    EXCUSED_LEAVES_TODAY_SUCCESS,
    EXCUSED_LEAVES_TODAY_FAIL,
    EMPLOYEES_ON_VACATION_LIST_START,
    EMPLOYEES_ON_VACATION_LIST_SUCCESS,
    EMPLOYEES_ON_VACATION_LIST_FAIL,
    EXUSED_LEAVES_LIST_START,
    EXUSED_LEAVES_LIST_SUCCESS,
    EXUSED_LEAVES_LIST_FAIL,
    ABSENT_EMPLOYEES_LIST_START,
    ABSENT_EMPLOYEES_LIST_SUCCESS,
    ABSENT_EMPLOYEES_LIST_FAIL
} from '../global/actionTypes';
import { ITeamState } from './types';

const initialState = {
    summary: {
        data: null,
        loading: false,
        error: null
    },
    employeesOnVacation: {
        data: null,
        loading: false,
        error: null
    },
    excusedLeavesToday: {
        data: null,
        loading: false,
        error: null
    },
    members: {
        data: null,
        loading: false,
        error: null
    },
    attendance: {
        data: null,
        loading: false,
        error: null
    },
    onVacation: {
        data: null,
        loading: false,
        error: null
    },
    exusedLeavesList: {
        data: null,
        loading: false,
        error: null
    },
    absentEmployees: {
        data: null,
        loading: false,
        error: null
    }
};

const setTeamSummaryStart = (state: ITeamState) => {
    return produce(state, (draft: Draft<ITeamState>) => {
        draft.summary.loading = true;
        draft.summary.error = null;
    });
};

const setTeamSummarySuccess = (state: ITeamState, action: any) => {
    return produce(state, (draft: Draft<ITeamState>) => {
        draft.summary.loading = false;
        draft.summary.error = null;
        draft.summary.data = action.payload;
    });
};

const setTeamSummaryFail = (state: ITeamState, action: any) => {
    return produce(state, (draft: Draft<ITeamState>) => {
        draft.summary.loading = false;
        draft.summary.error = action.error;
        draft.summary.data = null
    });
};
const setTeamMembersStart = (state: ITeamState) => {
    return produce(state, (draft: Draft<ITeamState>) => {
        draft.members.loading = true;
        draft.members.error = null;
    });
};

const setTeamMembersSuccess = (state: ITeamState, action: any) => {
    return produce(state, (draft: Draft<ITeamState>) => {
        draft.members.loading = false;
        draft.members.error = null;
        draft.members.data = action.payload;
    });
};

const setTeamMembersFail = (state: ITeamState, action: any) => {
    return produce(state, (draft: Draft<ITeamState>) => {
        draft.members.loading = false;
        draft.members.error = action.error;
        draft.members.data = null
    });
};


const setTotalAttendanceStart = (state: ITeamState) => {
    return produce(state, (draft: Draft<ITeamState>) => {
        draft.attendance.loading = true;
        draft.attendance.error = null;
    });
};

const setTotalAttendanceSuccess = (state: ITeamState, action: any) => {
    return produce(state, (draft: Draft<ITeamState>) => {
        draft.attendance.loading = false;
        draft.attendance.error = null;
        draft.attendance.data = action.payload;
    });
};

const setTotalAttendanceFail = (state: ITeamState, action: any) => {
    return produce(state, (draft: Draft<ITeamState>) => {
        draft.attendance.loading = false;
        draft.attendance.error = action.error;
        draft.attendance.data = null
    });
};

const setEmployeesOnVacationStart = (state: ITeamState) => {
    return produce(state, (draft: Draft<ITeamState>) => {
        draft.employeesOnVacation.loading = true;
        draft.employeesOnVacation.error = null;
    });
};

const setEmployeesOnVacationSuccess = (state: ITeamState, action: any) => {
    return produce(state, (draft: Draft<ITeamState>) => {
        draft.employeesOnVacation.loading = false;
        draft.employeesOnVacation.error = null;
        draft.employeesOnVacation.data = action.payload;
    });
};

const setEmployeesOnVacationFail = (state: ITeamState, action: any) => {
    return produce(state, (draft: Draft<ITeamState>) => {
        draft.employeesOnVacation.loading = false;
        draft.employeesOnVacation.error = action.error;
        draft.employeesOnVacation.data = null
    });
};

const setExusedLeavesTodayStart = (state: ITeamState) => {
    return produce(state, (draft: Draft<ITeamState>) => {
        draft.excusedLeavesToday.loading = true;
        draft.excusedLeavesToday.error = null;
    });
};

const setExusedLeavesTodaySuccess = (state: ITeamState, action: any) => {
    return produce(state, (draft: Draft<ITeamState>) => {
        draft.excusedLeavesToday.loading = false;
        draft.excusedLeavesToday.error = null;
        draft.excusedLeavesToday.data = action.payload;
    });
};

const setExusedLeavesTodayFail = (state: ITeamState, action: any) => {
    return produce(state, (draft: Draft<ITeamState>) => {
        draft.excusedLeavesToday.loading = false;
        draft.excusedLeavesToday.error = action.error;
        draft.excusedLeavesToday.data = null
    });
};

const setEmployeesOnVacationListStart = (state: ITeamState) => {
    return produce(state, (draft: Draft<ITeamState>) => {
        draft.onVacation.loading = true;
        draft.onVacation.error = null;
    });
}

const setEmployeesOnVacationListSuccess = (state: ITeamState, action: any) => {
    return produce(state, (draft: Draft<ITeamState>) => {
        draft.onVacation.loading = false;
        draft.onVacation.error = null;
        draft.onVacation.data = action.payload;
    });
};

const setEmployeesOnVacationListFail = (state: ITeamState, action: any) => {
    return produce(state, (draft: Draft<ITeamState>) => {
        draft.onVacation.loading = false;
        draft.onVacation.error = action.error;
        draft.onVacation.data = null
    });
};

const setExusedLeavesListStart = (state: ITeamState) => {
    return produce(state, (draft: Draft<ITeamState>) => {
        draft.exusedLeavesList.loading = true;
        draft.exusedLeavesList.error = null;
    });
}

const setExusedLeavesListSuccess = (state: ITeamState, action: any) => {
    return produce(state, (draft: Draft<ITeamState>) => {
        draft.exusedLeavesList.loading = false;
        draft.exusedLeavesList.error = null;
        draft.exusedLeavesList.data = action.payload;
    });
};

const setExusedLeavesListFail = (state: ITeamState, action: any) => {
    return produce(state, (draft: Draft<ITeamState>) => {
        draft.exusedLeavesList.loading = false;
        draft.exusedLeavesList.error = action.error;
        draft.exusedLeavesList.data = null
    });
};
const setAbsentEmployeesListStart = (state: ITeamState) => {
    return produce(state, (draft: Draft<ITeamState>) => {
        draft.absentEmployees.loading = true;
        draft.absentEmployees.error = null;
    });
}

const setAbsentEmployeesListSuccess = (state: ITeamState, action: any) => {
    return produce(state, (draft: Draft<ITeamState>) => {
        draft.absentEmployees.loading = false;
        draft.absentEmployees.error = null;
        draft.absentEmployees.data = action.payload;
    });
};

const setAbsentEmployeesListFail = (state: ITeamState, action: any) => {
    return produce(state, (draft: Draft<ITeamState>) => {
        draft.absentEmployees.loading = false;
        draft.absentEmployees.error = action.error;
        draft.absentEmployees.data = null
    });
};

const teamReducer = (state: ITeamState = initialState, action: any) => {
    switch (action.type) {
        case GET_TEAM_INFO_START:
            return setTeamSummaryStart(state);
        case GET_TEAM_INFO_SUCCESS:
            return setTeamSummarySuccess(state, action);
        case GET_TEAM_INFO_FAIL:
            return setTeamSummaryFail(state, action);
        case GET_TEAM_MEMBERS_START:
            return setTeamMembersStart(state);
        case GET_TEAM_MEMBERS_SUCCESS:
            return setTeamMembersSuccess(state, action);
        case GET_TEAM_MEMBERS_FAIL:
            return setTeamMembersFail(state, action);
        case GET_TOTAL_ATTENDANCE_START: 
            return setTotalAttendanceStart(state)
        case GET_TOTAL_ATTENDANCE_SUCCESS:
            return setTotalAttendanceSuccess(state, action);
        case GET_TOTAL_ATTENDANCE_FAIL:
            return setTotalAttendanceFail(state, action);
        case EMPLOYEES_ON_VACATION_START: 
            return setEmployeesOnVacationStart(state)
        case EMPLOYEES_ON_VACATION_SUCCESS: 
            return setEmployeesOnVacationSuccess(state, action)
        case EMPLOYEES_ON_VACATION_FAIL: 
            return setEmployeesOnVacationFail(state, action)
        case EXCUSED_LEAVES_TODAY_START: 
            return setExusedLeavesTodayStart(state)
        case EXCUSED_LEAVES_TODAY_SUCCESS: 
            return setExusedLeavesTodaySuccess(state, action)
        case EXCUSED_LEAVES_TODAY_FAIL: 
            return setExusedLeavesTodayFail(state, action)
        case EMPLOYEES_ON_VACATION_LIST_START: 
            return setEmployeesOnVacationListStart(state)
        case EMPLOYEES_ON_VACATION_LIST_SUCCESS: 
            return setEmployeesOnVacationListSuccess(state, action)
        case EMPLOYEES_ON_VACATION_LIST_FAIL: 
            return setEmployeesOnVacationListFail(state, action)
        case EXUSED_LEAVES_LIST_START: 
            return setExusedLeavesListStart(state)
        case EXUSED_LEAVES_LIST_SUCCESS: 
            return setExusedLeavesListSuccess(state, action)
        case EXUSED_LEAVES_LIST_FAIL: 
            return setExusedLeavesListFail(state, action)
        case ABSENT_EMPLOYEES_LIST_START: 
            return setAbsentEmployeesListStart(state)
        case ABSENT_EMPLOYEES_LIST_SUCCESS: 
            return setAbsentEmployeesListSuccess(state, action)
        case ABSENT_EMPLOYEES_LIST_FAIL: 
            return setAbsentEmployeesListFail(state, action)
        default: return state;
    }
};

export default teamReducer;