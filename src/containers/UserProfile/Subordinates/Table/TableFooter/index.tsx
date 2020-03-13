import React from 'react'
import { Table, Pagination } from 'semantic-ui-react';
import { FooterStyled, Displaying } from './styled'
import { Props } from './types';
import { InjectedIntlProps, injectIntl } from 'react-intl';



const TableFooter: React.FC<Props & InjectedIntlProps> = ({ totalRows, currentPage, paginationHandler, intl}) => {
  return (
      <Table.Footer>
          <Table.Row>
              <Table.HeaderCell colSpan='4'>
                  <FooterStyled>
                      <Displaying>
                          {/* Displaying {currentPage && parseInt(currentPage) * 10} of {totalRows} total */}
                          </Displaying>
                      <Pagination
                          boundaryRange={0}
                          activePage={currentPage || 1}
                          ellipsisItem={null}
                          firstItem={null}
                          lastItem={null}
                          siblingRange={2}
                          totalPages={totalRows ? Math.ceil(parseInt(totalRows) / 10) : 0}
                          onPageChange={paginationHandler}
                          prevItem={{
                              'aria-label': 'Previous item',
                              content: `⟨ ${intl.formatMessage({ id: `global.previous`})}`,
                          }}
                          nextItem={{
                              'aria-label': 'Next item',
                              content: `${intl.formatMessage({ id: `global.next`})} ⟩`,
                          }}
                      />
                  </FooterStyled>
              </Table.HeaderCell>
          </Table.Row>
      </Table.Footer>
  )
}
export default injectIntl(TableFooter);