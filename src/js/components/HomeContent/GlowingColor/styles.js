import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';

export default makeStyles({
  root: {
    flex: 1,
  },
  preview: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column-reverse',
  },
});

export const withTabStyles = Component =>
  withStyles({
    root: {
      minWidth: '10px',
      minHeight: '10px',
      padding: 0,
      margin: '10px',
    },
    wrapper: {
      width: '10px',
      height: '10px',
      border: '1px solid white',
      backgroundColor: ({ value, currentTab }) => (value === currentTab ? 'white' : 'transparent'),
      borderWidth: '1px',
      borderColor: 'white',
      borderRadius: '50%',
    },
  })(({ currentTab, ...rest }) => <Component {...rest} />);

export const withTabsStyles = Component =>
  withStyles({
    root: {
      position: 'absolute',
      justifyContent: 'center',
      display: 'flex',
      height: '417px',
      alignItems: 'flex-end',
      marginTop: '-50px',
    },
  })(Component);

export const useImgStyles = makeStyles({
  root: {
    width: 'calc(100% - 65px)',
    borderRadius: '10px',
    border: '1px solid transparent',
  },
});

export const withGridStyles = Component =>
  withStyles({
    root: {
      height: '100%',
    },
  })(Component);
