import * as React from 'react';
import { Props } from './types';
import { LangBlockStyled, Title } from './styled';
import { IconCheck } from '../../../components/UI/SvgIcons/icon-check';


const LangBlock: React.FunctionComponent<Props> = ({icon, title, selected, langSelect, id}) => {
  return(
      <LangBlockStyled onClick={() => langSelect(id)}>
          {icon}
          <Title>{title}</Title>
          {selected === id && <IconCheck />}
      </LangBlockStyled>
  );
};

export default LangBlock;
