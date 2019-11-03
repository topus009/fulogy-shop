import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';

export default makeStyles({
  root: {
    flexGrow: 1,
    width: '100%',
    flexDirection: 'column-reverse',
    display: 'flex',
    position: 'fixed',
    bottom: 0,
    height: 'calc(100% - 70px)',
    top: '70px',
    '& > div:not([class^="MuiTabs"])': {
      minHeight: '415px',
      overflowY: 'auto',
      padding: '10px 0',
      margin: '-10px 0',
      position: 'relative',
    },
  },
});

export const withTabsIndicatorStyles = Component =>
  withStyles({
    indicator: {
      backgroundColor: '#00B6FF',
      height: '3px',
    },
  })(Component);

export const withTabStyles = Component =>
  withStyles({
    root: {
      fontSize: '1.2rem',
      textTransform: 'none',
      height: '82px',
      borderRight: '1px solid lightgray',
      padding: 0,
      minWidth: 'auto',
      borderTop: '1px solid lightgray',
      position: 'relative',
      '&::after': {
        content: '""',
        position: 'absolute',
        height: '3px',
        width: '100%',
        bottom: 0,
        backgroundColor: ({ value, currentTab }) => (value > currentTab ? '#FF8183' : '#00B6FF'),
      },
    },
    wrapper: {
      height: '82px',
      lineHeight: '1rem',
      boxSizing: 'border-box',
      padding: '0 15px',
      width: '146px',
    },
    textColorPrimary: {
      color: 'black',
      '&.Mui-selected': {
        color: 'white',
        backgroundColor: '#00B6FF',
      },
    },
  })(({ currentTab, ...rest }) => <Component {...rest} />);

export const withTabsStyles = Component =>
  withStyles({
    root: {
      minHeight: '82px',
    },
    flexContainer: {
      margin: '0 35px',
      justifyContent: 'center',
      '& > button:first-child': {
        borderLeft: '1px solid lightgray',
      },
    },
  })(Component);
