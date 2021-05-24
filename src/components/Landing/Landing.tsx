import { FunctionComponent } from 'react';
import { Grid } from '@material-ui/core';
import { Card, Points, InfoBar, Collections, Profile, Resources } from 'components';

import useStyles from './Landing.styles';

const Landing: FunctionComponent<any> = ({ media, content, actions }) => {

  const classes = useStyles();

  return (
    <Grid container className={classes.root} alignContent="center" justify="center" spacing={3}>
        <Grid item xs={6}>
            <Profile />
            <Resources />
        </Grid>
        <Grid item xs={4}>
            <Card content={<Points />} />
            <Card content={<InfoBar />} />
            <Card content={<Collections />} />
        </Grid>
    </Grid>
  )
}

export default Landing;