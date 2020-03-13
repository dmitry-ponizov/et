export type Props = Readonly<ITableFooterProps>;

interface ITableFooterProps {
    totalRows: string | null;
    currentPage: string | null;
    paginationHandler: (e: any, data: any) => void;
}
