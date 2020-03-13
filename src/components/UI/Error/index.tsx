import React from 'react'
import { ErrorStyled, ErrorTitle, ButtonContainer } from './styled';
import { Props } from './types';
import { FormattedMessage } from 'react-intl';
import { IconNoResult } from '../SvgIcons/icon-no_result';

const slugify = require('slugify');

const ErrorComponent: React.FC<Props> = ({ error }) => {
    return (
        <ErrorStyled>
            <IconNoResult />
            <ErrorTitle>
             <FormattedMessage id={`errors.${slugify(error.toLowerCase(), '_')}`} />
             <ButtonContainer>
                {/* <SearchButton title="Back to Dashboard" clickHandler={backToDashboard} fillable={true} /> */}
             </ButtonContainer>
            </ErrorTitle>
        </ErrorStyled>
    );
};
export default ErrorComponent;