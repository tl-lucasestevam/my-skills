import React from 'react';
import { StatusBar } from 'react-native';
import { Home } from './src/pages/Home';

const App = (): JSX.Element => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#A370F7" />
      <Home />
    </>
  );
};

export default App;
