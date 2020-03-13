import { IDivision, IDepartment } from '../../../store/company/types';
export type Props = Readonly<IHierarchy>

interface IHierarchy {
    setCurrentPageAction: (page: string) => void;
    path: string;
    getDivisionsAction: () => void;
    divisions: IDivision[] | null;
    divisionsIsLoading: boolean;
    divisionsError: string | null;
    getDeptarmentsAction: (params: FormData) => void;
    departments: IDepartment[] | null;
    departmentsIsLoading: boolean;
    departmentsError: string | null;
    sessionId: string;
    lang: string
}