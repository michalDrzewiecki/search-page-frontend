import { BasePropsInterface } from '../../interfaces';

export interface ModalPropsInterface extends BasePropsInterface {
  isOpen: boolean;
  handleClose: () => void;
}
