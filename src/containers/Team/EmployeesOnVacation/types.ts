import { ListType } from '../../../store/team/types';
export type Props = Readonly<IEmployeesOnVacationProps>

interface IEmployeesOnVacationProps {
    onVacation: ListType | null
    isLoading: boolean;
    error: string | null;
    getEmployeesOnVacationListAction: () => void;
    setCurrentPageAction: (path: string) => void;
    sessionId: string;
}
