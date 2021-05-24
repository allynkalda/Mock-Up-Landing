import { FunctionComponent, useState } from 'react';
import { IconButton, Typography, Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import { Chip } from 'components';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import data from '../../data/data.json';

import useStyles from './Follow.styles';

const Follow: FunctionComponent<any> = ({ children }) => {

  const [ expanded, setExpanded ] = useState<string | false>('panel1');
  const classes = useStyles();
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
            {!expanded && data.following.map((item: { label: string; type: string; }) => {
                return <Chip label={item.label} type={item.type} />
            })}
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget.
                </Typography>
            </AccordionDetails>
          </Accordion>
  )
}

export default Follow;