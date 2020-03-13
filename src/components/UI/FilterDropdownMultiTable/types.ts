export type Props = Readonly<FilterDropDown>

interface FilterDropDown {
    title: string;
    data: any;
    columns: string[];
    intl: any;
    selectHandler: (item: any) => void;
    selectedIds: string[];
    loading: boolean;
    height?: string | undefined;
    width?: string | undefined;
    error?: { [index: string]: string[] } | null | undefined;
    name: string;
    checkAllHandler: () => void;
    theme?: string | undefined;
    left?: string | undefined;
    checkedAll: boolean;
    rtl: boolean;
}