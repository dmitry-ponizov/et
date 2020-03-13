import { put, call, fork, select, takeLatest, all } from 'redux-saga/effects';
import {
    GET_GENERIC_REQUESTS,
    SET_GENERIC_DATA_REQUESTS,
    FETCH_REQUESTS_DATA,
    VALIDATE_REQUEST,
    SET_NEW_REQUEST,
    GET_REQUEST,
    GET_USER_SCHEDULES_BY_REQUEST_TYPE
} from '../global/actionTypes';
import { getGenericDataApi, setGenericDataApi } from '../global/globalApi';
import {
    getGenericDataRequestsStartAction,
    getGenericDataRequestsSuccessAction,
    getGenericDataRequestsFailAction,
    validateRequestStartAction,
    validateRequestSuccessAction,
    validateRequestFailAction,
    setNewRequestStartAction,
    setNewRequestFailAction,
    setNewRequestSuccessAction,
    getRequestStartAction,
    getRequestFailAction,
    getRequestSuccessAction,
    getUserSchedulesByRequestTypeSuccessAction
} from './actions';
import { issetResponseData, formDataRequestFormat } from '../../utils/index';
import { NoData, RequestNotCanceled } from '../../constants/errors';
import {
    getGenericDataResponse,
    getPayloadFromResponse,
    getPagerData
} from '../global/responses';
import {
    setRequestRequestsDataAction,
    fetchRequestsDataStartAction,
    fetchRequestsDataSuccessAction,
    fetchRequestsDataFailAction,
    setPagerDataRequests
} from './actions';
import { getFormDataSelector } from './selectors';
import { fetchRequestsApi, getRequestOptionsApi, getRequestShiftApi, getReportToUserApi, validateRequestApi, setRequestApi, cancelRequestApi, getAuthHistoryApi, getUserShiftsForVacationApi, getUserSchedulesApi } from './api';
import { setGenericDataRequestsFailAction, getRequestTypesStartAction, getRequestTypesSuccessAction, getRequestTypesFailAction, getRequestDirectManagerStart, getRequestDirectManagerSuccess, getRequestDirectManagerFailAction, getRequestShiftsStartAction, getRequestShiftsSuccess, getRequestShiftsFail, cancelRequestsStartAction, cancelRequestsSuccessAction, cancelRequestsFailAction, getRequestStatusesStartAction, getRequestStatusesSuccessAction, getRequestStatusesFailAction, getAuthHistoryStartAction, getAuthHistoryFailAction, getAuthHistorySuccessAction, getAbsencePoliciesStartAction, getAbsencePoliciesFailAction, getAbsencePoliciesSuccessAction, getUserShiftsForVacationStartAction, getUserShiftsForVacationFailAction, getUserShiftsForVacationSuccessAction, getHourlyAbsencePoliciesStartAction, getHourlyAbsencePoliciesSuccessAction, getHourlyAbsencePoliciesFailAction, getUserSchedulesByRequestTypeStartAction, getUserSchedulesByRequestTypeFailAction, getAnotherUsersRequestStartAction, getAnotherUsersRequestFailAction, getAnotherUsersRequestSuccessAction } from './actions';
import { transformRequestRequests, validateResponse, getErrorValidateRequest, authRequestDataResponse } from './responses';
import { getSessionIdSelector } from '../general/selectors';
import { GET_REQUEST_TYPES, GET_REQUEST_DIRECT_MANAGER, GET_REQUEST_SHIFTS, CANCEL_REQUESTS, GET_REQUEST_STATUSES, GET_REQUEST_AUTH_HISTORY, GET_ABSENCE_POLICIES, GET_USER_SHIFTS_FOR_VACATION, GET_HOURLY_ABSENCE_POLICIES, GET_ANOTHER_USERS_REQUEST } from '../global/actionTypes';


export function* getGenericDataSaga(data: { type: string, params: FormData }) {

    try {
        yield put(getGenericDataRequestsStartAction());
        const response = yield call(getGenericDataApi, data.params);
        if (issetResponseData(response)) {
            const requestData = yield getGenericDataResponse(response.data);
            yield put(getGenericDataRequestsSuccessAction(requestData));
            const requestParams = yield transformRequestRequests(requestData.data);
            yield put(setRequestRequestsDataAction(requestParams));
            // yield fork(getRequestsSaga);
        } else {
            yield put(getGenericDataRequestsFailAction(NoData));
        }
    } catch (e) {
        yield put(getGenericDataRequestsFailAction(e));
    }
}

export function* setGenericDataSaga(data: { type: string, params: FormData }) {
    try {
        yield call(setGenericDataApi, data.params);
    } catch (e) {
        yield put(setGenericDataRequestsFailAction(e));
    }
}

export function* getRequestTypesSaga(data: { type: string, params: any }) {
    try {
        yield put(getRequestTypesStartAction());
        const response = yield call(getRequestOptionsApi, data.params)
        if (response.data) {
            yield put(getRequestTypesSuccessAction(response.data));
        } else {
            yield put(getRequestTypesFailAction(NoData));
        }
    } catch (e) {
        yield put(getRequestTypesFailAction(NoData));
    }
}

export function* getRequestDirectManagerSaga(data: { type: string, params: any, directType: string }) {

    try {
        yield put(getRequestDirectManagerStart());
        if (data.directType === 'options') {
            const response = yield call(getRequestOptionsApi, data.params)
            if (response.data) {
                yield put(getRequestDirectManagerSuccess(response.data));
            } else {
                yield put(getRequestDirectManagerFailAction(NoData));
            }
        } else {
            const response = yield call(getReportToUserApi, data.params)
            if (response.data.api_retval) {
                yield put(getRequestDirectManagerSuccess(response.data.api_retval));
            } else {
                yield put(getRequestDirectManagerFailAction(NoData));
            }
        }
    } catch (e) {
        yield put(getRequestDirectManagerFailAction(NoData));
    }
}

export function* getRequestShiftSaga(data: { type: string, params: FormData }) {
    try {
        yield put(getRequestShiftsStartAction());
        const response = yield call(getRequestShiftApi, data.params)
        if (issetResponseData(response)) {
            const handledData = getPayloadFromResponse(response.data);
            yield put(getRequestShiftsSuccess(handledData));
        } else {
            yield put(getRequestShiftsFail(NoData));
        }
    } catch (e) {
        yield put(getRequestShiftsFail(NoData));
    }
}

export function* validateNewRequestSaga(data: { type: string, params: FormData }) {
    try {
        yield put(validateRequestStartAction());
        const response = yield call(validateRequestApi, data.params)
        if (validateResponse(response)) {
            yield put(validateRequestSuccessAction())
        } else {
            const error = getErrorValidateRequest(response);
            yield put(validateRequestFailAction(error));
        }
    } catch (e) {
        yield put(validateRequestFailAction(NoData));
    }
}

export function* setNewRequestSaga() {
    try {
        yield put(setNewRequestStartAction());
        const sessionId = yield select(getSessionIdSelector);
        const newRequestData = yield select(getFormDataSelector);
        const formData = formDataRequestFormat(newRequestData, sessionId);
        const response = yield call(setRequestApi, formData)
        if (validateResponse(response)) {
            yield put(setNewRequestSuccessAction())
            // yield fork(getRequestsSaga)
        } else {
            yield put(setNewRequestFailAction(NoData))
        }
    } catch (e) {
        yield put(setNewRequestFailAction(NoData))
    }
}

export function* cancelRequestsSaga(data: { type: string, params: FormData }) {
    try {
        yield put(cancelRequestsStartAction());
        const response = yield call(cancelRequestApi, data.params)
        if (response.data && response.data.api_retval) {
            yield put(cancelRequestsSuccessAction())
            // yield fork(getRequestsSaga)
        } else {
            yield put(cancelRequestsFailAction(RequestNotCanceled));
        }
    } catch (e) {
        yield put(cancelRequestsFailAction(NoData))
    }
}

export function* getRequestsSaga(data: { type: string, params: FormData }) {
    try {
        // const params = yield select(getRequestsRequestDataSelector);

        yield put(fetchRequestsDataStartAction());
        // const sessionId = yield select(getSessionIdSelector);
        const response = yield call(fetchRequestsApi, data.params);
        if (issetResponseData(response)) {
            const handledData = getPayloadFromResponse(response.data);
            yield put(fetchRequestsDataSuccessAction(handledData));
            const pagerData = getPagerData(response);
            yield put(setPagerDataRequests(pagerData));
        } else {
            yield put(fetchRequestsDataFailAction(NoData));
        }

    } catch (e) {
        yield put(fetchRequestsDataFailAction(e));
    }
}

export function* getRequestStatuses(data: { type: string, params: FormData }) {
    try {
        yield put(getRequestStatusesStartAction());
        const response = yield call(getRequestOptionsApi, data.params)
        if (response.data) {
            yield put(getRequestStatusesSuccessAction(response.data));
        } else {
            yield put(getRequestStatusesFailAction(NoData));
        }
    } catch (e) {
        yield put(getRequestStatusesFailAction(NoData));
    }
}

export function* getRequestSaga(data: { type: string, params: FormData }) {
    try {
        yield put(getRequestStartAction());
        const response = yield call(fetchRequestsApi, data.params)
        if (issetResponseData(response)) {
            const handledData = getPayloadFromResponse(response.data);
            yield put(getRequestSuccessAction(handledData[0]));
            const authRequestData = authRequestDataResponse(handledData[0])
            yield fork(() => getRequestAuthHistorySaga(authRequestData))
        } else {
            yield put(getRequestFailAction(NoData));
        }

    } catch (e) {
        yield put(getRequestFailAction(NoData));
    }
}

export function* getRequestAuthHistorySaga(authRequestData: any) {
    try {
        yield put(getAuthHistoryStartAction());
        const sessionId = yield select(getSessionIdSelector);
        const response = yield call(getAuthHistoryApi, formDataRequestFormat(authRequestData, sessionId))
        if (issetResponseData(response)) {
            const handledData = getPayloadFromResponse(response.data);
            yield put(getAuthHistorySuccessAction(handledData));
        } else {
            yield put(getAuthHistoryFailAction(''));
        }
    } catch (e) {
        yield put(getAuthHistoryFailAction(NoData));
    }
}

export function* getAbsencePoliciesSaga(data: { type: string, params: FormData }) {
    try {
        yield put(getAbsencePoliciesStartAction());
        const response = yield call(getRequestOptionsApi, data.params);
        if (response.data) {
            yield put(getAbsencePoliciesSuccessAction(response.data));
        } else {
            yield put(getAbsencePoliciesFailAction(NoData));
        }
    } catch (e) {
        yield put(getAbsencePoliciesFailAction(NoData));
    }
}

export function* getUserShiftsForVacationSaga(data: { type: string, params: FormData }) {
    try {
        yield put(getUserShiftsForVacationStartAction());
        const response = yield call(getUserShiftsForVacationApi, data.params);
        if (typeof response.data.api_retval !== 'boolean') {
            yield put(getUserShiftsForVacationSuccessAction(response.data.api_retval));
        } else {
            yield put(getUserShiftsForVacationFailAction(''));
        }

    } catch (e) {
        yield put(getUserShiftsForVacationFailAction(NoData));
    }
}


export function* getHourlyAbsencePoliciesSaga(data: { type: string, params: FormData }) {
    try {
        yield put(getHourlyAbsencePoliciesStartAction());
        const response = yield call(getRequestOptionsApi, data.params);
        if (response.data) {
            yield put(getHourlyAbsencePoliciesSuccessAction(response.data));
        } else {
            yield put(getHourlyAbsencePoliciesFailAction(NoData));
        }
    } catch (e) {
        yield put(getHourlyAbsencePoliciesFailAction(NoData));
    }
}


export function* getUserSchedulesByRequestTypeSaga(data: { type: string, params: FormData }) {
    try {
        yield put(getUserSchedulesByRequestTypeStartAction());
        const response = yield call(getUserSchedulesApi, data.params);
        if (Boolean(Object.keys(response.data.api_retval).length)) {
            yield put(getUserSchedulesByRequestTypeSuccessAction(response.data.api_retval));
        } else {
            yield put(getUserSchedulesByRequestTypeFailAction(''));
        }
    } catch (e) {
        yield put(getUserSchedulesByRequestTypeFailAction(NoData));
    }
}

export function* getAnotherUsersRequestSaga(data: { type: string, params: FormData }){
    try {
        yield put(getAnotherUsersRequestStartAction());
        const response = yield call(getRequestOptionsApi, data.params);
        if (response.data) {
            yield put(getAnotherUsersRequestSuccessAction(response.data));
        } else {
            yield put(getAnotherUsersRequestFailAction(NoData));
        }
    } catch (e) {
        yield put(getAnotherUsersRequestFailAction(NoData));
    }
}

function* requestsSaga() {
    yield all([
        takeLatest(GET_GENERIC_REQUESTS, getGenericDataSaga),
        takeLatest(FETCH_REQUESTS_DATA, getRequestsSaga),
        takeLatest(SET_GENERIC_DATA_REQUESTS, setGenericDataSaga),
        takeLatest(GET_REQUEST_TYPES, getRequestTypesSaga),
        takeLatest(GET_REQUEST_DIRECT_MANAGER, getRequestDirectManagerSaga),
        takeLatest(GET_REQUEST_SHIFTS, getRequestShiftSaga),
        takeLatest(VALIDATE_REQUEST, validateNewRequestSaga),
        takeLatest(SET_NEW_REQUEST, setNewRequestSaga),
        takeLatest(CANCEL_REQUESTS, cancelRequestsSaga),
        takeLatest(GET_REQUEST_STATUSES, getRequestStatuses),
        takeLatest(GET_REQUEST, getRequestSaga),
        takeLatest(GET_REQUEST_AUTH_HISTORY, getRequestAuthHistorySaga),
        takeLatest(GET_ABSENCE_POLICIES, getAbsencePoliciesSaga),
        takeLatest(GET_USER_SHIFTS_FOR_VACATION, getUserShiftsForVacationSaga),
        takeLatest(GET_HOURLY_ABSENCE_POLICIES, getHourlyAbsencePoliciesSaga),
        takeLatest(GET_USER_SCHEDULES_BY_REQUEST_TYPE, getUserSchedulesByRequestTypeSaga),
        takeLatest(GET_ANOTHER_USERS_REQUEST, getAnotherUsersRequestSaga),
    ]);
}

export { requestsSaga };
