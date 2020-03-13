export type Props = Readonly<EmployeesProps>;

interface EmployeesProps {
    item: any;
    fields: string[];
    selectHandler: (employee: any) => void;
    selectedId: string | boolean;
}
