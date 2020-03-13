import React, { memo } from 'react';
import { Table } from 'semantic-ui-react';
import { Props } from './types';
import { validateFieldData } from '../../../utils';
import Label from '../../../components/UI/Label/index';
import PunchInTime from '../../../components/UI/PunchInTime/index';
import DateField from '../EmployeesOnVacation/Date/index';
import LeaveType from '../ExusedLeaves/LeaveType/index';


const TableData: React.FC<Props> = ({ cells, fields, clickRowHandler}) => {
  return (
    <Table.Row className="tableDataRow" onClick={() => clickRowHandler && clickRowHandler(cells.id)}>
      {fields.map((field: string, i: any) => {
        switch (field) {
          case 'status':
              return validateFieldData(<Label type={cells[field].toLowerCase()} />, i)
          case 'time_stamp':
              return validateFieldData(<PunchInTime time={cells[field]} />, i)
          case 'start_date':
              return validateFieldData(<DateField startDate={cells[field]} endDate={cells['end_date']} />, i)
          case 'leave_type':
              return validateFieldData(<LeaveType type={cells['absence_policy_name']} />, i)
          default:
            return validateFieldData(cells[field], i)
        }
      })}
    </Table.Row>
  );
};

export default memo(TableData);