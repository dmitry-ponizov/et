import { CalendarType } from '../../../../../store/users/types';
export type Props = Readonly<IUserAttandanceProps>


interface IUserAttandanceProps {
    lang: string;
    currentMonth: number;
    user: {[index: string]: string};
    setCurrentMonthAction: (month: number) => void;
    getTimeSheetForMonthAction: (userId: string) => void;
    id: string;
    selectedDate: string | null;
    weeks: any;
    calendarData: CalendarType;
    loadingCalendarData: boolean;
    selectDateAction: (date: string) => void;
    selectedDayInfo: any;
    vacations: string[];
    codes: string[] | null;
    userIdAttendance: string;
    changeUserIdAttendanceAction: (id: string) => void;
    currentYear: number;
    setCurrentYearAction: (year: number) => void;
}