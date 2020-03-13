import React, { Component } from 'react'
import { SubordinatesStyled, Header, Title } from './styled';
import EmployeesTable from './Table';
import { Props } from './types';
import LoaderComponent from '../../../components/UI/Loader';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import ErrorComponent from '../../../components/UI/Error/index';

class Subordinates extends Component<Props & InjectedIntlProps> {
  render() {
    const { subordinates, loading, intl, error, sessionId, totalRows, currentPage, paginationHandler, rtl } = this.props;
    return (
      <SubordinatesStyled>
        <Header>
          <Title>{intl.formatMessage({ id: `global.subordinates` })} ({totalRows})</Title>
        </Header>
        {Boolean(subordinates.length) && 
          <EmployeesTable 
            totalRows={totalRows} 
            sessionId={sessionId} 
            data={subordinates} 
            currentPage={currentPage} 
            paginationHandler={paginationHandler}
            rtl={rtl}
            />}
        {loading ? <LoaderComponent margin="150px"  /> : ''}
        {error && !loading && !Boolean(subordinates.length) ? <ErrorComponent error={error} /> : ''}
      </SubordinatesStyled>
    )
  }
}
export default injectIntl(Subordinates);