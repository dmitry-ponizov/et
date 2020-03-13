import * as React from 'react';
import { Props } from './types'
import { Container, TotalInfo, SearchContainer, Row, Value } from './styled';
import Search from '../../../../components/UI/Mobile/Header/Search/index';
import { injectIntl, InjectedIntlProps } from 'react-intl';

const HierarchySearch: React.FunctionComponent<Props & InjectedIntlProps> = ({
  divisionName, 
  findHandler, 
  cancelSearch, 
  departmentName,
  intl
}) => {
  return(
      <Container>
          <TotalInfo>
            <Row>{intl.formatMessage({ id: `company.division`})}: <Value>{divisionName}</Value></Row>
            <Row>{intl.formatMessage({ id: `company.department`})}: <Value>{departmentName}</Value></Row>
            {/* <Row>// Section: <Value></Value></Row>
            <Row>/// Unit: <Value></Value></Row> */}
          </TotalInfo>
          <SearchContainer>
                <Search  placeholder={intl.formatMessage({ id: `company.search`})} findHandler={findHandler} onCancel={cancelSearch} />
          </SearchContainer>
      </Container>
  );
};

export default injectIntl(HierarchySearch);
