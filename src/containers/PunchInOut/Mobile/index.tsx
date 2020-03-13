import React, {  useEffect } from 'react';
import HeaderMobile from '../../../components/UI/Mobile/Sort/Header/index';
import { connected } from '../connect'
import { Props } from './types';
import { PunchInOutStyled } from './styled'
import PunchInOut from '..';

const PunchInOutMobile: React.FunctionComponent<Props> = ({
  stationId,
  getStationIdAction
}) => {

  useEffect(() => {
    if (!stationId) {
      getStationIdAction()
    }
  }, [stationId, getStationIdAction])

  const backHandler = () => {
    window.history.go(-1)
  }
  return(
      <PunchInOutStyled>
        <HeaderMobile title={'Punch In / Out'} backHandler={backHandler} />
        <PunchInOut punchCancel={() => {}} />
      </PunchInOutStyled>
  ) ;
};

export default connected(PunchInOutMobile);
