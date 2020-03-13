import React from 'react'
import { Tab } from 'semantic-ui-react';
import { Props } from './types';
import { TabsStyled } from './styled';

const Tabs: React.FC<Props> = ({ panes }) => {
  return (
    <TabsStyled>
        <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
    </TabsStyled>
  );
};

export default Tabs;