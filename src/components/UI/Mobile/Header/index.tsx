import  React, { useEffect } from 'react';
import BackButton from '../../BackButton';
import Search from './Search/index';
import { TopSection, Title, Sort, HeaderStyled } from './styled';
import { IconSort } from '../../SvgIcons/icon-sort';
import { Props } from './types';
import { connected } from './connect';
import { formDataRequestFormat } from '../../../../utils/index';

const HeaderMobile: React.FunctionComponent<Props> = ({
  title, 
  sortHandler, 
  findHandler, 
  placeholder, 
  withSearch, 
  onCancel, 
  getCurrentUserAction, 
  currentUser, 
  sessionId,
  stationId,
  getStationIdAction
}) => {
  
  useEffect(() => {
    if(!Boolean(Object.keys(currentUser).length)) {
      const formData = formDataRequestFormat({}, sessionId);
      getCurrentUserAction(formData)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (!stationId) {
      getStationIdAction()
    }
  }, [stationId, getStationIdAction])

  return (
      <HeaderStyled>
          <TopSection>
            <BackButton />
            <Title>{title}</Title>
            <Sort onClick={sortHandler}>
                <IconSort />
            </Sort>
          </TopSection>
        {withSearch && <Search placeholder={placeholder} findHandler={findHandler} onCancel={onCancel} /> }
      </HeaderStyled>
  );
};

export default connected(HeaderMobile);
