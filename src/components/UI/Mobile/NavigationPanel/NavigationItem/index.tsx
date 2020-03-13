import * as React from 'react';
import { NavigationItemStyled, TitleStyled } from './styled';
import { Props } from './types';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import { navigate } from '@reach/router';

const NavigationItem: React.FunctionComponent<Props & InjectedIntlProps> = ({icon, name, intl, path, active}) => {
  const toPage = () => {
    navigate(path)
  }
  return(
      <NavigationItemStyled onClick={toPage}>
          {icon}
          <TitleStyled active={active}>{intl.formatMessage({ id: `global.${name}`})}</TitleStyled>
      </NavigationItemStyled>
  ) ;
};

export default injectIntl(NavigationItem);
