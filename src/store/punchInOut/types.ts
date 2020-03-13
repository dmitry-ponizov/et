export interface IUserPunch {
    first_name: string;
    punch_date: string;
    punch_time: string;
    type_id: number;
    status_id: number; 
}

export interface IPunchOption {
    [index: number]: string
}

export interface IPunchInOutState {
    userPunch: IUserPunch | null
    loading: boolean;
    error: string | null;
    statuses: {
        data: IPunchOption | null;
        loading: boolean,
        error: string | null;
    },
    types: {
        data: IPunchOption | null;
        loading: boolean,
        error: string | null;
    },
    createPunch: {
        status: boolean;
        loading: boolean;
        error: string | null;
    }
}