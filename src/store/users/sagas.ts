import { takeEvery, put, call, select } from 'redux-saga/effects';
import { GET_USER_DATA, GET_TIMESHEET_FOR_MONTH, GET_AVAILABLE_BALANCE, GET_PROCESSED_DATA, GET_USER_SUBORDINATES } from '../global/actionTypes';
import { getUserDataApi, getTimeSheetForMonthApi, getProcessedDataApi, GetUserSubordinatesApi, fetchAccrualBalancesApi } from './api';
import { getUserDataStartAction, getUserDataSuccessAction, getUserDataFailAction, getTimeSheetForMonthStartAction, getTimeSheetForMonthFailAction, getTimeSheetForMonthSuccessAction, getAvailableBalanceSuccessAction, getProcessedDataStartAction, getProcessedDataFail, getProcessedDataSuccessAction, getSubordinatesStartAction, getSubordinatesFailAction, getSubordinatesSuccessAction, getAvailableBalanceFailAction, getAvailableBalanceStartAction, setPagerDataSubordinatesAction } from './actions';
import { issetResponseData } from '../../utils/index';
import { getGenericDataResponse, getPagerData } from '../global/responses';
import { NoData } from '../../constants/errors';
import { getSessionIdSelector } from '../general/selectors';
import { getMonthForSagaSelector, getYearForSagaSelector } from './selector';
import { isObject } from 'util';

export function* getUserDataSaga(data: { type: string, params: FormData })  {
    try {
        yield put(getUserDataStartAction());
        const response = yield call(getUserDataApi, data.params);
        if (issetResponseData(response)) {
            const requestData = yield getGenericDataResponse(response.data);
            yield put(getUserDataSuccessAction(requestData));
        } else {
            yield put(getUserDataFailAction(NoData));
        }
    } catch (e) {
        yield put(getUserDataFailAction(NoData));
    }
} 


export function* getTimeSheetForMonthSaga(data: { type: string, id: string }) {
    const sessionId = yield select(getSessionIdSelector);
    const month = yield select(getMonthForSagaSelector);
    const year = yield select(getYearForSagaSelector);
    const params = { sessionId, userId: data.id, month, year }
    try {
        yield put(getTimeSheetForMonthStartAction());
        const response = yield call(getTimeSheetForMonthApi, params);
        if (response.data && response.data.api_retval) {
            yield put(getTimeSheetForMonthSuccessAction(response.data.api_retval));
        } else {
            yield put(getTimeSheetForMonthFailAction(NoData));
        }
    } catch (e) {
        yield put(getTimeSheetForMonthFailAction(NoData));
    }
}

export function* getAvailableBalanceSaga(data: { type: string, params: FormData }) {
    try {
        yield put(getAvailableBalanceStartAction());
        const response = yield call(fetchAccrualBalancesApi, data.params);
        if (issetResponseData(response)) {
            yield put(getAvailableBalanceSuccessAction(response.data.api_retval));
        } else {
            yield put(getAvailableBalanceFailAction(NoData));
        }
    } catch (e) {
        yield put(getAvailableBalanceFailAction(NoData));
    }
}

export function* getSubordinatesSaga(data: { type: string, userId: string, pageNumber: string, items: number }) {
    try {
        yield put(getSubordinatesStartAction());
        const sessionId = yield select(getSessionIdSelector);
        const response = yield call(GetUserSubordinatesApi, { userId: data.userId, sessionId, pageNumber: data.pageNumber, items: data.items });
        if (issetResponseData(response)) {
            yield put(getSubordinatesSuccessAction(response.data.api_retval));
            const pagerData = getPagerData(response);
            yield put(setPagerDataSubordinatesAction(pagerData));
        } else {
            yield put(getSubordinatesFailAction(NoData));
        }
    } catch (e) {
        yield put(getSubordinatesFailAction(NoData));
    }
}


export function* getProcessedDataSaga(payload: { type: string, params: { from: string, to: string, userId: string, sessionId: string } }) {
    try {
        yield put(getProcessedDataStartAction());
        const response = yield call(getProcessedDataApi, payload.params);
        if (response.data && isObject(response.data.api_retval)) {
            yield put(getProcessedDataSuccessAction(response.data.api_retval));
        } else {
            yield put(getProcessedDataFail(NoData));
        }

    } catch (e) {
        yield put(getProcessedDataFail(NoData));
    }
}


function* usersSaga() {
    yield takeEvery(GET_USER_DATA, getUserDataSaga);
    yield takeEvery(GET_TIMESHEET_FOR_MONTH, getTimeSheetForMonthSaga);
    yield takeEvery(GET_AVAILABLE_BALANCE, getAvailableBalanceSaga);
    yield takeEvery(GET_PROCESSED_DATA, getProcessedDataSaga);
    yield takeEvery(GET_USER_SUBORDINATES, getSubordinatesSaga);
}

export { usersSaga };
