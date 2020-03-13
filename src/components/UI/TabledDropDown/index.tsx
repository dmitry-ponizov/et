import React from 'react';
import { Props } from './types';
import { DropDownStyled, DropDownTitle, SelectedUser } from './styled';
import { FormattedMessage } from 'react-intl';
import Arrow from '../DropDown/Arrow/index';
import { Loader } from 'semantic-ui-react'


const TabledDropDownMenu: React.FC<Props> = ({
  changeHandler,
  selectedUser
}) => {
  return (
    <DropDownStyled onClick={changeHandler}>
      <DropDownTitle >
        <FormattedMessage id='timesheet.employee' /> :
      </DropDownTitle>
      <SelectedUser>{selectedUser ? selectedUser : <Loader active inline size='mini' />}</SelectedUser>
      <Arrow />
    </DropDownStyled>
  );
};

export default TabledDropDownMenu;
