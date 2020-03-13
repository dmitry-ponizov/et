import React, { Fragment } from 'react';
import { Table } from 'semantic-ui-react';
import { Props } from './types';
import { TableHeaderStyled, TextStyled, ArrowStyled } from './styled';
import { IconArrowUpSort } from '../../../SvgIcons/icon-arrow-up-sort';
import { IconArrowDownSort } from '../../../SvgIcons/icon-arrow-down-sort';
import { AscSort } from '../../../../../constants/common';
import { InjectedIntlProps, injectIntl } from 'react-intl';

const TableHeaderText: React.FC<Props & InjectedIntlProps> = ({
  sortHandler,
  sortField,
  styleClass,
  columns,
  intl,
  titleKey
}) => {
  return (
    <Fragment>
      {columns.map((item: string) =>
        <Table.HeaderCell key={item} onClick={() => sortHandler && sortHandler(item)} className={styleClass}>
          <TableHeaderStyled>
            {sortField && sortField.name === item ? (
              <ArrowStyled>
                {sortField.order === AscSort ? <IconArrowDownSort /> : <IconArrowUpSort />}
              </ArrowStyled>
            ) : (
                ''
              )}
            <TextStyled>{intl.formatMessage({ id: `${titleKey}.${item}` })}</TextStyled>
          </TableHeaderStyled>
        </Table.HeaderCell>
      )}
    </Fragment>
  );
};
export default injectIntl(TableHeaderText);
