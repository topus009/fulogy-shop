import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const CustomTabPanel = ({ children, value, index, ...rest }) => (
  <Typography
    component="div"
    role="tabpanel"
    hidden={value !== index}
    id={`scrollable-auto-tabpanel-${index}`}
    aria-labelledby={`scrollable-auto-tab-${index}`}
    {...rest}
  >
    <Box p={3}>{children}</Box>
  </Typography>
);

export default CustomTabPanel;
