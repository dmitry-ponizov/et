import { SyntheticEvent } from "react";
import { CommonType } from '../../../constants/common';

export type Props = Readonly<DropDownProps>;

interface DropDownProps {
  options: Array<any>;
  styleClass: string;
  placeholder?: string;
  defaultValue?: string;
  error?: boolean;
  changeHandler?: (e: SyntheticEvent, data: CommonType) => void;
}
