export type Props = Readonly<FilterTimePickerProps>;

interface FilterTimePickerProps{ 
    title: string;
    changeTimeHandler: (time: any) => void;
    error?: { [index: string]: string[] } | null | undefined;
    name: string;
    selectedTime: any;
    rtl: boolean;
}
