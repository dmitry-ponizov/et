import React from 'react'
import { Table, Pagination } from 'semantic-ui-react';
import { FooterStyled, Displaying } from './styled'
import { Props } from './types';


const TableFooter: React.FC<Props> = ({ pager, paginationHandler, colspan }) => {
    return (
        <Table.Footer>
            {pager.last_page_number > 1 &&
                <Table.Row>
                    <Table.HeaderCell colSpan={colspan}>
                        <FooterStyled>
                            <Displaying>
                                {/* Displaying {currentPage && parseInt(currentPage) * 10} of {totalRows} total */}
                            </Displaying>
                            <Pagination
                                boundaryRange={0}
                                activePage={pager.current_page || 1}
                                ellipsisItem={null}
                                firstItem={null}
                                lastItem={null}
                                siblingRange={2}
                                totalPages={pager.last_page_number || 0}
                                onPageChange={paginationHandler && paginationHandler}
                                prevItem={{
                                    'aria-label': 'Previous item',
                                    content: '⟨ Previous',
                                }}
                                nextItem={{
                                    'aria-label': 'Next item',
                                    content: 'Next ⟩',
                                }}
                            />
                        </FooterStyled>
                    </Table.HeaderCell>
                </Table.Row>}
        </Table.Footer>
    )
}
export default TableFooter;