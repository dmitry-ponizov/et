import React from 'react';
import { PanelStyled } from './styled';
import { Props } from './types';

const Panel: React.FC<Props> = ({ icons }) => {
    return (
        <PanelStyled>
            { icons }
        </PanelStyled>
    );
};

export default Panel;