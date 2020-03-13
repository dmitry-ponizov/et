export type Props = Readonly<IProcessedDateProps>


interface IProcessedDateProps {
    fromDate:  Date;
    toDate: Date;
    showCalendar: () => void;
    lang: string;
}