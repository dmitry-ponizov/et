import React from 'react'
import { ContactStyled, Label, Info } from './styled';
import { Props } from './types';
import { injectIntl } from 'react-intl';

const Contact: React.FC<Props> = ({label, info, type, intl}) => {
    return (
        <ContactStyled >
            <Label >{label}:</Label>
            <Info type={type}>{info ? info : intl.formatMessage({ id: `global.not_provided`})}</Info>
        </ContactStyled>
    )
}

export default injectIntl(Contact);