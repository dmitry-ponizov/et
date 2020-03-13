import * as React from 'react';
import { ContactMobileStyled, Header, IconStyled, ValueStyled, DescStyled } from './styled';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import { Props } from './types';

const ContactMobile: React.FC<Props & InjectedIntlProps> = ({icon, value, description, intl}) => {
  return (
      <ContactMobileStyled>
          <Header>
            <IconStyled>{icon}</IconStyled>
            <ValueStyled>{value ? value : intl.formatMessage({ id: `global.not_provided`})}</ValueStyled>
          </Header>
          <DescStyled>{description}</DescStyled>
      </ContactMobileStyled>
  );
};

export default injectIntl(ContactMobile);
