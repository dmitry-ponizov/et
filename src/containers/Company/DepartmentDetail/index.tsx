import * as React from 'react';
import { Props } from './types';
import Header from '../../../components/Header';
import { ContentBlock } from '../../../styledTheme/globalStyles';
import Breadcrumbs from '../../../components/UI/Breadcrumbs';
import { HierarchyCrumbs } from '../Hierarchy/constants';
import About from './About';
import { Wrap, LeftBlock, RightBlock } from './styled'
import Superior from './Superior';


const DepartmentDetails: React.FunctionComponent<Props> = ({id}) => {
  return(
    <div>
      <Header isMobile={false} />
      <ContentBlock>
        <Breadcrumbs crumbs={HierarchyCrumbs} lastCrumb={id} />
          <Wrap>
            <LeftBlock>
              <About /> 
            </LeftBlock>
            <RightBlock>
              <Superior />
            </RightBlock>
          </Wrap>
      </ContentBlock>
    </div>
  );
};

export default DepartmentDetails;
