/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Provider } from 'react-redux';
import NavigationStack from './src/navigation/NavigationStack';
import store from './src/redux';


const App :React.FC = () => {

  return(
    <Provider store={store} >
    <NavigationStack/>
    </Provider>
  )
}

export default App;
