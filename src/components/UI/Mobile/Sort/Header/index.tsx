import * as React from 'react';
import { HeaderStyled, Title, BackBtn, ResetBtn } from './styled';
import { IconLeftArrowBack } from '../../../SvgIcons/icon-left-arrow-back';
import { Props } from './types';

const HeaderMobile: React.FunctionComponent<Props> = ({title, backHandler, actionHandler, actiontitle}) => {
  return (
    <HeaderStyled>
      <BackBtn onClick={backHandler}>
        <IconLeftArrowBack />
      </BackBtn>
      <Title>{title}</Title>
       <ResetBtn onClick={actionHandler && actionHandler}>{actiontitle && actiontitle}</ResetBtn>
    </HeaderStyled>
  );
};

export default HeaderMobile;
