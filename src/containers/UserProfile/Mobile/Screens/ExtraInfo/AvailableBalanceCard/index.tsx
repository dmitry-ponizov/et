import * as React from 'react';
import { Props } from './types';
import { ContainerStyled, IconsContainer, RightBlock, TitleStyled, ValueStyled, BalancesStyled, LeftBlock, RightBalancesBlock } from './styled';
import { VerticalLineStyled } from '../Card/styled';
import { IconAnnualLeaveMobile } from '../../../../../../components/UI/SvgIcons/AvailableBalance/Mobile/icon-annual-leave-mobile';
import { IconHourlyLeaveMobile } from '../../../../../../components/UI/SvgIcons/AvailableBalance/Mobile/icon-hourly-leave-mobile';
import { IconFlexibleLeaveMobile } from '../../../../../../components/UI/SvgIcons/AvailableBalance/Mobile/icon-flexible-leave-mobile';
import { secondsToHoursConverter, secondsToDaysConverter, secondsToMinutesConverter } from '../../../../../../utils/index';
import { InjectedIntlProps, injectIntl } from 'react-intl';

const AvailableBalanceCard: React.FunctionComponent<Props & InjectedIntlProps> = ({ availableBalance, intl }) => {
  const getTranslate = (key: string) => {
    return intl.formatMessage({ id: `global.${key}` })
  }
  const checkDateFormat = (balance: string, type: string) => {
    if (type === 'Hourly Leave' || type === 'Hourly Leave 2nd shift') {
      return secondsToHoursConverter(balance, getTranslate('hour'), getTranslate('hours'))
    } else if (type === 'Annual Leave' || type === 'Annual Leave 2nd shift') {
      return secondsToDaysConverter(balance, getTranslate('day'), getTranslate('days'))
    } else if (type === 'Flexible Leave - First Shift' || type === 'Flexible Leave - Second Shift') {
      return secondsToMinutesConverter(balance, getTranslate('minute'), getTranslate('minutes'))
    }
  }

  const getBalance = (type: string) => {
    const balance = availableBalance && availableBalance.find((balance: any) => balance.accrual_policy_account === type)
    return balance && checkDateFormat(balance.balance, type)
  }
  return (
    <ContainerStyled>
      <IconsContainer>
        <IconHourlyLeaveMobile />
        <IconAnnualLeaveMobile />
        <IconFlexibleLeaveMobile />
      </IconsContainer>
      <VerticalLineStyled />
      <RightBlock>
        <TitleStyled>
          <p>{getTranslate('available_balance')}</p>
          {getTranslate('available_balance_types')}
            </TitleStyled>
        <BalancesStyled>
          <LeftBlock>
            <ValueStyled><span>H</span>{getBalance('Hourly Leave')}</ValueStyled>
            <ValueStyled><span>A</span>{getBalance('Annual Leave')}</ValueStyled>
            <ValueStyled><span>F</span>{getBalance('Flexible Leave - First Shift')}</ValueStyled>
          </LeftBlock>
          <VerticalLineStyled />
          <RightBalancesBlock>
            <ValueStyled>{getBalance('Hourly Leave 2nd shift')}</ValueStyled>
            <ValueStyled>{getBalance('Annual Leave 2nd shift')}</ValueStyled>
            <ValueStyled>{getBalance('Flexible Leave - Second Shift')}</ValueStyled>
          </RightBalancesBlock>
        </BalancesStyled>
      </RightBlock>
    </ContainerStyled>
  );
};

export default injectIntl(AvailableBalanceCard);
