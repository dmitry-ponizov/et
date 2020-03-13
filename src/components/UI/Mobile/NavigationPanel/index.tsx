import * as React from 'react';
import { NavigationPanelStyled } from './styled';
import { NavigationMenu } from './constants';
import NavigationItem from './NavigationItem/index';
import DynamicIcon from './DynamicIcon/index';
import { Props } from './types'
import { connected } from './connect';

const NavigationPanelMobile: React.FC<Props> = ({currentPage}) => {

  const checkStatus = (route: string): boolean => {
    return currentPage === route ? true : false;
  }
  return(
    <NavigationPanelStyled>
      {NavigationMenu.map((item: {name: string, path: string}) => 
        <NavigationItem key={item.name} {...item} active={checkStatus(item.path)}  icon={<DynamicIcon tag={item.name} active={checkStatus(item.path)} />} /> )}
    </NavigationPanelStyled>
  );
};

export default connected(NavigationPanelMobile);
