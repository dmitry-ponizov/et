import React from 'react';
import { ShowMoreStyled, Title } from './styled';
import { Icon } from 'semantic-ui-react';
import { Props } from './types';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import { IconArrowDownSort } from '../SvgIcons/icon-arrow-down-sort';

const ShowMore: React.FunctionComponent<Props & InjectedIntlProps> = ({clickHandler, intl}) => {
  return(
    <ShowMoreStyled onClick={clickHandler}>
        <Title>{intl.formatMessage({ id: `global.show_more`})}</Title>
        <Icon><IconArrowDownSort /></Icon>
    </ShowMoreStyled>) ;
};

export default injectIntl(ShowMore);
