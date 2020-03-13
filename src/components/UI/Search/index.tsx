import React, { useState} from 'react'
import { SearchStyled, ActionsBlock,  ToggleBtn, Actions, FiltersBlock } from './styled';
import { IconShevronDown } from '../SvgIcons/icon-shevron-down';
import { IconShevronUp } from '../SvgIcons/icon-shevron-up';
import { Props } from './types';

const Search: React.FC<Props> = ({ actions, filters}) => {
    const [active, activeHandler ] = useState(false);
    return (
        <SearchStyled>
            <ActionsBlock active={active}>
                <ToggleBtn active={active} onClick={() => activeHandler(!active)}>
                    {active ? <IconShevronUp />: <IconShevronDown /> } 
                </ToggleBtn>   
                <Actions>{actions}</Actions>         
            </ActionsBlock>
            {/* <Animated animationIn="flipInX" animationOut="flipOutX" animationInDuration={1000} animationOutDuration={2000} isVisible={active}> */}
                {active && <FiltersBlock>{filters}</FiltersBlock> }
            {/* </Animated> */}
        </SearchStyled>
    )
}
export default Search;