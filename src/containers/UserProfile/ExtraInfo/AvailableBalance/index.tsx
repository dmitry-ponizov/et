import React, { Fragment } from 'react';
import { Props } from './types';
import { InfoBlockStyled, Title, Value, VerticalLine, BalancesStyled, BalanceStyled, BalanceBlock, LoaderStyled } from './styled';
import ReactTooltip from 'react-tooltip'
import { secondsToHoursConverter, secondsToDaysConverter, secondsToMinutesConverter } from '../../../../utils/index';
import DynamicIcon from './DynamicIcon/index';
import { Loader } from 'semantic-ui-react';
import { InjectedIntlProps, injectIntl } from 'react-intl';
const slugify = require('slugify');


const AvailableBalance: React.FunctionComponent<Props & InjectedIntlProps> = ({ title, balances, isLoading, error, intl }) => {
    const getTranslate = (key: string) => {
        return intl.formatMessage({ id: `global.${key}`})
    }
    const checkDateFormat = (balance: string, type: string) => {
        if (type === 'hourly_leave' || type === 'hourly_leave_2nd_shift') {
            return secondsToHoursConverter(balance, getTranslate('hour'), getTranslate('hours')) 
        } else if (type === 'annual_leave' || type === 'annual_leave_2nd_shift') {
            return secondsToDaysConverter(balance, getTranslate('day'), getTranslate('days'))
        } else if (type === 'flexible_leave_first_shift' || type === 'flexible_leave_second_shift') {
            return secondsToMinutesConverter(balance, getTranslate('minute'), getTranslate('minutes'))
        }
    }

    const getBalanceSlug = (type: string) => {
        return slugify(type.toLowerCase(), '_');
    }

    const availableBalances = balances && balances.map(({ accrual_policy_account, balance }) =>
        <Fragment key={accrual_policy_account}>
            {getBalanceSlug(accrual_policy_account) !== 'sick_leave' && getBalanceSlug(accrual_policy_account) !== 'sick_leave_2nd_shift' && <>
                <BalanceStyled  >
                    <BalanceBlock>
                        <DynamicIcon tag={getBalanceSlug(accrual_policy_account)} />
                        <Value data-for={accrual_policy_account} data-tip=''>{checkDateFormat(balance, getBalanceSlug(accrual_policy_account))}</Value>
                        <ReactTooltip id={accrual_policy_account} place="bottom" type='info' className="toolTip" effect='solid'>
                            {accrual_policy_account}
                        </ReactTooltip>
                    </BalanceBlock>
                </BalanceStyled>
                <VerticalLine />
            </>}
        </Fragment>
    )

    return (
        <InfoBlockStyled>
            <Title>{title}</Title>
            <BalancesStyled >
                {availableBalances}
            </BalancesStyled>
            {isLoading &&
                <LoaderStyled>
                    <Loader active inline size='mini' />
                </LoaderStyled>}
            {error && !isLoading && !Boolean(balances) ? <Value>{error}</Value> : ''}
        </InfoBlockStyled>
    );
};

export default injectIntl(AvailableBalance);
