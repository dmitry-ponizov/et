import React from 'react'
import { BackButtonStyled, Title } from './styled';
import { IconLeftArrowBack } from '../SvgIcons/icon-left-arrow-back';
import { injectIntl, InjectedIntlProps } from 'react-intl';


const BackButton: React.FC<InjectedIntlProps> = ({intl}) => {
    const clickHandler = () => {
        window.history.go(-1)
    }
    return (
        <BackButtonStyled onClick={clickHandler}>
            <IconLeftArrowBack />
            <Title>{intl.formatMessage({ id: `global.back`})}</Title>
        </BackButtonStyled>
    )
}
export default injectIntl(BackButton);