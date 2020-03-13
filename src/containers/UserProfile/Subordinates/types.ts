import { ISubordinates } from "../../../store/users/types";

export type Props = Readonly<ISubordinatesProps>;

interface ISubordinatesProps {
    userId: string;
    subordinates: ISubordinates[];
    loading: boolean;
    error: string | null;
    sessionId: string;
    totalRows: string | null;
    currentPage: string | null
    paginationHandler: (e: any, data: any) => void;
    rtl: boolean;
}
