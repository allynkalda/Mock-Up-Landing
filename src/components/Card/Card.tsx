import { FunctionComponent } from 'react';
import { Card as MuiCard, CardMedia, CardContent, CardActions } from '@material-ui/core';
import clsx from 'clsx';

import useStyles from './Card.styles';

const Card: FunctionComponent<any> = ({ media, content, actions }) => {

  const classes = useStyles();

  return (
    <MuiCard className={classes.root}>
        {media && (
                <CardMedia
                    component={media.component}
                    alt={media.alt}
                    height={media.height}
                    image={media.src}
                    title={media.title}
                />
        )}
        {content && (
                <CardContent>
                    {content}
                </CardContent>
        )}
        {actions && (
                <CardActions>
                    {actions}
                </CardActions>
        )}
    </MuiCard>
  )
}

export default Card;