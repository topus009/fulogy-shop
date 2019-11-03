import { makeStyles, withStyles } from '@material-ui/core/styles';

export default makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '20px',
  },
  media: {
    maxWidth: '150px',
  },
  label: {
    color: 'white',
    bottom: 0,
    display: 'flex',
    position: 'absolute',
    backgroundColor: '#00000082',
    width: '100%',
    justifyContent: 'center',
    fontSize: '1.3rem',
    lineHeight: '2rem',
  },
});

export const withCardStyles = Component =>
  withStyles({
    root: {
      margin: '0 10px',
      position: 'relative',
      height: '108px',
    },
  })(Component);

export const withCheckboxStyles = Component =>
  withStyles({
    root: {
      position: 'absolute',
      pointerEvents: 'none',
      '& > span svg': {
        backgroundColor: 'white',
        borderRadius: '3px',
        '& > path': {
          transform: 'scale(1.35) translate(-3px, -3px)',
        },
      },
    },
    checked: {
      color: '#00B6FF !important',
    },
  })(Component);
