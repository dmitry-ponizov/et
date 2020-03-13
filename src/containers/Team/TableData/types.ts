export type Props = Readonly<TableBodyRowProps>;

interface TableBodyRowProps {
    cells: any;
    fields: any;
    clickRowHandler?: (data: string) => void;
}