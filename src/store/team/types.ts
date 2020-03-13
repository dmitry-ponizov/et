export type TeamSummary = {
    totalMembers: number;
    totalAttendanceToday: number;
    pendingRequests: number;
    absentEmployeesToday: number;
}

export type ListType = {
    [index: string]: string | number
}[]

export interface ITeamState {
    summary: {
        data: TeamSummary | null
        loading: boolean;
        error: string | null
    },
    employeesOnVacation: {
        data: number | null
        loading: boolean;
        error: string | null
    },
    excusedLeavesToday: {
        data: number | null
        loading: boolean;
        error: string | null
    },
    members: {
        data: ListType | null;
        loading: boolean;
        error: string | null
    },
    attendance: {
        data: ListType | null;
        loading: boolean;
        error: string | null
    },
    onVacation: {
        data: ListType | null;
        loading: boolean;
        error: string | null
    },
    exusedLeavesList: {
        data: ListType | null;
        loading: boolean;
        error: string | null
    },
    absentEmployees: {
        data: ListType | null;
        loading: boolean;
        error: string | null
    },
}