export const LoginPath = 'api.php?Class=APIAuthentication&Method=Login';
export const GetGenericData = 'api.php?Class=APIUserGenericData&Method=getUserGenericData&v=2';
export const SetGenericData = 'api.php?Class=APIUserGenericData&Method=setUserGenericData&v=2';
export const GetActualPunchesData = 'api.php?Class=APIActualPunch&Method=getActualPunch&v=2';
export const ExportActualPunchesData = 'api.php?Class=APIActualPunch&Method=exportActualPunch';
// export const GetAccrualBalancesData =  'api.php?Class=APIAccrualBalance&Method=getAccrualBalance&v=2';
export const GetAccrualBalancesData = 'api.php?Class=APIAccrualBalance&Method=getAccrualBalanceSubordinate&v=2'
export const ExportAccrualBalancesData = 
    'api.php?Class=APIAccrualBalance&Method=exportAccrualBalance';
export const ExportReccuringSchedule = 
    'api.php?Class=APIRecurringScheduleControl&Method=exportRecurringScheduleControl';
export const ExportReccuringTemplate = 
    'api.php?Class=APIRecurringScheduleTemplateControl&Method=exportRecurringScheduleTemplateControl';
export const GetReccuringSchedulesData = 
    'api.php?Class=APIRecurringScheduleControl&Method=getRecurringScheduleControl&v=2';
export const GetReccuringTemplatesData = 
    'api.php?Class=APIRecurringScheduleTemplateControl&Method=getRecurringScheduleTemplateControl&v=2';
export const GetTimeSheetData = 
    'api.php?Class=APITimeSheet&Method=getTimeSheetData&v=2';
export const GetExceptionsData =
    'api.php?Class=APIException&Method=getException&v=2';
export const ExportExceptionsData = 
    'api.php?Class=APIException&Method=exportException'
export const GetEmployeesData = 
    'api.php?Class=APIUser&Method=getUser&v=2'
export const GetPDFTimeSheet = 'api.php?Class=APITimesheetDetailReport&Method=getTimesheetDetailReport';
export const GetBranchesTimeSheet = 'api.php?Class=APIBranch&Method=getBranch&v=2';
export const GetDepartmentsTimeSheet = 'api.php?Class=APIDepartment&Method=getDepartment';
export const ExportRequestsData = 'api.php?Class=APIRequest&Method=exportRequest';
export const GetRequestsData = 'api.php?Class=APIRequest&Method=getRequest&v=2'
export const GetRequestsOptionsData  = 'api.php?Class=APIRequest&Method=getOptions&v=2'
export const GetRequestsShiftsData  = 'api.php?Class=APIRecurringScheduleTemplateControl&Method=getRecurringScheduleTemplateControl&v=2'
export const GetReportToUser = 'api.php?Class=APIUser&Method=getReportToUser&v=2'
export const ValidateRequest = 'api.php?Class=APIRequest&Method=validateRequest&v=2'
export const SetNewRequest = 'api.php?Class=APIRequest&Method=setRequest&v=2'
export const CancelRequests = 'api.php?Class=APIRequest&Method=CancelRequest&v=2';
export const RequestAuthHistory = 'api.php?Class=APIAuthorization&Method=getAuthorization&v=2';
export const GetUserShiftsForVacation = 'api.php?Class=APIRequest&Method=getUserShiftsForVacationRequest&v=2';
export const GetUserSchedulesByRequestType = 'api.php?Class=APISchedule&Method=getUserSchedulesByRequestType&v=2'
export const AuthtorizeRequest = 'api.php?Class=APITeam&Method=getPendingRequests&v=2'
export const AuthtorizeDeclineRequest = 'api.php?Class=APIRequest&Method=authorizeRequest&v=2'
export const GetCurrentUserPath = 'api.php?Class=APIAuthentication&Method=getCurrentUser&v=2'
export const GetAccrualBalanceOptions = 'api.php?Class=APIAccrualBalance&Method=getOptions&v=2'
export const GetExceptionsOptions = 'api.php?Class=APIException&Method=getOptions&v=2'
export const GetUserData = 'api.php?Class=APIUser&Method=getUser&v=2'
export const GetTimeSheetForMonth = 'api.php?Class=APIUserAttendance&Method=getSheetForMonth&v=2'
export const GetProcessedData = 'api.php?Class=APIProcessedData&Method=getSummary&v=2'
export const GetUserSubordinates = 'api.php?Class=APIUser&Method=getAllSubordinatesByUserId&v=2'
export const GetTeamSummary = 'api.php?Class=APITeam&Method=getSummary'
export const GetTeamMembers = 'api.php?Class=APITeam&Method=getUsers&v=2'
export const GetTotalAttendance = 'api.php?Class=APITeam&Method=getPresentUsers'
export const GetEmployeesOnVacation = 'api.php?Class=APITeam&Method=getTotalEmployeesOnVacation'
export const GetExusedLeaves = 'api.php?Class=APITeam&Method=getTotalExcusedLeavesToday'
export const GetEmployeesOnVacationList = 'api.php?Class=APITeam&Method=getUsersOnVacation'
// export const GetEmployeesOnVacationList = 'api.php?Class=APITeam&Method=getUsersOnVacation&userId=6f7ce8ab-86e8-9c2b-3832-000000000033'
export const GetExusedLeavesList = 'api.php?Class=APITeam&Method=getExcusedLeavesUsers'
export const GetAbsentEmployeesList = 'api.php?Class=APITeam&Method=getAbsentUsers'
export const ChangeAvatar = 'api.php?Class=APIAvatar&Method=create'
export const EditUserInfo = 'api.php?Class=APIUser&Method=setUser&v=2'
export const UserPunch = 'api.php?Class=APIPunch&Method=getUserPunch&v=2'
export const GetStationID = 'api.php?Class=APIStation&Method=getCurrentStation&v=2'
export const GetPunchOptions = 'api.php?Class=APIPunch&Method=getOptions&v=2'
export const SetUserPunch = 'api.php?Class=APIPunch&Method=setUserPunch&v=2'
export const GetUsersBirthday = 'api.php?Class=APIUser&Method=getUsersBirthdayToday'
export const GetNewMembers = 'api.php?Class=APIUser&Method=getNewUsers'
export const GetPermissions = 'api.php?Class=APIPermission&Method=getPermissions&v=2'
export const GetDivisionsPath = 'api.php?Class=APIDivision&Method=getDivision&v=2'
export const GetDepartmentsPath = 'api.php?Class=APIDepartment&Method=getDepartment&v=2'


