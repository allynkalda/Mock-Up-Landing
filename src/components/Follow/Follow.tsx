import { FunctionComponent, useState } from 'react';
import { IconButton, Typography, Accordion, AccordionSummary, AccordionDetails, Grid } from '@material-ui/core';
import { Chip } from 'components';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import data from '../../data/data.json';

import useStyles from './Follow.styles';

const Follow: FunctionComponent<any> = () => {

  const theme = useTheme();
  const classes = useStyles();
  const mobile = useMediaQuery(theme.breakpoints.down('xs'));

  const [ expanded, setExpanded ] = useState<string | false>(false);
  const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
          <Accordion className={classes.root} square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
            {!expanded && (
            <Typography variant="h6" className={classes.title}>
                Following
            </Typography>
            )}
            {!expanded && !mobile ? data.following.map((item: { label: string; type: string; }) => {
                return <Chip label={item.label} type={item.type} />
            }): ''}
            </AccordionSummary>
            <AccordionDetails className={classes.details}>
                <div className={classes.container}>
                    <Typography variant="h5" className={classes.titleDetails}>
                        Following
                    </Typography>
                    <Grid item xs={12} className={classes.gridItem}>
                    {expanded && data.following.map((item: { label: string; type: string; }) => {
                        if (item.type === 'primary') {
                            return <Chip label={item.label} type={item.type} />
                        }
                    })}
                    </Grid>
                    <Grid item xs={12} className={classes.gridItem}>
                    {expanded && data.following.map((item: { label: string; type: string; }) => {
                        if (item.type === 'secondary') {
                            return <Chip label={item.label} type={item.type} />
                        }
                    })}
                    </Grid>
                </div>
                <div className={classes.container}>
                    <Typography variant="h5" className={classes.titleDetails}>
                        Curating
                    </Typography>
                    <Grid item xs={12} className={classes.gridItem}>
                    {expanded && data.curating.map((item: string) => {
                        return <Chip label={item} type="primary" />
                    })}
                    </Grid>
                </div>
            </AccordionDetails>
          </Accordion>
  )
}

export default Follow;