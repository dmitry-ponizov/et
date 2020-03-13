export type Props = Readonly<TableProps>;

interface TableProps {
    rowData: any;
    fields: string[];
    intl: any;
    tableName: string;
}