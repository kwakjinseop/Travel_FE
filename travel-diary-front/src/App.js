import React from 'react';
import { createGlobalStyle } from 'styled-components';
import LoginPage from './Components/Login/LoginPage';
import MainPage from './Components/MainPage';
import CollectionMain from './Components/Collection/CollectMain';
import { BrowserRouter, Route } from 'react-router-dom';
import GoogleButton from './Components/Login/GoogleButton';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef
    
  }
`;
function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Route path="/" component={LoginPage} exact />
        <Route exact path="/mainpage" component={MainPage} />
        <Route exact path="/collection" component={CollectionMain} />
      </BrowserRouter>
    </>
  );
}

export default App;
