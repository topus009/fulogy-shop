import { withStyles, createMuiTheme } from '@material-ui/core';

export const theme = createMuiTheme({
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: '#1E1E1E',
        zIndex: 1301,
      },
    },
    MuiToolbar: {
      regular: {
        height: '70px',
        justifyContent: 'flex-end',
      },
    },
  },
  typography: {
    fontFamily: 'Georgia',
  },
});

export default withStyles({
  '@global': {
    body: {
      margin: 0,
      padding: 0,
      backgroundColor: '#F8F9FA',
    },
  },
})(() => null);
