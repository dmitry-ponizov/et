export type Props = Readonly<PaginationProps>;

interface PaginationProps {
  paginationHandler?: (e: any, data: any) => void;
  pager?: any; 
}