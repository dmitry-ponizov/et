import { ListType } from '../../../store/team/types';
export type Props = Readonly<IAbsentEmployeesProps>

interface IAbsentEmployeesProps {
    absentEmployees: ListType | null
    isLoading: boolean;
    error: string | null;
    getAbsentEmployeesListAction: () => void;
    setCurrentPageAction: (path: string) => void;
    sessionId: string;
}
