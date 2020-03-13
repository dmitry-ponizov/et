export type Props = Readonly<FilterTextarea>

interface FilterTextarea {
    title: string;
    placeholder: string;
    messageHandler: (event: any) => void;
    value: string | boolean;
    validateHandler: () => void;
    rtl: boolean;
}