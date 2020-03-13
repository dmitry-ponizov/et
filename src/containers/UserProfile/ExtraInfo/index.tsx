import React, { Component } from 'react';
import { ExtraInfoStyled, Title, Row } from './styled';
import InfoBlock from './InfoBlock/index';
import { Props } from './types';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import { lengthService } from '../../../utils/index';
import AvailableBalance from './AvailableBalance/index';

class ExtraInfo extends Component<Props & InjectedIntlProps> {
    render() {
        const { user, availableBalance, intl, isLoading, error } = this.props;
        return (
            <ExtraInfoStyled>
                <Title>{intl.formatMessage({ id: `global.extra_information` })}</Title>
                <div>
                    <Row>
                        <InfoBlock title={intl.formatMessage({ id: `global.user_id` })} value={'# ' + user.employee_number} />
                        <InfoBlock title={intl.formatMessage({ id: `global.hire_date` })} value={user.hire_date} />
                        <InfoBlock title={intl.formatMessage({ id: `global.section` })} value={user.default_section} />
                        <InfoBlock title={intl.formatMessage({ id: `global.department` })} value={user.default_department} />
                    </Row>
                    <Row>
                        <InfoBlock title={intl.formatMessage({ id: `global.length_of_service` })} value={lengthService(user.hire_date, intl.formatMessage({ id: `global.years` }))} />
                        <AvailableBalance title={intl.formatMessage({ id: `global.available_balance` })} isLoading={isLoading} error={error} balances={availableBalance}  />
                    </Row>
                </div>
            </ExtraInfoStyled>
        )
    }
}

export default injectIntl(ExtraInfo);