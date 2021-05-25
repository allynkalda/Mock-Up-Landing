import { FunctionComponent } from 'react';
import { Grid } from '@material-ui/core';
import { Card, Points, InfoBar, Collections, Profile, Resources } from 'components';

import useStyles from './Landing.styles';

const Landing: FunctionComponent<any> = () => {

  const classes = useStyles();

  return (
    <Grid container className={classes.root} alignContent="center" justify="center">
        <Grid item xs={10} sm={6} className={classes.grid}>
            <Profile />
            <Resources />
        </Grid>
        <Grid item xs={10} sm={4} className={classes.grid}>
            <Card content={<Points />} />
            <Card content={<InfoBar />} />
            <Card content={<Collections />} />
        </Grid>
    </Grid>
  )
}

export default Landing;