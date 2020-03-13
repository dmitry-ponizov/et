import React from 'react';
import { SideBarStyled, LogoStyled } from './styled';
import { Props } from './types';
import { menu } from './constants';
import MainCategory from './MainCategory/index';
import { connected } from './connect';
import { withoutSidebar, allPaths } from '../../routes/constants';
import { mobileResulution } from '../../constants/common';
import { useWindowSize } from '../../hooks/index';
import { IconLogo } from '../UI/SvgIcons/icon-logo';


const SideBar: React.FC<Props> = ({ currentPage, setCurrentPageAction }) => {
    const size = useWindowSize();
        const mainCategories = menu.map((mainCategory, index) => 
            <MainCategory 
                key={index} 
                mainCategory={mainCategory}
                activeMenu={currentPage}
                setCurrentPageAction={setCurrentPageAction}
            />);
        if(!allPaths.includes(currentPage) || 
            withoutSidebar.includes(currentPage)) {
            return <></>;
        }
        return (
            <SideBarStyled isMobile={size.width ? size.width <= mobileResulution : false}>
                    <LogoStyled>
                        <IconLogo />
                    </LogoStyled>
                    { mainCategories }
            </SideBarStyled>
        );
    
};

export default connected(SideBar);