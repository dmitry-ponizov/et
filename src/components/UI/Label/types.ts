import { CommonType } from '../../../constants/common';
export type Props = Readonly<LabelProps>;

interface LabelProps {
    type: string;
}

export type LabelType = {
    theme: CommonType;
    colors: {color: string, bcg: string};
}

export type ColorsType = { [index: string]: {color: string, bcg: string} };