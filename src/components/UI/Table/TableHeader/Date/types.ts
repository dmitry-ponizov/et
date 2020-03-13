export type Props = Readonly<TableHeaderDateProps>;

interface TableHeaderDateProps {
    date: string;
    selectedDate: string | null;
    lang: string;
}