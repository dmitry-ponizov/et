export type Props = Readonly<ICalendarFieldProps>


interface ICalendarFieldProps {
    value: string | React.ReactElement | boolean | null;
    icon: React.ReactElement;
    isData: boolean;
}
