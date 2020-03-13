import React from 'react';
import TableComponent from '../UI/Table';
import { Props } from './types';
import ErrorComponent from '../UI/Error';
import { MainContentStyled, TableWrapper } from './styled';
import LoaderComponent from '../UI/Loader/index';

const MainContent: React.FC<Props> = ({
  tableHeader,
  tableBody,
  isLoading,
  error,
  paginationHandler,
  pager,
  celled,
  components,
  withoutHeader,
  selected,
  checkAllHandler,
  checked,
  colspan
}) => {
  return (
    <MainContentStyled>
      {error && !isLoading ? <ErrorComponent error={error} /> : ''}
      {!error && !isLoading && tableBody && tableBody.length && tableHeader ? (
        <TableWrapper>
          <TableComponent
            celled={celled}
            tableHeader={tableHeader}
            isLoading={isLoading}
            tableBody={tableBody}
            withoutHeader={withoutHeader}
            selected={selected}
            checkAllHandler={checkAllHandler}
            checked={checked}
            paginationHandler={paginationHandler}
            colspan={colspan}
            pager={pager}
          />
          {components && components}
        </TableWrapper>
      ) : ''}
      {isLoading ? <LoaderComponent /> : ''}
    </MainContentStyled>
  );
}

export default MainContent;
