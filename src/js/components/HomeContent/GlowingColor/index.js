import React, { useState } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import useStyles, { withTabStyles, withTabsStyles, withGridStyles, useImgStyles } from './styles';
import CustomTabPanel from '../../common/CustomTabPanel';
import { STATIC_PATH } from '../../../config/constants';

const StyledTab = withTabStyles(Tab);
const StyledTabs = withTabsStyles(Tabs);
const StyledGrid = withGridStyles(Grid);

const ImgWrapper = ({ name }) => {
  const classes = useImgStyles();
  return <img src={`../../${STATIC_PATH}/images/interior-${name}.png`} alt={name} className={classes.root} />;
};

const tabItems = [
  {
    component: <ImgWrapper name="warm" />,
  },
  {
    component: <ImgWrapper name="day" />,
  },
  {
    component: <ImgWrapper name="cold" />,
  },
];

const GlowingColor = () => {
  const [value, setValue] = useState(0);
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const getImgTabsAndPanelsComponents = () => {
    const tabComponents = [];
    const tabPanelComponents = [];
    tabItems.forEach(({ component }, index) => {
      tabComponents.push(<StyledTab key={index} wrapped={false} currentTab={value} disableRipple />);
      tabPanelComponents.push(
        <CustomTabPanel key={index} value={value} index={index}>
          {component}
        </CustomTabPanel>
      );
    });
    return {
      tabComponents,
      tabPanelComponents,
    };
  };
  const { tabComponents, tabPanelComponents } = getImgTabsAndPanelsComponents();

  return (
    <div className={classes.root}>
      <StyledGrid container>
        <Grid item className={classes.preview}>
          <StyledTabs
            value={value}
            onChange={handleChange}
            TabIndicatorProps={{
              style: {
                display: 'none',
              },
            }}
          >
            {tabComponents}
          </StyledTabs>
          {tabPanelComponents}
        </Grid>
        <Grid item>
          <div>2</div>
        </Grid>
      </StyledGrid>
    </div>
  );
};

export default GlowingColor;
