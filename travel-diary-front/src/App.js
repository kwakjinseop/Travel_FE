import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Route } from 'react-router-dom';
import LoginPage from './Components/Login/LoginPage';
import MainPage from './Components/MainPage';
import CollectMain from './Components/Collection/CollectMain';
import CollectDetail from './Components/Collection/CollectDetail';
import CollectionMain from './Components/Collection/CollectMain';
import ViewRecord from './Components/Record/ViewRecord';

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
        <Route exact path="/collection" component={CollectionMain} />
        <Route path="/viewrecord" component={ViewRecord} />
      </BrowserRouter>
    </>
  );
}

export default App;
