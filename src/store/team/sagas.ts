import { takeEvery, all, put, call, select } from 'redux-saga/effects';
import { GET_TEAM_INFO, GET_TEAM_MEMBERS, GET_TOTAL_ATTENDANCE, EMPLOYEES_ON_VACATION, EXCUSED_LEAVES_TODAY, EMPLOYEES_ON_VACATION_LIST, EXUSED_LEAVES_LIST, ABSENT_EMPLOYEES_LIST } from '../global/actionTypes';
import { getTeamStartAction, getTeamErrorAction, getTeamSuccessAction, getTeamMembersStartAction, getTeamMembersSuccessAction, getTeamMembersFailAction, getTotalAttendanceTodayStartAction, getTotalAttendanceTodaySuccessAction, getTotalAttendanceTodayFailAction, getEmployeesOnVacationStartAction, getEmployeesOnVacationSuccessAction, getEmployeesOnVacationFailAction, getExusedLeavesStartAction, getExusedLeavesSuccessAction, getExusedLeavesFailAction, getEmployeesOnVacationListStartAction, getEmployeesOnVacationListSuccessAction, getEmployeesOnVacationListFailAction, getExusedLeavesListSuccessAction, getExusedLeavesListFailAction, getExusedLeavesListStartAction, getAbsentEmployeesListStartAction, getAbsentEmployeesListFailAction, getAbsentEmployeesListSuccessAction } from './actions';
import { fetchTeamSummaryApi, fetchTeamMembersApi, fetchTotalAttendanceApi, getEmployeesOnVacationApi, getExusedLeavesApi, fetchEmployeesOnVacationListApi, fetchExusedLeavesListApi, fetchAbsentEmployeesListApi } from './api';
import { NoData } from '../../constants/errors';
import { getSessionIdSelector } from '../general/selectors';
import { issetResponseData } from '../../utils/index';


export function* getTeamSummarySaga() {
    try {
        yield put(getTeamStartAction());
        const sessionId = yield select(getSessionIdSelector);
        const response = yield call(fetchTeamSummaryApi, sessionId);
        if(response.data && typeof response.data.api_retval === 'undefined') {
            yield put(getTeamSuccessAction(response.data))
        } else {
            yield put(getTeamErrorAction(NoData));
        }
    } catch (e) {
        yield put(getTeamErrorAction(NoData));
    }
}

export function* getEmployeesOnVacationSaga() {
    try {
        yield put(getEmployeesOnVacationStartAction());
        const sessionId = yield select(getSessionIdSelector);
        const response = yield call(getEmployeesOnVacationApi, sessionId);
        if(response.data && typeof response.data.employeesOnVacation === 'number') {
            yield put(getEmployeesOnVacationSuccessAction(response.data.employeesOnVacation))
        } else {
            yield put(getEmployeesOnVacationFailAction(NoData));
        }
    } catch (e) {
        yield put(getEmployeesOnVacationFailAction(NoData));
    }
}

export function* getExusedLeavesSaga() {
    try {
        yield put(getExusedLeavesStartAction());
        const sessionId = yield select(getSessionIdSelector);
        const response = yield call(getExusedLeavesApi, sessionId);
        if(response.data && typeof response.data.excusedLeavesToday === 'number') {
            yield put(getExusedLeavesSuccessAction(response.data.excusedLeavesToday))
        } else {
            yield put(getExusedLeavesFailAction(NoData));
        }
    } catch (e) {
        yield put(getExusedLeavesFailAction(NoData));
    }
}


export function* getTeamMembersSaga(data: { type: string, url: string }) {
    try {
        yield put(getTeamMembersStartAction());
        const sessionId = yield select(getSessionIdSelector);
        const url = `&SessionID=${sessionId}${data.url}`
        const response = yield call(fetchTeamMembersApi, url);
        if(issetResponseData(response)){
            yield put(getTeamMembersSuccessAction(response.data.api_retval))
        } else {
            yield put(getTeamMembersFailAction(NoData));
        }
    } catch (e) {
        yield put(getTeamMembersFailAction(NoData));
    }
}

export function* getTotalAttendanceSaga(data: { type: string, url: string }) {
    try {
        yield put(getTotalAttendanceTodayStartAction());
        const sessionId = yield select(getSessionIdSelector);
        const url = `&SessionID=${sessionId}${data.url}`
        const response = yield call(fetchTotalAttendanceApi, url);
        if(response.data && response.data.length){
            yield put(getTotalAttendanceTodaySuccessAction(response.data))
        } else {
            yield put(getTotalAttendanceTodayFailAction(NoData));
        }
    } catch (e) {
        yield put(getTotalAttendanceTodayFailAction(NoData));
    }
}

export function* getEmployeesOnVacationListSaga() {
    try {
        yield put(getEmployeesOnVacationListStartAction());
        const sessionId = yield select(getSessionIdSelector);
        const response = yield call(fetchEmployeesOnVacationListApi, sessionId);
        if(response.data && response.data.length){
            yield put(getEmployeesOnVacationListSuccessAction(response.data))
        } else {
            yield put(getEmployeesOnVacationListFailAction(NoData));
        }
    } catch (e) {
        yield put(getEmployeesOnVacationListFailAction(NoData));
    }
}

export function* getExusedLeavesListSaga() {
    try {
        yield put(getExusedLeavesListStartAction());
        const sessionId = yield select(getSessionIdSelector);
        const response = yield call(fetchExusedLeavesListApi, sessionId);
        if(response.data && response.data.length){
            yield put(getExusedLeavesListSuccessAction(response.data))
            // yield put(getExusedLeavesListSuccessAction(exusedLeavesFixture))
        } else {
            yield put(getExusedLeavesListFailAction(NoData));
        }
    } catch (e) {
        yield put(getExusedLeavesListFailAction(NoData));
    }
}


export function* getAbsentEmployeesListSaga() {
    try {
        yield put(getAbsentEmployeesListStartAction());
        const sessionId = yield select(getSessionIdSelector);
        const response = yield call(fetchAbsentEmployeesListApi, sessionId);
        if(response.data && response.data.length){
            yield put(getAbsentEmployeesListSuccessAction(response.data))
        } else {
            yield put(getAbsentEmployeesListFailAction(NoData));
        }
    } catch (e) {
        yield put(getAbsentEmployeesListFailAction(NoData));
    }
}


function* teamSaga() {
    yield all([
        takeEvery(GET_TEAM_INFO, getTeamSummarySaga),
        takeEvery(GET_TEAM_MEMBERS, getTeamMembersSaga),
        takeEvery(GET_TOTAL_ATTENDANCE, getTotalAttendanceSaga),
        takeEvery(EMPLOYEES_ON_VACATION, getEmployeesOnVacationSaga),
        takeEvery(EXCUSED_LEAVES_TODAY, getExusedLeavesSaga),
        takeEvery(EMPLOYEES_ON_VACATION_LIST, getEmployeesOnVacationListSaga),
        takeEvery(EXUSED_LEAVES_LIST, getExusedLeavesListSaga),
        takeEvery(ABSENT_EMPLOYEES_LIST, getAbsentEmployeesListSaga)
    ])
}

export { teamSaga };