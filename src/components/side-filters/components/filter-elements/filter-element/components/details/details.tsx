import { useState } from 'react';
import { RxInfoCircled } from 'react-icons/rx';
import { InfoModal } from '../../../../../../modal/info-modal/info-modal';
import Modal from '../../../../../../modal/modal';
import { DetailsPropsInterface } from './details-props.interface';
import './details.scss';

export const Details = ({details, title}: DetailsPropsInterface) => {
  const [isOpen, setIsOpen] = useState(false);

  const onDetailsClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  }

  return <div className={'detailsContainer'} >
    <RxInfoCircled onClick={onDetailsClick}/>

    <Modal handleClose={handleClose} isOpen={isOpen}>
      <InfoModal title={title} info={details} handleClose={handleClose}/>
    </Modal>
  </div>
}
