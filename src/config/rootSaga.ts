import {fork, all} from "redux-saga/effects";
import {generalSaga} from "../store/general/sagas";
import { requestsSaga } from '../store/requests/sagas';
import { authRequesSaga } from '../store/pendingRequests/sagas';
import { usersSaga } from '../store/users/sagas';
import { teamSaga } from '../store/team/sagas';
import { meSaga } from '../store/me/sagas';
import { punchInOutSaga } from '../store/punchInOut/sagas'
import { homeSaga } from '../store/home/sagas'
import { companySaga } from '../store/company/sagas'

export function* rootSaga() {
    yield all([
       fork(generalSaga),
       fork(requestsSaga),
       fork(authRequesSaga),
       fork(usersSaga),
       fork(teamSaga),
       fork(meSaga),
       fork(punchInOutSaga),
       fork(homeSaga),
       fork(companySaga),
    ]);
}
  