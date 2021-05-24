import { FunctionComponent } from 'react';
import { Grid, Divider, Typography } from '@material-ui/core';

import useStyles from './Points.styles';

const Points: FunctionComponent<any> = ({ media, content, actions }) => {

  const classes = useStyles();

  return (
    <Grid container alignContent="center" alignItems="center" justify="center" className={classes.points} >
        <Grid item xs={4}>
            <Typography component="p" variant="h6">1345</Typography>
            <Typography variant="h6" className={classes.name}>Points</Typography>
        </Grid>
        <Divider orientation="vertical" className={classes.divider} />
        <Grid item xs={4}>
            <Typography component="p" variant="h6">543</Typography>
            <Typography variant="h6" className={classes.name}>Kudos</Typography>
        </Grid> 
    </Grid>
  )
}

export default Points;