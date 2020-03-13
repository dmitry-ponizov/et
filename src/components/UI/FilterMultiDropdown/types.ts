import { CommonType } from '../../../constants/common';
export type Props = Readonly<FilterDropDown>

interface FilterDropDown {
    title: string;
    clickHandler: (requestType: string) => void;
    data: any;
    selected?: string | undefined;
    loading: boolean;
    error?: { [index: string]: string[] } | null | undefined;
    name: string;
    selectedIds: string[]
}

export type FilterDropDownStyledType = {
    active: boolean;
    theme: CommonType;
    error: boolean;
}