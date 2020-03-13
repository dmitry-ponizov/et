import { CalendarType } from '../../../../../../../store/users/types';
export type Props = Readonly<DayType> ;

interface DayType {
    day: any;
    selectDayHandler: (date: string) => void;
    selectedDate: string | null;
    currentMonth: number;
    calendarData: CalendarType;
}
