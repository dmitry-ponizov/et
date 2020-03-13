export type Props = Readonly<TableBodyRowProps>;

interface TableBodyRowProps {
    cells: any;
    fields: any;
    onChangeHandler: (id: string) => void;
    checked: boolean;
}