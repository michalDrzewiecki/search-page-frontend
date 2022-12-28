import { Outlet } from 'react-router';
import { Header } from '../../components/header/header';
import { LanguageDetector } from '../../containers/language-detector/language.detector';

export const RootRoute = () => {
  return <LanguageDetector>
    <Header/>
    <Outlet/>
  </LanguageDetector>
}
