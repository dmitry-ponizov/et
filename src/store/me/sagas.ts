import { takeEvery, put, call, select } from 'redux-saga/effects';
import { GET_ME_DATA, CHANGE_AVATAR, EDIT_USER, } from '../global/actionTypes';
import { getMeDataStartAction, getMeDataSuccessAction, getMeDataFailAction, editUserStartAction, editUserFailAction, editUserSuccessAction } from './actions';
import { issetResponseData, formDataRequestFormat } from '../../utils/index';
import { getGenericDataResponse } from '../global/responses';
import { NoData, NotPermissions } from '../../constants/errors';
import { getUserDataApi } from '../users/api';
import { changeAvatarApi, editUserInfoApi,  } from './api';
import { getUserDataSuccessAction } from '../users/actions';
import { getSessionIdSelector } from '../general/selectors';

export function* getMeDataSaga(data: { type: string, params: FormData }){
    try {
        yield put(getMeDataStartAction());
        const response = yield call(getUserDataApi, data.params);
        if (issetResponseData(response)) {
            const requestData = yield getGenericDataResponse(response.data);
            yield put(getMeDataSuccessAction(requestData));
            yield put(getUserDataSuccessAction(requestData));
            
        } else {
            yield put(getMeDataFailAction(NotPermissions));
        }
    } catch (e) {
        yield put(getMeDataFailAction(NoData));
    }
} 

export function* changeAvatarSaga(data: { type: string, payload: any }) {
    try {
        yield call(changeAvatarApi, data.payload);
    } catch (e) {
  
    }
}

export function* editUserSaga(data: { type: string, params: any }) {
    try {
        const sessionId = yield select(getSessionIdSelector);
        const formData = formDataRequestFormat([data.params], sessionId);
        yield put(editUserStartAction());
        const response = yield call(editUserInfoApi, formData);
        if(response.data && response.data.api_retval) {
            yield put(editUserSuccessAction(data.params));
        } else {
            yield put(editUserFailAction(response.data.api_details.description));
        }
    } catch (e) {
        yield put(editUserFailAction(NoData));
    }
} 


function* meSaga() {
    yield takeEvery(GET_ME_DATA, getMeDataSaga);
    yield takeEvery(CHANGE_AVATAR, changeAvatarSaga);
    yield takeEvery(EDIT_USER, editUserSaga);
}

export { meSaga };
