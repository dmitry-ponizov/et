import { CommonType } from '../../../constants/common';
export type Props = Readonly<NewRequestProps>;

interface NewRequestProps {
    cancelHandler: () => void; 
    sessionId: string;
    getRequestTypesAction: (params: FormData) => void;
    getRequestDirectManager: (params: FormData, directType: string) => void;
    getRequestShiftsAction: (params: FormData) => void;
    requestTypes: string[];
    employees: any;
    fetchEmployeesDataAction: (params: FormData) => void;
    userId: string;
    typeRequestsLoading: boolean;
    employeeLoading: boolean;
    setUserIdAction: (id: string) => void;
    directManager: {[index: string]: string},
    directManagerLoading: boolean; 
    shifts: {[index: string]: string}[];
    shiftsLoading: boolean;
    validateRequestAction: (params: FormData) => void;
    validateError: { [index: string]: string[]} | null;
    setNewRequestRequestDataAction: (params: any) => void;
    validateLoading: boolean;
    absencePolicies: {[index: string]: string},
    absencePoliciesLoading: boolean,
    absencePoliciesError: string | null
    hourlyAbsencePolicies: {[index: string]: string},
    hourlyAbsencePoliciesLoading: boolean,
    hourlyAbsencePoliciesError: string | null
    getAbsencePoliciesAction: (params: FormData) => void
    getHourlyAbsencePoliciesAction: (params: FormData) => void
    getUserShiftsForVacationAction: (params: FormData) => void
    getUserSchedulesByRequestTypeAction: (params: FormData) => void
    getAnotherUsersRequestAction: (params: FormData) => void
    userShifts: object[];
    userSchedules: object[];
    userScheduleLoading: boolean;
    anotherUsers: {[index: string]: string};
    anotherUsersLoading: boolean;
    userShiftsLoading: boolean;
    intl: any;
    lang: string;
    sendRequest: () => void;
    path: string
    successNewRequestValidation: boolean;
    isMobile: boolean;
    windowParams: { left: string; top: string; width: string};
    user: {[index: string]: string};
    employeesPager: any;
    authUserId: string;
}

export type State = Readonly<NewRequestState>;

interface NewRequestState {
    formData: {
        type_id: string;
        apply_for_user_id: string;
        user_id: string | boolean;
        shift_id: string;
        shift2_id: string | boolean;
        ticket_id: string | boolean;
        date_stamp1: string | boolean;
        date_stamp2: string | boolean;
        message: string | boolean;
        job_location_id: string;
        absence_policy_id2: string;
        time_stamp1: string,
        time_stamp2: string,
        punch_status_id: string,
        users: string[],
        schedule: string,
        schedule2: string,
        another_employee: boolean,
        fill_in_user_id: string,
    },
    selectedDirectManager: string;
}

export type NewRequestStyledType = { 
    windowParams: {left: string; top: string; width: string},
    theme: CommonType;
}