import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    noMargin: {
        margin: '0px 8px'
    },
    primary: {
        backgroundColor: theme.palette.primary.main,
        color: 'white',
        borderRadius: 5
    },
    secondary: {
        backgroundColor: theme.palette.text.secondary,
        color: 'white'
    },
    root: {
        [theme.breakpoints.down('xs')]: {
            marginTop: '4px'
        },
    }
}));
