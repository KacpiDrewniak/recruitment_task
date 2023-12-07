import {Layout} from './src/components/Layout/Layout.tsx';
import {Navigation} from './src/navigations';
import {Provider} from 'react-redux';
import {store} from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
