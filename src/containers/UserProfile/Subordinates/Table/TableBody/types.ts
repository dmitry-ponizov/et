import { ISubordinates } from "../../../../../store/users/types";
export type Props = Readonly<ITableBodyProps>;

interface ITableBodyProps {
    data: any;
    sessionId: string;
}
