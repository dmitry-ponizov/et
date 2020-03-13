import React, { useState } from 'react';
import { Title } from './styled'; 
import { Props } from './types';
import Arrows from '../../SideBar/Arrows/index';
import { FormattedMessage } from 'react-intl';


const ToggleMenu: React.FC<Props> = ({ title, children }) => {
    const [active, activeHandler] = useState(true);
 
    return (
        <div>
            <Title onClick={() => activeHandler(!active)}>
                <div><FormattedMessage id={title} /></div>
                <Arrows active={active} />
            </Title>
            <div >{active && children}</div>
        </div>
    );
};
export default ToggleMenu;