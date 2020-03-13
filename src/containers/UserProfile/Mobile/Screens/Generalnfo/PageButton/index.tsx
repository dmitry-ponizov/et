import * as React from 'react';
import { PageButtonStyled } from './styled';
import { navigate } from '@reach/router';
import { Props } from './types';

const PageButton: React.FC<Props> = ({ pageName, path, icon }) => {

  const changePage = () => {
    navigate(path)
  }

  return(
    <PageButtonStyled onClick={changePage}>
        <div>{pageName}</div>
        {icon}
    </PageButtonStyled>
  ) ;
};

export default PageButton;
