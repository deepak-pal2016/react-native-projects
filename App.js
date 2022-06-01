import React from 'react';
import { Provider } from 'react-redux';
import { store } from './components/redux/store';
import RootNavigator from './components/navigation/RootNavigator';
import FlashMessage from 'react-native-flash-message';
const App = () => {
  return (
    <Provider store={store}>
      <RootNavigator />
      <FlashMessage
        position='bottom' />
    </Provider>
  );
};
export default App;