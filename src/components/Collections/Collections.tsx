import { FunctionComponent } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Chip } from 'components';
import data from '../../data/data.json';

import useStyles from './Collections.styles';

const Collections: FunctionComponent<any> = ({ media, content, actions }) => {

  const classes = useStyles();

  return (
    <Grid container alignContent="center" alignItems="center" >
        <Typography component="p" variant="body1" className={classes.text}>Collections Curated By Jane</Typography>
        {data.collections.map((item: string) => {
            return (
            <Grid item xs={12} className={classes.box}>
                <Chip label={item} type="secondary" />
            </Grid>
            )
        })}
    </Grid>
  )
}

export default Collections;