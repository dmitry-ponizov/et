import { ListType } from '../../../store/team/types';
export type Props = Readonly<IExusedLeavesProps>

interface IExusedLeavesProps {
    exusedLeaves: ListType | null
    isLoading: boolean;
    error: string | null;
    getExusedLeavesListAction: () => void;
    setCurrentPageAction: (path: string) => void;
    sessionId: string;
}
