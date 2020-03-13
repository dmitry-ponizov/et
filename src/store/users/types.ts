export type CalendarType = {
    [index: string]: {
    inPunch: string | boolean,
    outPunch: string | boolean,
    isVacation: string | boolean
    exceptions: {code: string, description: string}[],
    leavesTime: number | null,
    absenceTime: number | null,
    allPunches: PunchType[]
}}

export type PunchType = {time_stamp: string, status_id: number, status_name: string}


export interface ProcessedDataType{
    leaves_hours: number,
    absence_count: number;
    leaves_count: number;
    absence_hours: number,
    working_hours: number,
    vacation_hours: number,
    vacation_count: number;
    pendingRequests: number,
    working_seconds: number
}

export interface ISubordinates {
    id: string;
    name: string;
    position: string;
    employee_number: string;
    avatar: string;
    full_arabic_name: string
}
    

export interface IUsersState {
    users: {
        data: Array<object>;
        loading: boolean;
        error: string | null
    },
    user: {
        data: any;
        loading: boolean
        error: string | null
    },
    avatar: string;
    attendance: {
        selectedDate: string | null;
        currentYear: number;
        currentMonth: number;
        userId: string
    },
    calendar: {
        data: CalendarType | null;
        loading: boolean
        error: string | null
    },
    availableBalance: {
        data: {[index: string]: string}[] | null;
        loading: boolean
        error: string | null
    },
    processedData: {
        data: ProcessedDataType | null,
        loading: boolean,
        error: string | null
    },
    subordinates: {
        data: ISubordinates[];
        loading: boolean;
        error: string | null,
        pager: {[index: string]: string} | null
    }
}
