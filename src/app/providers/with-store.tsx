import { Provider } from 'react-redux';
import { setupStore } from '../store';

export const withStore = (component: () => React.ReactNode) => () =>
  <Provider store={setupStore()}>{component()}</Provider>;
