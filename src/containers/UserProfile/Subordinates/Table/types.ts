import { ISubordinates } from "../../../../store/users/types";
export type Props = Readonly<ITableProps>;

interface ITableProps {
    data: any;
    sessionId: string;
    totalRows: string | null
    currentPage: string | null;
    paginationHandler: (e: any, data: any) => void;
    rtl: boolean;
}
