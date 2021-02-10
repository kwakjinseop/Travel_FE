import React from 'react';
import { createGlobalStyle } from 'styled-components';
import LoginPage from './Components/Login/LoginPage';
import MainPage from './Components/MainPage';
import CollectMain from './Components/Collection/CollectMain';
import { BrowserRouter, Route } from 'react-router-dom';
import GoogleButton from './Components/Login/GoogleButton';
import CollectDetail from './Components/Collection/CollectDetail';

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
        <Route exact path="/collection" component={CollectMain} />
        <Route exact path="/collection/detail" component={CollectDetail} />
      </BrowserRouter>
    </>
  );
}

export default App;
