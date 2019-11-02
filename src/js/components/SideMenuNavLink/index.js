import React, { forwardRef } from 'react';
import { NavLink } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';

const SideMenuNavLink = props => (
  <ListItem
    component={forwardRef((compProps, ref) => (
      <NavLink ref={ref} {...compProps} />
    ))}
    {...props}
  />
);

export default SideMenuNavLink;
