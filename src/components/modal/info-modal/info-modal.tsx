import { IoMdClose } from 'react-icons/io';
import { TranslationComponentNameEnum } from '../../../enum';
import { ModalData } from '../../../interfaces';
import { useSelector } from '../../../store/redux/useSelector';
import { getTranslation } from '../../../utils';
import { InfoModalPropsInterface } from './info-modal-props.interface';
import './info-modal.scss';

export const InfoModal = ({title, info, handleClose}: InfoModalPropsInterface) => {
  const language = useSelector(state => state.languageConfig.language);
  const translations = getTranslation(language, TranslationComponentNameEnum.modal) as ModalData;

  return <div className="infoModalContainer">
    <div className={'titleContainer'}>
      <a className={'title'}>{title}</a>
      <IoMdClose className={'closeIcon'} onClick={handleClose}/>
    </div>
    <div className={'infoContainer'}>
      <a className={'info'}>{info}</a>
    </div>
    <div className={'closeModalContainer'}>
      <div className={'closeModal'} onClick={handleClose}>
        {translations.closeModalText}
      </div>
    </div>
  </div>;
}
