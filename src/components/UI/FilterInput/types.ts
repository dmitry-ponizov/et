export type Props = Readonly<FilterInput>

interface FilterInput {
    title: string;
    value: string | boolean;
    changeHandler: (event: any) => void;
    error: any;
    name: string;
    rtl: boolean;
}
