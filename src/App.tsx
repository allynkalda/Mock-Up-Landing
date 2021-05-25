import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import './App.css';
import { Menu, Follow, Landing } from 'components';
import { main } from 'themes';

function App() {
  
  return (
    <MuiThemeProvider theme={main}>
      <Menu />
      <Follow />
      <Landing />
    </MuiThemeProvider>
  );
}

export default App;
