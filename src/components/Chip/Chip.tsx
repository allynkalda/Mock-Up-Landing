import { FunctionComponent } from 'react';
import { Chip as MuiChip } from '@material-ui/core';
import clsx from 'clsx';

import useStyles from './Chip.styles';

const Chip: FunctionComponent<any> = ({ label, type, noMargin, className }) => {

  const classes = useStyles();

  return (
      <MuiChip label={label} 
        className={clsx(className,
        {
            [classes.root]: !noMargin,
            [classes.primary]: type === 'primary',
            [classes.secondary]: type === 'secondary'
        })}
      />
  )
}

export default Chip;