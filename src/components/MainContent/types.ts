import { SyntheticEvent } from 'react';
import { CommonType } from '../../constants/common';
export type Props = Readonly<BasicSearchProps>;

interface BasicSearchProps {
  tableHeader: object | null;
  tableBody: React.ReactElement[] | null
  isLoading?: boolean;
  error?: string | null;
  paginationHandler?: (e: SyntheticEvent, data: any) => void;
  pager?: CommonType;
  celled?: boolean;
  components?:  React.ReactElement[];
  withoutHeader?: boolean;
  selected?: boolean;
  checkAllHandler?: () => void | undefined;
  checked?: boolean | undefined;
  colspan: number
}
