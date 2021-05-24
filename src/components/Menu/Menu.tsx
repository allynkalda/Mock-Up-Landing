import { FunctionComponent } from 'react';
import { AppBar } from 'components'
import { Typography, IconButton, InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import useStyles from './Menu.styles';

const Menu: FunctionComponent<any> = () => {

  const classes = useStyles();

  return (
      <AppBar>
        <Typography variant="h6" className={classes.title}>
            UWS <span className={classes.titleSpan}>MoodleNet</span>
        </Typography>
        <div className={classes.search}>
            <div className={classes.searchIcon}>
            <SearchIcon />
            </div>
            <InputBase
            placeholder="Search…"
            classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
            />
        </div>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <img src={'/images/add.png'} alt="add" className={classes.add}/>
        </IconButton>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <img src={'/images/avatar.png'} alt="avatar" className={classes.avatar} />
        </IconButton>
      </AppBar>
  )
}

export default Menu;