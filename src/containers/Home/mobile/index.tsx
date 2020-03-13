import * as React from 'react';
import HeaderWithLogo from '../../../components/UI/Mobile/HeaderWithLogo';
import NavigationPanelMobile from '../../../components/UI/Mobile/NavigationPanel/index';
import { useOffline } from '../../../hooks/index';

interface IHomeMobileProps {
}

const HomeMobile: React.FunctionComponent<IHomeMobileProps> = (props) => {

   const offline = useOffline()
  return(
      <div style={{minHeight: '100%', display: 'flex', flexDirection: 'column'}}>
         <HeaderWithLogo title={'Home'} bcg="#08A5F0" />
            <div style={{flex: '1'}}>
   
            {offline ? 'Offline':  'Online'}
            </div>
         <NavigationPanelMobile />
      </div>
  );
};

export default HomeMobile;
