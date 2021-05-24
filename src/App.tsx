import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import './App.css';
import { Menu, Follow, Landing } from 'components';
import { main } from 'themes';

function App() {
  
  return (
    <MuiThemeProvider theme={main}>
      <div className="App">
        <Menu />
        <Follow />
        <Landing />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
