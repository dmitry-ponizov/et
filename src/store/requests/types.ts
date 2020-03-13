export type RequestsType = {
    employee_number: string;
    full_name: string;
    type: string;
    status: string;
    date_stamp1: string;
    duration: string;
    absence_policy: string;
    shift: string;
    shift2: string;
    fill_in_user: string;
    message: string;
    current_authorization_user: string;
    approvals_display: string;
    created_date: string;
}


export interface IRequestsState {
    data: Array<object>;
    loading: boolean;
    error: string | null;
    requestData: any;
    genericData: any;
    pager: any;
    refreshLoading: boolean;
    requestTypes: any;
    directManager: any;
    shifts: any;
    validateRequest: {
        loading: boolean,
        success: boolean,
        error: { [index: string]: string[]} | null
    },
    formData: any,
    setNewRequest: {
        loading: boolean,
        success: boolean,
        error: string | null
    },
    cancelRequest: {
        loading: boolean,
        success: boolean,
        error: string | null
    },
    statuses: {
        data:  {[index: string]: string},
        loading: boolean,
        error: string | null
    },
    request: {
        data: { [index: string]: string },
        loading: boolean,
        error: string | null
    },
    authHistory: {
        data: Array<any>;
        error: string | null
        loading: boolean
    },
    absencePolicies: {
        data: { [index: string]: string },
        loading: boolean,
        error: string | null
    },
    userShifts: {
        data: any
        loading: boolean,
        error: string | null
    },
    hourlyAbsencePolicies: {
        data: { [index: string]: string },
        loading: boolean,
        error: string | null
    },
    userSchedules: {
        data: any
        loading: boolean,
        error: string | null
    },
    anotherUsers: {
        data: { [index: string]: string },
        loading: boolean,
        error: string | null
    }
    
}