import React from 'react';
import { PanelButtonStyled, IconStyled } from './styled';
import { Props } from './types';
import { FormattedMessage } from 'react-intl';

const PanelButton: React.FC<Props> = ({  title, icon, clickHandler, noMargin, active, type}) => {
    return (
        <PanelButtonStyled active={active} type={type} onClick={clickHandler} noMargin={noMargin}>
            <IconStyled >{icon}</IconStyled>
            <div className="title">{<FormattedMessage id={`global.${title.toLowerCase()}`} />}</div>
        </PanelButtonStyled>
    );
};
export default PanelButton;