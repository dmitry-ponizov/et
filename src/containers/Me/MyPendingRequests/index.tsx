import * as React from 'react';
import { MyPendingRequestsContainer, Title } from './styled';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import { Props } from './types';
import TableHeaderText from '../../../components/UI/Table/TableHeader/Text'
import { displayColumns } from '../../Requests/constants';
import TableData from '../../Team/TableData';
import MainContent from '../../../components/MainContent';


const MyPendingRequests: React.FunctionComponent<Props & InjectedIntlProps> = ({ intl, requests, isLoading, error }) => {
  const tableHeader = <TableHeaderText titleKey="requests" columns={displayColumns} />
  let tableBody: React.ReactElement[] | null = null;
  if (requests) {
    tableBody = requests.map((row: any, index: number) => (
      <TableData
        key={index}
        cells={row}
        fields={displayColumns}
      />
    ));
  }

  return (
    <MyPendingRequestsContainer>
      <Title>{intl.formatMessage({ id: `global.my_pending_requests` })}</Title>
      <MainContent
        tableBody={tableBody}
        tableHeader={tableHeader}
        isLoading={isLoading}
        error={error}
        colspan={displayColumns.length}
      />
    </MyPendingRequestsContainer>
  );
};

export default injectIntl(MyPendingRequests);
