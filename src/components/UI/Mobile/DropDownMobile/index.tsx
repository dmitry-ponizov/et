import React, { useState } from 'react'
import { MobileMenuStyled, DropDownMobileStyled, MobileMenu } from './styled';
import { Props } from './types';
import { IconMoreOptions } from '../../SvgIcons/icon-more-options';

const DropDownMobile:React.FC<Props> = ({icons}) => {
    const [active, activeHandler] = useState(false);
    return (
        <DropDownMobileStyled>
            <MobileMenuStyled onClick={() => activeHandler(!active)}>
                <span><IconMoreOptions /></span>
            </MobileMenuStyled>
            {active && <MobileMenu onClick={() => activeHandler(!active)}>
                {icons}
            </MobileMenu> }
        </DropDownMobileStyled>
    )
}
export default DropDownMobile;