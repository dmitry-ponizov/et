export type Props = Readonly<IYearSelectProps>

interface IYearSelectProps {
    currentMonth: number;
    currentYear: number;
    setCurrentYearAction: (year: number) => void;
    lang: string
}