export type Props = Readonly<FieldProps>;

interface FieldProps {
    icon: object;
    title: string;
    value: string | object | boolean;
    type?: string;
    rowDirection?: boolean;
}

