import { CalendarType } from '../../../store/users/types';
export type Props = Readonly<AttendanceProps> ;

interface AttendanceProps {
    currentMonth: number;
    currentYear: number;
    weeks: any;
    setCurrentMonthAction: (month: number) => void;
    setCurrentYearAction: (year: number) => void;
    selectDateAction: (day: string) => void;
    resetCalendarDataAction: () => void;
    getTimeSheetForMonthAction: (id: string) => void;
    sessionId: string;
    selectedDate: string | null;
    calendarData: CalendarType;
    userId: string;
    loadingCalendarData: boolean;
    selectedDayInfo: any;
    codes: string[] | null;
    vacations: string[];
    lang: string;
    userIdAttendance: string;
}

