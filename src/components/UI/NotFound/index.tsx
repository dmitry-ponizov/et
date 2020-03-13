import React from 'react';
import { Props } from './types';
import { NotFoundStyled, CodeStyled } from './styled';

const NotFound: React.FC<Props> = () => {
    return (
        <NotFoundStyled>
            <CodeStyled>404</CodeStyled>
            <div> Page Not Found</div>
        </NotFoundStyled>
    );
};

export default NotFound;