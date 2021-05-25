import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
      '&.MuiAccordion-root': {
        margin: '0 !important',
      },
      '& .MuiAccordionSummary-content': {
        display: 'flex',
        alignItems: 'center'
      },
      maxWidth: '100vw'
  },
  menuButton: {
    marginLeft: theme.spacing(2),
    color: theme.palette.text.primary
  },
  title: {
    color: theme.palette.text.primary,
    marginRight: theme.spacing(3)
  },
  gridItem: {
    display: 'flex',
    margin: '10px 0px',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      alignItems: 'center',
      width: '100vw'
    },
  },
  titleDetails: {
    marginLeft: '15px'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    [theme.breakpoints.down('xs')]: {
      alignItems: 'center'
    },
    marginTop: '30px'
  },
  details: {
    display: 'flex',
    flexDirection: 'column'
  }
}));
