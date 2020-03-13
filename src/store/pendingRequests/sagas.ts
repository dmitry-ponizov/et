import { put, call, takeLatest} from 'redux-saga/effects';
import { issetResponseData } from '../../utils/index';
import { NoData } from '../../constants/errors';
import { 
    getPayloadFromResponse,  
} from '../global/responses';
import { fetchRequestAuthDataStartAction, fetchRequestAuthDataSuccessAction, fetchRequestAuthDataFailAction, getRequestTypesStartAction, getRequestTypesSuccessAction, getRequestTypesFailAction, setPagerDataAuthRequestAction, getRequestStartAction, getRequestSuccessAction, getRequestFailAction, authtorizeRequestStartAction, authtorizeRequestFailAction, authtorizeRequestSuccessAction } from './actions';
import { FETCH_REQUEST_AUTH_DATA, GET_REQUEST_AUTH_TYPES, GET_AUTH_REQUEST, AUTHORIZE_REQUEST } from '../global/actionTypes';
import { fetchRequestsApi, getRequestOptionsApi } from '../requests/api';
import { getPagerData } from '../global/responses';
import { authtorizeRequestApi, AuthtorizeDeclineRequestApi } from './api';


export function* getAuthRequestDataSaga(data: { type: string, url: string }) {
    try {
        yield put(fetchRequestAuthDataStartAction());
        const response = yield call(authtorizeRequestApi, data.url);
        if(issetResponseData(response)) {
            const handledData = getPayloadFromResponse(response.data);
            yield put(fetchRequestAuthDataSuccessAction(handledData));
            const pagerData = getPagerData(response);
            yield put(setPagerDataAuthRequestAction(pagerData));
        } else {
            yield put(fetchRequestAuthDataFailAction(NoData));
        }
            
    } catch (e) {
        yield put(fetchRequestAuthDataFailAction(e));
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

export function* getRequestSaga(data: { type: string, params: FormData }) {
    try {
        yield put(getRequestStartAction());
        const response = yield call(fetchRequestsApi, data.params)
        if (issetResponseData(response)) {
            const handledData = getPayloadFromResponse(response.data);
            yield put(getRequestSuccessAction(handledData[0]));
        } else {
            yield put(getRequestFailAction(NoData));
        }

    } catch (e) {
        yield put(getRequestFailAction(NoData));
    }
}


export function* getAuthtorizeRequestSaga(data: { type: string, params: FormData, status: boolean }) {
    try {
        yield put(authtorizeRequestStartAction());
        const response = yield call(AuthtorizeDeclineRequestApi, data.params)
        if (response.data && response.data.api_retval) {
            yield put(authtorizeRequestSuccessAction(data.status));
        } else {
            yield put(authtorizeRequestFailAction(NoData));
        }

    } catch (e) {
        yield put(authtorizeRequestFailAction(NoData));
    }
}

function* authRequesSaga() {
    yield takeLatest(FETCH_REQUEST_AUTH_DATA, getAuthRequestDataSaga);
    yield takeLatest(GET_REQUEST_AUTH_TYPES, getRequestTypesSaga);
    yield takeLatest(GET_AUTH_REQUEST, getRequestSaga);
    yield takeLatest(AUTHORIZE_REQUEST, getAuthtorizeRequestSaga);
}

export { authRequesSaga };
