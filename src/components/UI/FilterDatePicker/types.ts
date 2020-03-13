export type Props = Readonly<FilterDatePickerProps>;

interface FilterDatePickerProps{ 
    title: string;
    changeDateHandler: (date: any) => void;
    error?: { [index: string]: string[] } | null | undefined;
    name: string;
    selectedDay: string | boolean;
    lang: string;
    rtl: boolean;
}
