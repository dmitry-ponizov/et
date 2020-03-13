import React from 'react';
import { Router } from '@reach/router';
import { 
  LoginPath, 
  LogoutPath, 
  RequestsPath, 
  UserPath, 
  HomePath, 
  UserExtraInfoPath, 
  UserAttendancePath, 
  UserAttendanceKPIsPath, 
  UserSubordinatesPath, 
  PendingRequestsPath,
  PunchInOutPath,
  DepartmentDetailsPath
} from './constants';
import Login from '../containers/Auth/Login';
import NotFound from '../components/UI/NotFound';
import PrivateRoute from '../hoc/PrivateRoute';
import { connected } from './connect';
import { Props } from './types';
import Logout from '../containers/Auth/Logout';
import Requests from '../containers/Requests';
import RequestAuthorizations from '../containers/PendingRequests/index';
import Home from '../containers/Home/index';
import UserExtraInfo from '../containers/UserProfile/Mobile/Screens/ExtraInfo/index';
import UserAttendance from '../containers/UserProfile/Mobile/Screens/Attendance/index';
import ProcessedDataMobile from '../containers/UserProfile/Mobile/Screens/ProcessedData';
import UserSubordinatesMobile from '../containers/UserProfile/Mobile/Screens/Subordiantes';
import UserRequests from '../containers/UserProfile/Requests/index';
import { UserRequestsPath, UserPendingRequestsPath, NewRequestPath, TeamPath, TeamTotalAttendancePath, TeamUsersPath, EmployeesOnVacationPath, ExcusedLeavesTodayPath, AbsentEmployeesTodayPath, MePath, MyPendingRequestsPath, SettingsPath, HierarchyPath } from './constants';
import User from '../containers/UserProfile';
import NewRequestMobile from '../containers/Requests/NewRequest/Mobile/index';
import Team from '../containers/Team';
import TotalAttendance from '../containers/Team/TotalAttendance/index';
import UsersMobile from '../containers/Team/Mobile/Users/index';
import EmployeesOnVacation from '../containers/Team/EmployeesOnVacation/index';
import ExusedLeaves from '../containers/Team/ExusedLeaves';
import AbsentEmployees from '../containers/Team/AbsentEmployees';
import Me from '../containers/Me/index';
import MyPendingRequests from '../containers/Me/MyPendingRequests/Mobile/index';
import PunchInOutMobile from '../containers/PunchInOut/Mobile/index';
import Settings from '../containers/Settings';
import Hierarchy from '../containers/Company/Hierarchy/index';
import DepartmentDetails from '../containers/Company/DepartmentDetail';


const MainRoutes: React.FC<Props> = ({
  sessionId
}) => {
    const isAuth = Boolean(sessionId);
    return (
      <Router className="routes">
        <PrivateRoute path={HomePath} component={Home} isAuth={ isAuth } />
        <PrivateRoute path={RequestsPath} component={Requests} isAuth={isAuth} />
        <PrivateRoute path={PendingRequestsPath} component={RequestAuthorizations} isAuth={isAuth} />
        <PrivateRoute path={UserPath} component={User} isAuth={isAuth} />
        <PrivateRoute path={UserExtraInfoPath} component={UserExtraInfo} isAuth={isAuth} />
        <PrivateRoute path={UserAttendancePath} component={UserAttendance} isAuth={isAuth} />
        <PrivateRoute path={UserAttendanceKPIsPath} component={ProcessedDataMobile} isAuth={isAuth} />
        <PrivateRoute path={UserSubordinatesPath} component={UserSubordinatesMobile} isAuth={isAuth} />
        <PrivateRoute path={UserRequestsPath} component={UserRequests} isAuth={isAuth} />
        <PrivateRoute path={UserPendingRequestsPath} component={RequestAuthorizations} isAuth={isAuth} />
        <PrivateRoute path={NewRequestPath} component={NewRequestMobile} isAuth={isAuth} />
        <PrivateRoute path={TeamPath} component={Team} isAuth={isAuth} />
        <PrivateRoute path={TeamTotalAttendancePath} component={TotalAttendance} isAuth={isAuth} />
        <PrivateRoute path={TeamUsersPath} component={UsersMobile} isAuth={isAuth} />
        <PrivateRoute path={EmployeesOnVacationPath} component={EmployeesOnVacation} isAuth={isAuth} />
        <PrivateRoute path={ExcusedLeavesTodayPath} component={ExusedLeaves} isAuth={isAuth} />
        <PrivateRoute path={AbsentEmployeesTodayPath} component={AbsentEmployees} isAuth={isAuth} />
        <PrivateRoute path={MePath} component={Me} isAuth={isAuth} />
        <PrivateRoute path={MyPendingRequestsPath} component={MyPendingRequests} isAuth={isAuth} />
        <PrivateRoute path={PunchInOutPath} component={PunchInOutMobile} isAuth={isAuth} />
        <PrivateRoute path={SettingsPath} component={Settings} isAuth={isAuth} />
        <PrivateRoute path={HierarchyPath} component={Hierarchy} isAuth={isAuth} />
        <PrivateRoute path={DepartmentDetailsPath} component={DepartmentDetails} isAuth={isAuth} />
        <Login path={LoginPath} />
        <Logout path={LogoutPath} />
        <NotFound default />
      </Router>
    );
  
}
export default connected(MainRoutes);
