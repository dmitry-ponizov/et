import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import Arrow from './Arrow/index';
import { Props } from './types';
import { DropDownStyled } from './styled';

const DropDownMenu: React.FC<Props> = ({
  options,
  styleClass,
  placeholder,
  defaultValue,
  error,
  changeHandler
}) => {
  return (
    <DropDownStyled>
      <Dropdown
        placeholder={placeholder}
        fluid
        selection
        defaultValue={defaultValue}
        options={options}
        className={styleClass}
        icon={<Arrow />}
        error={error}
        onChange={changeHandler}
      />
    </DropDownStyled>
  );
};

export default DropDownMenu;
