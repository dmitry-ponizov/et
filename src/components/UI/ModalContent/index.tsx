import * as React from 'react';
import { Props } from './types';
import { ModalContentStyled, Icon, Status, Message, Button } from './styled';


const ModalContent: React.FunctionComponent<Props> = ({icon, status, message, accept }) => {
  return (
      <ModalContentStyled>
          <Icon>{icon}</Icon>
          <Status>{status}</Status>
          <Message>{message}</Message>
          <Button onClick={accept} >Ok</Button>
      </ModalContentStyled>
  );
};

export default ModalContent;
