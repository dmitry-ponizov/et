import { ListType } from '../../../../store/team/types';
export type Props = Readonly<IAbsentEmployeesProps>

interface IAbsentEmployeesProps {
    absentEmployees: ListType | null
    isLoading: boolean;
    error: string | null;
    sessionId: string
}
