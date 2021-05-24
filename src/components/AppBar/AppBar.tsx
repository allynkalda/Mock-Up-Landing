import { FunctionComponent } from 'react';
import { AppBar as MuiAppBar, Toolbar } from '@material-ui/core';

import useStyles from './AppBar.styles';

const AppBar: FunctionComponent<any> = ({ children }) => {

  const classes = useStyles();

  return (
      <MuiAppBar position="static" className={classes.root}>
        <Toolbar>
            {children}
        </Toolbar>
      </MuiAppBar>
  )
}

export default AppBar;