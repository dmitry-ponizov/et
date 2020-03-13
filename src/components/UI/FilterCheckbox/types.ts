import { CommonType } from '../../../constants/common';
export type Props = Readonly<FilterCheckbox>

interface FilterCheckbox {
    title: string;
    checked:  boolean;
    changeHandler: (event: any) => void;
    error: CommonType | null;
    name: string;
    rtl: boolean;
}
