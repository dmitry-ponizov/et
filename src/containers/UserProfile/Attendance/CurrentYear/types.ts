export type Props = Readonly<CurrentMonthTypes> ;

interface CurrentMonthTypes {
    currentMonth: number;
    currentYear: number;
    setCurrentYearAction: (year: number) => void;
    lang: string
}

