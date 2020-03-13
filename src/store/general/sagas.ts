
import { put, call, takeEvery, all, delay, select } from 'redux-saga/effects';
import { LOGIN_USER, AUTH_CHECK_STATE, AUTH_INITIATE_LOGOUT, FETCH_EMPLOYEES_DATA, GET_CURRENT_USER, AUTH_CHECK_TIMEOUT, GET_STATION_ID, GET_PERMISSIONS } from '../global/actionTypes';
import { loginStartAction, loginSuccessAction, loginFailAction, logoutSuccessAction, toggleSideBar, fetchEmployeesDataStartAction, fetchEmployeesDataFailAction, fetchEmployeesDataSuccessAction, getCurrentUserStartAction, getCurrentUserSuccessAction, getCurrentUserFailAction, setUserIdAction, logoutAction, checkAuthTimeOut, setCurrentPageAction, getStationIdSuccessAction, setEmployeesPagerAction, getPermissionsStartAction, getPermissionsFailAction, getPermissionsSuccessAction } from './actions';
import { loginApi, getCurrentUserApi, getStationIdApi, getPermissionsApi } from './api';
import { navigate } from "@reach/router";
import { NoData, LoginOrPassworIcorrect } from '../../constants/errors';
import { issetResponseData, formDataRequestFormat } from '../../utils/index';
import { getPayloadFromResponse, getPagerData } from '../global/responses';
import { getEmployeesDataApi } from '../global/globalApi';
import { expirationSessionTime } from './constants';
import { HomePath, MePath } from '../../routes/constants';
import { getSessionIdSelector } from './selectors';

export function* loginSaga(data: { type: string, params: FormData }) {
  try {
    yield put(loginStartAction());
    const response = yield call(loginApi, data.params);
    if (response && response.data && typeof response.data.api_retval !== 'boolean') {
      yield document.cookie = `SessionID=${response.data}`;
      const expirationDate = yield new Date(new Date().getTime() + expirationSessionTime * 1000)
      yield sessionStorage.setItem("SessionID", response.data);
      yield sessionStorage.setItem("expirationDate", expirationDate);
      yield put(loginSuccessAction(response.data));
      yield put(setCurrentPageAction(HomePath))
      navigate(MePath);
    } else {
      yield put(loginFailAction(LoginOrPassworIcorrect));
    }
  } catch (e) {
    yield loginFailAction(e);
  }
}

export function* checkAuthTimeOutSaga(action: any) {
  yield delay(action.expirationTime)
  yield put(logoutAction());
}


export function* authCheckStateSaga() {
  const sessionId = yield sessionStorage.getItem('SessionID')
  if (!sessionId) {
    yield put(logoutAction());
  } else {
    const sessionExpirationDate = sessionStorage.getItem('expirationDate');
    if (sessionExpirationDate) {
      const expirationDate = yield new Date(sessionExpirationDate);
      if (expirationDate <= new Date()) {
        yield put(logoutAction());
      } else {
        yield put(loginSuccessAction(sessionId));
        yield put(checkAuthTimeOut(((expirationDate.getTime() - new Date().getTime()) / 1000)))
      }
    }
  }
}

export function* logoutSaga() {
  yield sessionStorage.removeItem("lang");
  yield sessionStorage.removeItem("SessionID");
  yield sessionStorage.removeItem("expirationDate");
  yield put(logoutSuccessAction());
  yield put(toggleSideBar())
  if(typeof caches !== 'undefined' ) {
    yield caches.delete('elteam-data');
  }
  // navigate('/login')
  yield window.location.href = '/'
}

export function* fetchEmployeesDataSaga(data: { type: string, params: any }) {
  try {
    yield put(fetchEmployeesDataStartAction());
    const response = yield call(getEmployeesDataApi, data.params);
    if (issetResponseData(response)) {
      const handledData = getPayloadFromResponse(response.data);
      const pagerData = getPagerData(response);
      yield put(setEmployeesPagerAction(pagerData))
      if (handledData === true) {
        yield put(fetchEmployeesDataFailAction(NoData));
      } else {
        yield put(fetchEmployeesDataSuccessAction(handledData));
      }
    } else {
      yield put(fetchEmployeesDataFailAction(NoData));
    }
  } catch (e) {

  }
}

export function* getCurrentUserSaga(data: { type: string, params: any }) {
  try {
    yield put(getCurrentUserStartAction());
    const sessionId = yield select(getSessionIdSelector);
    const response = yield call(getCurrentUserApi, sessionId);
    if (response.data && response.data.api_retval) {
      yield put(getCurrentUserSuccessAction(response.data.api_retval));
      yield put(setUserIdAction(response.data.api_retval.id))
    } else {
      yield put(getCurrentUserFailAction(NoData));
    }
  } catch (e) {
    yield put(getCurrentUserFailAction(NoData));
  }
}


export function* getStationIdSaga(){
  const sessionId = yield select(getSessionIdSelector);
  const formData = formDataRequestFormat(null, sessionId);
  const response = yield call(getStationIdApi, formData);
  if(response.data && response.data.api_retval && typeof response.data.api_retval !== 'boolean') {
    yield localStorage.setItem('StationID', response.data.api_retval)
    yield put(getStationIdSuccessAction(response.data.api_retval))
  }
}

export function* getPermissionsSaga(){
  try {
    yield put(getPermissionsStartAction());
    const sessionId = yield select(getSessionIdSelector);
    const response = yield call(getPermissionsApi, sessionId);
    if (response && response.data && typeof response.data.api_retval !== 'boolean') {
      yield put(getPermissionsSuccessAction(response.data.api_retval));
    } else {
      yield getPermissionsFailAction(NoData);
    }

  } catch (e) {
    yield getPermissionsFailAction(e);
  }
}

function* generalSaga() {
  yield all([
    takeEvery(LOGIN_USER, loginSaga),
    takeEvery(AUTH_CHECK_STATE, authCheckStateSaga),
    takeEvery(AUTH_INITIATE_LOGOUT, logoutSaga),
    takeEvery(FETCH_EMPLOYEES_DATA, fetchEmployeesDataSaga),
    takeEvery(GET_CURRENT_USER, getCurrentUserSaga),
    takeEvery(AUTH_CHECK_TIMEOUT, checkAuthTimeOutSaga),
    takeEvery(GET_STATION_ID, getStationIdSaga),
    takeEvery(GET_PERMISSIONS, getPermissionsSaga),
  ])
}

export { generalSaga };

