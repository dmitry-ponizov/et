import { CalendarType } from '../../../../../store/users/types';
export type Props = Readonly<WeekProps> ;

interface WeekProps {
    week: any;
    selectDayHandler: (date: string) => void;
    selectedDate: string | null
    currentMonth: number;
    calendarData: CalendarType;
    lang: string;
}
