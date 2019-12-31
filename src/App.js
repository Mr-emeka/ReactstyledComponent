import React,{Fragment} from 'react';
import styled from 'styled-components';
// import {Button} from './components/Button/Button';
import {Header} from './components/Header/Header';
import GlobalStyle from './components/globalStyle.js';
import {Profile} from './components/Profile/Profile';
const AppWrapper = styled.div`
background-color:#fafafa;
`;
function App() {
  return (
 <Fragment> 
    <GlobalStyle />
    <AppWrapper>
    <Header />
    <Profile />
    </AppWrapper>
 </Fragment>
  );
}

export default App;
