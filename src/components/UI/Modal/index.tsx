import React from 'react';
import { ModalStyled } from './styled';
import { Props } from './types';
import Backdrop from '../BackDrop/index';

class Modal extends React.Component<Props> {
  shouldComponentUpdate(nextProps: any, nextState: any){
      return nextProps.show !== this.props.show || nextProps.children !== this.props.children
  }

  render() {
    const { show, modalClosed, children } = this.props;
    return (
      <>
        <Backdrop show={show} clicked={modalClosed} transparent={false} />
        <ModalStyled show={show}>
          {children}
        </ModalStyled>
      </>
    )
  }
}

export default Modal; 