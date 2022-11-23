import { FC } from 'react';
import Routing from 'pages';
import { withProviders } from './providers';
import './styles/index.scss';

export const App: FC = () => {
  return (
    <div className="app">
      <Routing />
    </div>
  );
};

export default withProviders(App);
