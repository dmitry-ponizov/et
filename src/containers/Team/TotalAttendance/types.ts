import { ListType } from '../../../store/team/types';
export type Props = Readonly<ITotalAttendanceProps>


interface ITotalAttendanceProps {
    getTotalAttendanceTodayAction: (url: string) => void;
    totalAttendance: ListType | null;
    totalAttendanceLoading: boolean;
    totalAttendanceError: string | null
    setCurrentPageAction: (currentPage: string) => void;
    sessionId: string;
}