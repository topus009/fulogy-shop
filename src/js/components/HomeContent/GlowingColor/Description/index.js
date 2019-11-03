import React from 'react';
import Button from '@material-ui/core/Button';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import useStyles from './styles';

const Description = ({ onClose, description }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button onClick={onClose}>
        <ChevronLeftIcon />
        Вернуться
      </Button>
      <div className={classes.descriptionText}>
        {description.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </div>
  );
};

export default Description;
