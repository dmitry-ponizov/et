import { takeEvery, put, call, select } from 'redux-saga/effects';
import { FETCH_DIVISIONS, FETCH_DEPARTMENTS } from '../global/actionTypes';
import { getDivisionsStartAction, getDivisionsSuccessAction, getDivisionsFailAction, getDeptarmentsStartAction, getDeptarmentsSuccessAction, getDeptarmentsFailAction } from './actions';
import { NoData } from '../../constants/errors';
import { issetResponseData } from '../../utils/index';
import { fetchDivisionsApi, fetchDepartmentsApi } from './api';
import { getSessionIdSelector } from '../general/selectors';


export function* fetchDivisionsSaga() {
    try {
        yield put(getDivisionsStartAction());
        const sessionId = yield select(getSessionIdSelector);
        const response = yield call(fetchDivisionsApi, sessionId);
        if (issetResponseData(response)) {
            yield put(getDivisionsSuccessAction(response.data.api_retval));
        } else {
            yield put(getDivisionsFailAction(NoData));
        }
    } catch (e) {
        yield put(getDivisionsFailAction(NoData));
    }
}

export function* fetchDepartmentsSaga(data: { type: string, params: FormData }) {
    try {
        yield put(getDeptarmentsStartAction());
        const response = yield call(fetchDepartmentsApi, data.params);
        if (issetResponseData(response)) {
            yield put(getDeptarmentsSuccessAction(response.data.api_retval));
        } else {
            yield put(getDeptarmentsFailAction(NoData));
        }
    } catch (e) {
        yield put(getDeptarmentsFailAction(NoData));
    }
}

function* companySaga() {
    yield takeEvery(FETCH_DIVISIONS, fetchDivisionsSaga);
    yield takeEvery(FETCH_DEPARTMENTS, fetchDepartmentsSaga);
}

export { companySaga };
