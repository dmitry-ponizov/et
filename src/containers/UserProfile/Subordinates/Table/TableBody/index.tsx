import React from 'react'
import { Table } from 'semantic-ui-react';
import Position  from './Position'
import FullName from './FullName';
import { Props } from './types';
import { ISubordinates } from '../../../../../store/users/types';

const TableBody: React.FC<Props> = ({ data, sessionId }) => {
    return (
        <Table.Body>
            {data.map((subordinate: ISubordinates) => (
                <Table.Row key={subordinate.id}>
                    <Table.Cell className="employeeNumber">{subordinate.employee_number}</Table.Cell>
                    <Table.Cell>
                        <FullName name={subordinate.name} userId={subordinate.id} sessionId={sessionId} />
                    </Table.Cell>
                    <Table.Cell>
                       {subordinate.full_arabic_name}
                    </Table.Cell>
                    <Table.Cell className="jobInfo">
                        <Position id={subordinate.id} title={subordinate.position} />
                    </Table.Cell>
                </Table.Row>
            ))}
        </Table.Body>
    )
}

export default TableBody;