import { FunctionComponent } from 'react';
import { Card as MuiCard, CardMedia, CardContent, CardActions } from '@material-ui/core';

import useStyles from './Card.styles';

interface Media {
  component?: any,
  alt?: string,
  height?: string,
  src?: string,
  title?: string
}

interface CardProps {
  media?: Media,
  content: JSX.Element,
  actions?: JSX.Element
}

const Card: FunctionComponent<CardProps> = ({ media, content, actions }) => {

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