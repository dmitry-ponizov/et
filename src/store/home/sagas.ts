
import { put, call, takeEvery, all, select } from 'redux-saga/effects';
import { FETCH_USERS_WITH_BIRTHDAY, FETCH_NEW_MEMBERS } from '../global/actionTypes';
import { fetchUsersWithBirthdayStartAction, fetchUsersWithBirthdayFailAction, fetchUsersWithBirthdaySuccessAction, fetchNewMembersStartAction, fetchNewMembersSuccessAction, fetchNewMembersFailAction } from './actions';
import { NoBirthday, NoNewMembers, ServerError } from '../../constants/errors';
import { getSessionIdSelector } from '../general/selectors';
import { fetchUsersWithBirthdayApi, fetchNewMembersApi } from './api';


export function* fetchUsersWithBirthdaySaga(data: { type: string, params: any }) {
  try {
    yield put(fetchUsersWithBirthdayStartAction());
    const sessionId = yield select(getSessionIdSelector);
    const response = yield call(fetchUsersWithBirthdayApi, sessionId);
    if (Boolean(response.data.length)) {
      yield put(fetchUsersWithBirthdaySuccessAction(response.data));
    } else {
      yield put(fetchUsersWithBirthdayFailAction(NoBirthday));
    }
  } catch (e) {
    yield put(fetchUsersWithBirthdayFailAction(ServerError));
  }
}

export function* fetchNewMembersSaga(data: { type: string, params: any }) {
  try {
    yield put(fetchNewMembersStartAction());
    const sessionId = yield select(getSessionIdSelector);
    const response = yield call(fetchNewMembersApi, sessionId);
    if (Boolean(response.data.length)) {
      yield put(fetchNewMembersSuccessAction(response.data));
    } else {
      yield put(fetchNewMembersFailAction(NoNewMembers));
    }
  } catch (e) {
    yield put(fetchNewMembersFailAction(ServerError));
  }
}


function* homeSaga() {
  yield all([
    takeEvery(FETCH_USERS_WITH_BIRTHDAY, fetchUsersWithBirthdaySaga),
    takeEvery(FETCH_NEW_MEMBERS, fetchNewMembersSaga),
  ])
}

export { homeSaga };