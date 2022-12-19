import { Outlet } from 'react-router';
import { Header } from '../../components/header/header';

export const RootRoute = () => {
  return <div>
    <Header/>
    <Outlet/>
  </div>;
}
