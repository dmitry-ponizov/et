import { takeLatest, all, put, call } from 'redux-saga/effects';
import { GET_USER_PUNCH, GET_PUNCH_STATUSES, GET_PUNCH_TYPES, SET_USER_PUNCH } from '../global/actionTypes';
import { getUserPunchStartAction, getUserPunchSuccessAction, getUserPunchErrorAction, getPunchStatusesStartAction, getPunchStatusesSuccessAction, getPunchStatusesFailAction, getPunchTypesStartAction, getPunchTypesSuccessAction, getPunchTypesFailAction, setUserPunchStartAction, setUserPunchSuccessAction, setUserPunchFailAction } from './actions';
import { getUserPunchApi, getPunchOptionsApi, setUserPunchApi } from './api';
import { NoData, ServerError } from '../../constants/errors';

export function* getUserPunchSaga(data: { type: string, params: FormData, stationId: string }) {
    try {
        yield put(getUserPunchStartAction());
        const response = yield call(getUserPunchApi, data.params, data.stationId);
        if (response.data && response.data.api_retval) {
            yield put(getUserPunchSuccessAction(response.data.api_retval));
        } else {
            yield put(getUserPunchErrorAction(ServerError));
        }
    } catch (e) {
        yield put(getUserPunchErrorAction(e));
    }
}

export function* getPunchStatusesSaga(data: { type: string, params: FormData}) {
    try {
        yield put(getPunchStatusesStartAction());
        const response = yield call(getPunchOptionsApi, data.params);
        if (response.data) {
            yield put(getPunchStatusesSuccessAction(response.data));
        } else {
            yield put(getPunchStatusesFailAction(NoData));
        }
    } catch (e) {
        yield put(getPunchStatusesFailAction(e));
    }
}

export function* getPunchTypesSaga(data: { type: string, params: FormData }) {
    try {
        yield put(getPunchTypesStartAction());
        const response = yield call(getPunchOptionsApi, data.params);
        if (response.data) {
            yield put(getPunchTypesSuccessAction(response.data));
        } else {
            yield put(getPunchTypesFailAction(NoData));
        }
    } catch (e) {
        yield put(getPunchTypesFailAction(e));
    }
}

export function* setUserPunchSaga(data: { type: string, params: FormData }) {
    try {
        yield put(setUserPunchStartAction());
        const response = yield call(setUserPunchApi, data.params);
        if (response.data) {
            yield put(setUserPunchSuccessAction());
        } else {
            yield put(setUserPunchFailAction(NoData));
        }
    } catch (e) {
        yield put(setUserPunchFailAction(e));
    }
}

function* punchInOutSaga() {
    yield all([
        takeLatest(GET_USER_PUNCH, getUserPunchSaga),
        takeLatest(GET_PUNCH_STATUSES, getPunchStatusesSaga),
        takeLatest(GET_PUNCH_TYPES, getPunchTypesSaga),
        takeLatest(SET_USER_PUNCH, setUserPunchSaga),
    ]);
}

export { punchInOutSaga };
