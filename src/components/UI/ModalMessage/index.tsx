import * as React from 'react';
import { IconSuccess } from '../SvgIcons/icon-success';
import { IconError } from '../SvgIcons/icon-error';
import Modal from '../Modal/index';
import ModalContent from '../ModalContent/index';
import { FormattedMessage } from 'react-intl';
import { Props } from './types';


const ModalMessage: React.FunctionComponent<Props> = ({ success, error, acceptHandler, successMessage, errorMessage }) => {
  let modalProps: { [index: string]: any } = {}
  if (success) {
    modalProps.icon = <IconSuccess />
    modalProps.status = <FormattedMessage id={`global.success`} />
    modalProps.message = successMessage
  } else if (Boolean(error)) {
    modalProps.icon = <IconError />
    modalProps.status = <FormattedMessage id={`global.process_failed`} />
    modalProps.message = errorMessage
  }
  return (
    <Modal show={success || Boolean(error)} modalClosed={() => { }} >
      <ModalContent accept={acceptHandler} icon={modalProps.icon} status={modalProps.status} message={modalProps.message} />
    </Modal>
  );
};

export default ModalMessage;
