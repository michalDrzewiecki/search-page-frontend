import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeLanguage } from '../../store/redux/actions/language';
import { mapLanguage } from '../../utils';
import { LanguageDetectorPropsInterface } from './language-detector-props.interface';

export const LanguageDetector = ({children}: LanguageDetectorPropsInterface) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const language = mapLanguage(navigator.language);
    dispatch(changeLanguage({language}))
  }, [])

  return <>{children}</>;
}
