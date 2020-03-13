import { CalendarType } from '../../../../../../store/users/types';
export type Props = Readonly<CalendarTypes> ;

interface CalendarTypes {
    weeks: any;
    selectDayHandler: (date: string) => void;
    selectedDate: string | null
    currentMonth: number;
    calendarData: CalendarType;
}
