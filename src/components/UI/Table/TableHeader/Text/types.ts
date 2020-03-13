export type Props = Readonly<TableHeaderTextProps>;

interface TableHeaderTextProps {
    sortHandler?: (fieldName: string) => void;
    sortField?: { name: string, order: string}
    styleClass?: string | undefined;
    columns: string[]
    titleKey: string
}