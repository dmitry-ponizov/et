import { ListType } from '../../../../store/team/types';
export type Props = Readonly<IEmployeesOnVacationProps>

interface IEmployeesOnVacationProps {
    exusedLeaves: ListType | null
    isLoading: boolean;
    error: string | null;
    sessionId: string
}
