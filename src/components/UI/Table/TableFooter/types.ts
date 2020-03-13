export type Props = Readonly<ITableFooterProps>;

interface ITableFooterProps {
    paginationHandler?: (e: any, data: any) => void;
    pager: any;
    colspan: number
}
