import { combineReducers } from 'redux';
import  generalReducer  from '../store/general/reducer';
import requestsReducer from '../store/requests/reducer';
import pendingRequestsReducer from '../store/pendingRequests/reducer';
import usersReducer from '../store/users/reducer';
import teamReducer from '../store/team/reducer';
import meReducer from '../store/me/reducer';
import punchInOutReducer from '../store/punchInOut/reducer';
import homeReducer from '../store/home/reducer'
import companyReducer from '../store/company/reducer'

const rootReducer = combineReducers({
    general: generalReducer,
    requests: requestsReducer,
    pendingRequests: pendingRequestsReducer,
    users: usersReducer,
    team: teamReducer,
    me: meReducer,
    punchInOut: punchInOutReducer,
    home: homeReducer,
    company: companyReducer
});
export default rootReducer;