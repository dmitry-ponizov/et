import { TeamSummary, ListType } from '../../store/team/types';
export type Props = Readonly<ITeamProps>;

interface ITeamProps {
    path: string;
    getTeamInfoAction: () => void;
    getTeamMembersAction: (url: string) => void;
    summary: TeamSummary | null;
    isLoading: boolean;
    error: string | null;
    membersLoad: boolean;
    membersError: string | null;
    members: ListType | null;
    sessionId: string
    setCurrentPageAction: (currentPage: string) => void;
    changeNewRequestStatus: (status: boolean) => void;
    createRequesStatus: boolean;
    createRequestError: string | null;
    authUserId: string;
    successNewRequestValidation: boolean;
    resetValidateRequest: () => void;
    setNewRequestAction: () => void;
    createRequestLoading: boolean
    employeesOnVacation: number | null
    employeesOnVacationLoading: boolean;
    employeesOnVacationError: string | null;
    exusedLeaves: number | null
    exusedLeavesLoading: boolean;
    exusedLeavesError: string | null;
    getEmployeesOnVacationAction: () => void;
    getExusedLeavesAction: () => void
}