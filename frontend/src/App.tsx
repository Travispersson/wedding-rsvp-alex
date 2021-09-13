import React from 'react';
import GlobalStyle from "./styles/global"
import HomePage from './components/HomePage';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <HomePage>

      </HomePage>
    </>
  );
}

export default App;
