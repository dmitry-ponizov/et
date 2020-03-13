import React, { useEffect, useCallback } from 'react';
import Header from '../../../../../components/Header';
import ExtraInfoCard from './Card/index';
import { ExtraCardList, ExtraInfoStyled } from './styled';
import { IconUserId } from '../../../../../components/UI/SvgIcons/icon-user-id';
import { IconCalendarExtra } from '../../../../../components/UI/SvgIcons/icon-calendar-extra';
import { IconDepartment } from '../../../../../components/UI/SvgIcons/icon-department';
import { IconSectionExtra } from '../../../../../components/UI/SvgIcons/icon-section-extra';
import { IconCareer } from '../../../../../components/UI/SvgIcons/icon-career';
import { connected } from './connect';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import { lengthService, formDataRequestFormat } from '../../../../../utils/index';
import { Props } from './types';
import { GetAccrualBalanceRequest } from '../../../constants';
import AvailableBalanceCard from './AvailableBalanceCard/index';

const UserExtraInfo: React.FunctionComponent<Props & InjectedIntlProps> = ({ 
  user, 
  id, 
  intl, 
  availableBalance, 
  getAvailableBalanceAction, 
  sessionId 
}) => {

  useEffect(() => {
    if ((!Boolean(Object.keys(user).length))) {
      window.history.go(-1)
    }
  }, [user, id])

  const getBalance = useCallback(() => {
    let requestData = GetAccrualBalanceRequest;
    requestData[0]['filter_data']['user_id'] = id;
    const formData = formDataRequestFormat(requestData, sessionId);
     getAvailableBalanceAction(formData)
  }, [id, getAvailableBalanceAction, sessionId])


  useEffect(() => {
    getBalance()
  }, [getBalance])

  const getTranslate = (key: string) => {
    return intl.formatMessage({ id: `global.${key}` })
  }

  return (
    <ExtraInfoStyled>
      <Header isMobile={true} mobileTitle={intl.formatMessage({ id: `global.extra_information` })} />
      <ExtraCardList>
        <ExtraInfoCard icon={<IconUserId />} value={'# ' + user.employee_number} title={getTranslate('user_id')} />
        <ExtraInfoCard icon={<IconCalendarExtra />} value={user.hire_date} title={getTranslate('hire_date')} />
        <ExtraInfoCard icon={<IconDepartment />} value={user.default_department} title={getTranslate('department')} />
        <ExtraInfoCard icon={<IconSectionExtra />} value={user.default_section} title={getTranslate('section')} />
        <ExtraInfoCard icon={<IconCareer />} value={lengthService(user.hire_date, intl.formatMessage({ id: `global.years` }))} title={getTranslate('length_of_service')} />
        <AvailableBalanceCard availableBalance={availableBalance}/>
        {/* <ExtraInfoCard icon={<IconAvailableBalance />} value={availableBalance} title={getTranslate('available_balance')} /> */}
      </ExtraCardList >
    </ExtraInfoStyled>
  );
};

export default injectIntl(connected(UserExtraInfo));
