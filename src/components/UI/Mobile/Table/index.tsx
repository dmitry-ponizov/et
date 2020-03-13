import React from 'react';
import { Props } from './types';
import RowMobile from '../Row/index';
import { injectIntl } from 'react-intl';
import { slugifySettings } from '../../../../constants/common';
import { TableMobileStyled } from './styled';
const slugify = require('slugify');

const TableMobile: React.FC<Props> = ({ rowData, fields, intl, tableName }) => {
    return (
        <TableMobileStyled>
            { fields.map((field: string) => (
                <RowMobile 
                    key={field} 
                    title={intl.formatMessage({id: `${tableName}.${slugify(field, slugifySettings)}`})} 
                    value={rowData[field]}  
                    classStyleValue={rowData[field]}
                />
            ))}
        </TableMobileStyled>
    )
}
export default injectIntl(TableMobile);