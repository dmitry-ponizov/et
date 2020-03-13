export type Props = Readonly<RowProps>;

interface RowProps {
    title: string;
    value: string | number | boolean;
    secondValue?: string;
    classStyleValue?: string;
}