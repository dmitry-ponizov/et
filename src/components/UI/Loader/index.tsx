import React from 'react';
import { Loader } from 'semantic-ui-react';
import { LoaderContainer } from './styled';
import { FormattedMessage } from 'react-intl';
import { Props } from './types';

const LoaderComponent: React.FC<Props> = ({margin}) => 
    <LoaderContainer margin={margin}>
        <Loader active inline='centered' id="loader">
            { <FormattedMessage id="global.loading" />}
        </Loader>
    </LoaderContainer>;
    
export default LoaderComponent;