export type Props = Readonly<FilterDropDown>
import { SyntheticEvent } from 'react';
import { CommonType } from '../../../constants/common';

interface FilterDropDown {
    title: string;
    data: CommonType[];
    columns: string[];
    selected: string;
    selectHandler: (item: CommonType) => void;
    selectedId: string | boolean;
    loading: boolean;
    height?: string | undefined;
    width?: string | undefined;
    error?: { [index: string]: string[] } | null | undefined;
    name: string;
    left?: string | undefined;
    pager?: {[index: string]: string}
    paginationHandler?: (e: SyntheticEvent , data: any) => void;
    rtl: boolean;
}