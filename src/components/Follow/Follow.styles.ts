import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
      '& .MuiAccordion-root.Mui-expanded': {
        margin: 0,
      },
      '& .MuiAccordionSummary-content': {
        display: 'flex',
        alignItems: 'center'
      }
  },
  menuButton: {
    marginLeft: theme.spacing(2),
    color: theme.palette.text.primary
  },
  title: {
    color: theme.palette.text.primary,
    marginRight: theme.spacing(3)
  },
}));
