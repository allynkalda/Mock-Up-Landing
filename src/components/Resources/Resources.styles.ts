import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {

  },
  image: {
    height: '140px',
    borderRadius: '12px'
  },
  cardInfo: {
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column'
    },
  },
  text: {
    marginLeft: '20px',
    marginTop: '25px'
  },
  title: {
    margin: '5px 0px'
  },
  chip: {
    marginRight: '8px'
  },
  video: {
    color: theme.palette.secondary.main
  },
  page: {
    color: theme.palette.secondary.light
  },
  ebook: {
    color: theme.palette.secondary.dark
  },
  h5p: {
    color: theme.palette.primary.light
  }
}));