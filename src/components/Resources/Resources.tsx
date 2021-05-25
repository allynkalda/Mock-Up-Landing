import { FunctionComponent } from 'react';
import { Typography } from '@material-ui/core';
import { Card, Chip } from 'components';
import data from '../../data/data.json';
import clsx from 'clsx';

import useStyles from './Resources.styles';

const Resources: FunctionComponent<any> = () => {

  const classes = useStyles();

  const content = (
    <>
    <Typography component="p" variant="h5" align="left">{data.name}'s Latest Resources</Typography>
    {data.resources.map((item) => {
        return (
            <Card content={(
                <div className={classes.cardInfo}>
                    <img className={classes.image} src={item.thumbnail} alt="thumbnail" />
                    <div className={classes.text}>
                        <Typography component="p" variant="body2" align="left" 
                            className={clsx({
                                [classes.video]: item.type === 'Video',
                                [classes.page]: item.type === 'Web Page',
                                [classes.ebook]: item.type === 'Moodle Book',
                                [classes.h5p]: item.type === 'H5P'
                            })}>{item.type}</Typography>
                        <Typography component="p" variant="h5" align="left" className={classes.title}>{item.name}</Typography>
                        {item.tags.map((item: string) => {
                            return <Chip label={item} noMargin type="secondary" className={classes.chip} />
                        })}
                    </div>
                </div>
            )}
            />
        )
    })}
    </>
  )

  return (
    <Card content={content} />
  )
}

export default Resources;