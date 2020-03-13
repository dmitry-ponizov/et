import { CommonType } from '../../../../constants/common';
export type Props = Readonly<DropDownRow>

interface DropDownRow {
    title: string;
    changeHandler: (id: string) => void;
    id: string;
    checked: boolean;
}

export type DropDownRowStyledType = {
    selected: boolean;
    theme: CommonType;
}