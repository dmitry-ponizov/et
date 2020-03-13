import * as React from 'react';
import { InfoBlockStyled, ResetButton, Title } from './styled';
import { Props } from './types';
import moment from 'moment';
import { InjectedIntlProps, injectIntl } from 'react-intl';

const InfoBlock: React.FunctionComponent<Props & InjectedIntlProps> = ({ from, to, handleResetClick, lang, intl}) => {
  return(
    <InfoBlockStyled>
          {!from && !to && <Title>{intl.formatMessage({ id: `global.select_first_date`})}</Title>}
          {from && !to && <Title>{intl.formatMessage({ id: `global.select_last_date`})}</Title>}
          {from &&  to &&
            `${intl.formatMessage({ id: `global.selected_from`})} ${moment(from).locale(lang).format('DD MMM')} ${intl.formatMessage({ id: `global.to`})}
            ${moment(to).locale(lang).format('ll')}`}{' '}
          {from && to && (
            <ResetButton  onClick={handleResetClick}>
              {intl.formatMessage({ id: `sortFields.reset`})} 
            </ResetButton>
          )}
    </InfoBlockStyled>
  );
};

export default injectIntl(InfoBlock);
