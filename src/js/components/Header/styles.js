import { withStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  list: {
    width: '400px',
  },
  menuIcon: {
    fontSize: '2rem',
  },
  menuIconButton: {
    marginRight: '10px',
    marginTop: '-3px',
  },
  shopIconButton: {
    marginRight: '33px',
  },
});

export const withShoppingCartBadgeStyles = Component =>
  withStyles({
    badge: {
      backgroundColor: '#00B5FD',
      top: '3px',
      right: '1px',
      color: 'black',
    },
  })(Component);

export const withSideMenuStyles = Component =>
  withStyles({
    paper: {
      backgroundColor: '#212121',
      color: 'white',
      top: '70px',
    },
  })(Component);

export const withSideMenuListItemStyles = Component =>
  withStyles({
    button: {
      textAlign: 'center',
      padding: '22.5px 16px',
      '&:hover': {
        backgroundColor: '#00B6FF',
      },
      '&.active': {
        backgroundColor: '#00B6FF',
      },
    },
  })(Component);

export const withSideMenuListStyles = Component =>
  withStyles({
    root: {
      padding: 0,
      '& > div:not(:last-child)': {
        borderBottom: '1px solid #262626',
      },
    },
  })(Component);

export const withSideMenuListItemTextStyles = Component =>
  withStyles({
    root: {
      fontSize: '21px',
    },
  })(Component);

export const withLogoStyles = Component =>
  withStyles({
    root: {
      width: '8rem',
      margin: 'auto',
      marginLeft: 0,
      height: '50px',
    },
  })(Component);
