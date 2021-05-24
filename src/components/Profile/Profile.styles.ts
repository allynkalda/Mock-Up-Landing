import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    profile: {
        height: '80px',
        borderRadius: '14px',
        border: '2px solid white',
        marginBottom: '10px'
    },
    grid: {
        marginTop: '-60px'
    },
    image: {
        height: '20px',
        marginLeft: '5px'
    },
    name: {
        display: 'flex',
        width: '100%',
        alignItems: 'center'
    },
    info: {
        marginLeft: '5px'
    },
    description: {
        marginTop: '20px',
        fontWeight: 'bold'
    },
    button: {
        border: `3px solid ${theme.palette.text.primary}`,
        textTransform: 'none',
        marginLeft: '10px',
        marginBottom: '20px'
    }
}));
