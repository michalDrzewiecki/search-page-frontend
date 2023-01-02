import { useEffect } from 'react';
import useKeyPressedHook from '../../hooks/use-key-pressed.hook';
import Portal from '../portal/portal';
import { ModalPropsInterface } from './modal-props.interface';
import './modal.scss';

function Modal({children, isOpen, handleClose}: ModalPropsInterface) {
  const escapePressed = useKeyPressedHook('Escape');

  useEffect(() => {
    handleClose();
  }, [escapePressed]);

  return isOpen ?
    <Portal wrapperId="reactPortalModalContainer">
      <div className="modal">
        {children}
      </div>
    </Portal> :
    null;
}
export default Modal;
