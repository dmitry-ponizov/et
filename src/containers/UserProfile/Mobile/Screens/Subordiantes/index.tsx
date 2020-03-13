import React, { useEffect } from 'react';
import { SubordiantesStyled, SubordinatesList, SubordinatesDisplaing } from './styled';
import Header from '../../../../../components/Header';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import { Props } from './types';
import { ISubordinates } from '../../../../../store/users/types';
import User from '../../../../../components/UI/Mobile/User/index';
import { connected } from './connect';
import ErrorComponent from '../../../../../components/UI/Error/index';
import LoaderComponent from '../../../../../components/UI/Loader/index';
import { navigate } from '@reach/router';
import { mobileResulution } from '../../../../../constants/common';

const UserSubordinatesMobile: React.FunctionComponent<Props & InjectedIntlProps> = ({ 
  intl, 
  subordinates, 
  sessionId, 
  id, 
  getSubordinatesAction, 
  totalRows,
  error,
  isLoading
}) => {

  useEffect(() => {
    if(window.innerWidth >= mobileResulution) {
      navigate(`/user/${id}`)
    }
    getSubordinatesAction(id, '1', -1)
  },[id, getSubordinatesAction])
  
  return(
      <SubordiantesStyled>
        <Header isMobile={true} mobileTitle={intl.formatMessage({ id: `global.subordinates` })}  />
        {!error && !isLoading && 
          <SubordinatesDisplaing>
              {totalRows} {intl.formatMessage({ id: `global.users_in_total`})}
          </SubordinatesDisplaing>}
        <SubordinatesList>
          {Boolean(subordinates.length) && subordinates.map((subordinate: ISubordinates) => (
              <User  key={subordinate.id} user={subordinate} sessionId={sessionId} />))}
        </SubordinatesList>
        {isLoading ? <LoaderComponent margin="150px" /> : ''}
        {error && !isLoading &&!Boolean(subordinates.length) ? <ErrorComponent error={error} /> : ''}
      </SubordiantesStyled>
  ) ;
};


export default injectIntl(connected(UserSubordinatesMobile));
