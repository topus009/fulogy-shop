import React from 'react';
import Card from '@material-ui/core/Card';
import Checkbox from '@material-ui/core/Checkbox';
import useStyles, { withCardStyles, withCheckboxStyles } from './styles';
import { getImgPath } from '../../../../helpers';

const StyledCard = withCardStyles(Card);
const StyledCheckBox = withCheckboxStyles(Checkbox);

const GlowSelect = ({ onSelect, selected, items }) => {
  const classes = useStyles();
  const types = items.map(({ variants, ...rest }) => ({ ...rest, imgVariant: variants[1] }));
  return (
    <div className={classes.root}>
      {types.map(({ id, type, imgVariant, label }) => (
        <StyledCard key={id} onClick={() => onSelect(type)}>
          {selected === type && <StyledCheckBox defaultChecked />}
          <img className={classes.media} src={getImgPath({ id: imgVariant, type })} alt={label} />
          <div className={classes.label}>{label}</div>
        </StyledCard>
      ))}
    </div>
  );
};

export default GlowSelect;
