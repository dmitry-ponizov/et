import React from 'react';
import { PaginationStyled } from './styled';
import { Pagination } from 'semantic-ui-react';
import { Props } from './types';

const PaginationComponent: React.FC<Props> = ({
  paginationHandler,
  pager: { last_page_number, current_page }
}) => {
  if(!current_page || !last_page_number || last_page_number === 1) return <></>;
  return (
    <PaginationStyled>
      <Pagination
        boundaryRange={0}
        activePage={current_page}
        ellipsisItem={null}
        firstItem={null}
        lastItem={null}
        siblingRange={2}
        totalPages={last_page_number}
        onPageChange={paginationHandler}
      />
    </PaginationStyled>
  );
};
export default PaginationComponent;
