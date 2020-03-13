import { CommonType } from '../../../../../../constants/common';
export type Props = Readonly<CurrentMonthTypes> ;

interface CurrentMonthTypes {
    currentMonth: number;
    currentYear: number;
    setCurrentMonthAction: (month: number) => void;
    setCurrentYearAction: (year: number) => void;
    lang: string
}

export type CurrentMonthStyled = {
    active: boolean;
    theme: CommonType;
}