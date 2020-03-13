import React from 'react'
import { Table } from 'semantic-ui-react';
import { injectIntl, InjectedIntlProps } from 'react-intl';

const TableHeader: React.FC<InjectedIntlProps> = ({ intl }) => {
  return (
      <Table.Header>
          <Table.Row>
              <Table.HeaderCell className="employee">{intl.formatMessage({ id: `global.employee` })}#</Table.HeaderCell>
              <Table.HeaderCell >{intl.formatMessage({ id: `global.full_name` })}</Table.HeaderCell>
              <Table.HeaderCell className="full_arabic_name" >{intl.formatMessage({ id: `global.full_arabic_name` })}</Table.HeaderCell>
              <Table.HeaderCell className="jobTitle">{intl.formatMessage({ id: `global.job_title` })}</Table.HeaderCell>
          </Table.Row>
      </Table.Header>
  )
}
export default injectIntl(TableHeader);