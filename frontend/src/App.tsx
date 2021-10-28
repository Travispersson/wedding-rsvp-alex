import React from 'react';
import GlobalStyle from "./styles/global"
import HomePage from './components/HomePage';
import { useScrollYPosition } from 'react-use-scroll-position';

const App: React.FC = () => {


  const scrollY = useScrollYPosition();
  return (
    <>
      <GlobalStyle />
      <HomePage scrollY={scrollY} />
    </>
  );
}

export default App;
