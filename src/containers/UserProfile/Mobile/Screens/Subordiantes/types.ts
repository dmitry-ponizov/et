import { ISubordinates } from '../../../../../store/users/types';
export type Props = Readonly<IUserSubordinatesMobileProps>


interface IUserSubordinatesMobileProps {
    subordinates: ISubordinates[];
    sessionId: string;
    id: string;
    getSubordinatesAction: (id: string, pageNumber: string, items: number) => void
    totalRows: string | null;
    error: string | null;
    isLoading: boolean;
    user: {[index: string]: string};
}