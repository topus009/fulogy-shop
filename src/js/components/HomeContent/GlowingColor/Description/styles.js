import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  root: {
    backgroundColor: 'white',
    position: 'absolute',
    top: '10px',
    width: '100%',
    height: 'calc(100% - 19px)',
    padding: '10px',
    boxSizing: 'border-box',
    '& > button': {
      textTransform: 'none',
      color: 'gray',
    },
  },
  descriptionText: {
    padding: '0 15px',
    maxWidth: '900px',
  },
});
