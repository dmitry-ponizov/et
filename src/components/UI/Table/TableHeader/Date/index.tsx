import React from 'react';
import { Table } from 'semantic-ui-react';
import { Props } from './types';
import moment from 'moment';
import { parseDateFromString } from '../../../../../utils/index';
import 'moment/locale/ar';
import 'moment/locale/en-au';

const TableHeaderDate: React.FC<Props> = ({ date, selectedDate, lang }) => {
  return (
    <Table.HeaderCell textAlign='center' className={`${selectedDate === date ? 'selectedDate' : ''}`} >
       {date ? moment(parseDateFromString(date)).locale(lang).format('ddd, DD MMMM') : ''}
    </Table.HeaderCell>
  );
};

export default TableHeaderDate;
