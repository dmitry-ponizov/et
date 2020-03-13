import { IDepartment } from '../../../../../store/company/types';
export type Props = Readonly<IDepartmentComponent>

interface IDepartmentComponent {
    show: boolean
    itemIndex: number;
    total: number;
    department: IDepartment;
    selectDepartment: (departmentName: string) => void;
    activeDeparment: string;
    lang: string
}