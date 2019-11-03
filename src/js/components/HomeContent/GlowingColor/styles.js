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
    height: '100%',
    borderRight: '1px solid lightgray',
  },
  description: {
    backgroundColor: '#00B6FF',
    height: '68px',
    display: 'flex',
    alignItems: 'center',
    marginTop: '30px',
  },
  descriptionBtn: {
    width: '81px',
    height: '68px',
    boxShadow: 'none',
    borderRadius: 0,
    textTransform: 'none',
    backgroundColor: '#00ABF0',
    color: 'white',
    fontSize: '2rem',
    '&:hover': {
      backgroundColor: '#00a2e3',
    },
  },
  descriptionBtnLabel: {
    padding: '0 10px',
    fontSize: '1.2rem',
    color: 'white',
    textAlign: 'center',
    width: '100%',
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
      alignItems: 'center',
      justifyContent: 'space-around',
    },
  })(Component);

export const withTableStyles = Component =>
  withStyles({
    root: {
      maxWidth: '400px',
      alignSelf: 'center',
    },
  })(Component);

export const withGridItemStyles = Component =>
  withStyles({
    root: {},
  })(Component);

export const withTableCellStyles = Component =>
  withStyles({
    root: {
      fontSize: '1.2rem',
      lineHeight: '1.15rem',
      border: 'none',
    },
  })(Component);

export const withGlowInfoStyles = Component =>
  withStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      '& > table tbody tr th': {
        width: '220px',
        padding: '11px 0',
      },
      '& > table tbody tr td': {
        width: '210px',
        padding: 0,
        boxSizing: 'border-box',
      },
    },
  })(Component);

export const withClassTableCellStyles = Component =>
  withStyles({
    root: {
      '& > span': {
        backgroundColor: '#F0F0F0',
        padding: '5px 10px',
        borderRadius: '5px',
        boxShadow: '0px 3px 6px #cccccc',
        marginLeft: '-5px',
      },
    },
  })(Component);
