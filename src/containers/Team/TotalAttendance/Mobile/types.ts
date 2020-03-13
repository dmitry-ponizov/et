import { ListType } from '../../../../store/team/types';
export type Props = Readonly<ITotalAttendanceMobileProps>

interface ITotalAttendanceMobileProps {
    totalAttendance: ListType | null;
    isLoading: boolean;
    error: string | null;
    sessionId: string;
}