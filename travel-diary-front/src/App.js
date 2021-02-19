import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Route } from 'react-router-dom';
import LoginPage from './Components/Login/LoginPage';
import MainPage from './Components/MainPage';
import CollectMain from './Components/Collection/CollectMain';
import CollectDetail from './Components/Collection/CollectDetail';
import ViewRecord from './Components/Record/ViewRecord';
import SelectArea from './Components/SelectArea';
import RecordPage from './Components/RecordPage/RecordPage';

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
        <Route path="/mainpage" component={MainPage} />
        <Route path="/select" component={SelectArea} />
        <Route path="/collection" component={CollectMain} />
        <Route path="/detail" component={CollectDetail} />
        <Route path="/viewrecord" component={ViewRecord} />
        <Route path="/record" component={RecordPage} />
      </BrowserRouter>
    </>
  );
}

export default App;
