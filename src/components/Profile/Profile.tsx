import { FunctionComponent } from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import { Card } from 'components';
import data from '../../data/data.json';

import useStyles from './Profile.styles';

const Profile: FunctionComponent<any> = () => {

  const classes = useStyles();

  const content = (
    <Grid className={classes.grid} container>
        <img src={data.image} alt="profile" className={classes.profile} />
        <div className={classes.name}>
            <Typography component="p" variant="h5" align="left">{data.name}</Typography>
            <img src="images/status.png" alt="status" className={classes.image} />
        </div>
        <Grid item>
            <Typography component="span" variant="caption" className={classes.info} align="left">{data.handle}</Typography>
            <Typography component="span" variant="caption" className={classes.info} align="left">{"•"}</Typography>
            <Typography component="span" variant="caption" className={classes.info} align="left">{data.company}</Typography>
            <Typography component="span" variant="caption" className={classes.info} align="left">{"|"}</Typography>
            <Typography component="span" variant="caption" className={classes.info} align="left">{data.city}</Typography>
            <Typography component="span" variant="caption" className={classes.info} align="left">{"•"}</Typography>
            <Typography component="span" variant="caption" className={classes.info} align="left">{data.website}</Typography>
        </Grid>
        <Typography component="p" variant="body2" className={classes.description} align="left">{data.description}</Typography>
    </Grid>
  );

  const actions = (
      <>
      <Button variant="outlined" className={classes.button}>
          Give Kudos
      </Button>
      <Button variant="outlined" className={classes.button}>
          Connect
      </Button>
      </>
  )

  const media = {
    component: "img",
    src: "images/profile.jpeg",
    height: "160",
    alt: "background",
    title: "Background image"
  };

  return (
    <Card content={content} media={media} actions={actions} />
  )
}

export default Profile;