/*
 * REFERENCE
 * https://next.material-ui.com/customization/themes/
 */

import { createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
  breakpoints: {
    values: {
      sm: 481,
      md: 768,
      lg: 1025
    }
  },
  palette: {
    primary: {
      main: '#7F8393',
      light: '#EA6A8D'
    },
    secondary: {
      main: '#609CD8',
      light: '#E9B2EB',
      dark: '#58D0A2',
    },
    text: {
      primary: '#212529',
      secondary: '#B6BACB',
      tertiary: 'white'
    },
    error: {
      main: '#D15582'
    },
    border: {
      divider: '#F2F2F2',
      main: '#E1E1E1'
    },
    active: {
      main: '#000000'
    },
    action: {
      disabledBackground: '#A8A9AE',
      disabledText: '#C9CACD'
    },
    type: 'light'
  },
  typography: {
    fontFamily: [
      '"Open Sans"',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      '"Roboto"',
      '"Oxygen"',
      '"Ubuntu"',
      '"Cantarell"',
      '"Fira Sans"',
      '"Droid Sans"',
      '"Helvetica Neue"',
      'sans-serif'
    ].join(',')
  },
  props: {
    MuiTypography: {
      variantMapping: {
        body1: 'span'
      }
    }
  }
});

export default theme;
