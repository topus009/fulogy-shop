import React, { useState } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import CustomTabPanel from '../CustomTabPanel';
import useStyles, { withTabStyles, withTabsStyles, withTabsIndicatorStyles } from './styles';

const StyledTab = withTabStyles(Tab);
const StyledTabsWithIndicator = withTabsIndicatorStyles(Tabs);
const StyledTabs = withTabsStyles(StyledTabsWithIndicator);

const a11yProps = index => ({
  id: `scrollable-auto-tab-${index}`,
  'aria-controls': `scrollable-auto-tabpanel-${index}`,
});

const CustomTabs = ({ tabs, defaultTab = 0 }) => {
  const classes = useStyles();
  const [value, setValue] = useState(defaultTab);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const getTabsAndPanelsComponents = () => {
    const tabComponents = [];
    const tabPanelComponents = [];
    tabs.forEach(({ label, component }, index) => {
      tabComponents.push(<StyledTab key={index} label={label} {...a11yProps(index)} currentTab={value} />);
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

  const { tabComponents, tabPanelComponents } = getTabsAndPanelsComponents();
  return (
    <div className={classes.root}>
      <StyledTabs
        value={value}
        onChange={handleChange}
        textColor="primary"
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        {tabComponents}
      </StyledTabs>
      {tabPanelComponents}
    </div>
  );
};

export default CustomTabs;
