export type Props = Readonly<TableProps>;
import { CommonType } from '../../../constants/common';
import { SyntheticEvent } from 'react';

interface TableProps {
  tableHeader: object | null;
  tableBody: React.ReactElement[] | null
  isLoading?: boolean;
  celled?: boolean;
  withoutHeader?: boolean;
  selected?: boolean;
  type?: string | undefined;
  checkAllHandler?: () => void | undefined;
  checked?: boolean | undefined;
  pager?: CommonType;
  paginationHandler?: (e: SyntheticEvent, data: any) => void;
  colspan: number
}
