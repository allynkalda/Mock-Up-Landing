import { FunctionComponent } from 'react';
import { Grid, Divider, Typography } from '@material-ui/core';

import useStyles from './InfoBar.styles';

const InfoBar: FunctionComponent<any> = () => {

  const classes = useStyles();

  return (
    <Grid container alignContent="center" alignItems="center" justify="center" className={classes.points} >
        <Grid item>
            <Typography component="p" variant="h6">632</Typography>
            <Typography variant="h6" className={classes.name}>Followers</Typography>
        </Grid>
        <Divider orientation="vertical" className={classes.divider} />
        <Grid item>
            <Typography component="p" variant="body1">341</Typography>
            <Typography variant="h6" className={classes.name}>Resources</Typography>
        </Grid> 
        <Grid item className={classes.joined}>
            <Typography component="p" variant="body1">2 years ago</Typography>
            <Typography variant="h6" className={classes.name}>Joined</Typography>
        </Grid> 
    </Grid>
  )
}

export default InfoBar;