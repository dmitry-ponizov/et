import { IDepartment } from "../../../../store/company/types";

export type Props = Readonly<IDepartmentsList>

interface IDepartmentsList {
  departments: IDepartment[] | null;
  handleSelectDepartment: (departmentName: string) => void;
  activeDepartment: string;
  lang: string
}