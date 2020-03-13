import { CommonType } from '../../../constants/common';
export type Props = Readonly<FilterDropDown>

interface FilterDropDown {
    title: string;
    clickHandler: (requestType: string) => void;
    data: any;
    columns?: string[] | undefined;
    selected?: string | number | undefined;
    loading: boolean;
    error?: { [index: string]: string[] } | null | undefined;
    name: string;
    rtl: boolean;
}

export type FilterDropDownStyledType = {
    active: boolean;
    theme: CommonType;
    error: boolean;
}