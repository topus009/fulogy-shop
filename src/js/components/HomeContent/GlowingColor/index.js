import React, { useState } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import Fab from '@material-ui/core/Fab';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import useStyles, {
  withTabStyles,
  withTabsStyles,
  withGridStyles,
  useImgStyles,
  withTableStyles,
  withGridItemStyles,
  withTableCellStyles,
  withGlowInfoStyles,
  withClassTableCellStyles,
} from './styles';
import CustomTabPanel from '../../common/CustomTabPanel';
import Description from './Description';
import { STATIC_PATH } from '../../../config/constants';
import glowData from '../../../fakeData/glowData';

const StyledTab = withTabStyles(Tab);
const StyledTabs = withTabsStyles(Tabs);
const StyledGrid = withGridStyles(Grid);
const StyledGridItem = withGridItemStyles(Grid);
const StyledTable = withTableStyles(Table);
const StyledTableCell = withTableCellStyles(TableCell);
const StyledGlowInfo = withGlowInfoStyles(StyledGridItem);
const StyledClassTableCell = withClassTableCellStyles(StyledTableCell);

const ImgWrapper = ({ name }) => {
  const classes = useImgStyles();
  return <img src={`../../${STATIC_PATH}/images/interior-${name}.png`} alt={name} className={classes.root} />;
};

const { types: tabItems, description, ...restGlowData } = glowData;

const GlowingColor = () => {
  const [value, setValue] = useState(0);
  const [isDescriptionOpen, setDescriptionOpen] = useState(true);
  const classes = useStyles();

  const toggleDescription = () => setDescriptionOpen(!isDescriptionOpen);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const getImgTabsAndPanelsComponents = () => {
    const tabComponents = [];
    const tabPanelComponents = [];
    tabItems.forEach(({ id }, index) => {
      tabComponents.push(<StyledTab key={index} wrapped={false} currentTab={value} disableRipple />);
      tabPanelComponents.push(
        <CustomTabPanel key={index} value={value} index={index}>
          <ImgWrapper name={id} />
        </CustomTabPanel>
      );
    });
    return {
      tabComponents,
      tabPanelComponents,
    };
  };
  const { tabComponents, tabPanelComponents } = getImgTabsAndPanelsComponents();

  const getRows = () => {
    return Object.keys(restGlowData).map(key => ({
      key,
      value: restGlowData[key],
    }));
  };

  const rows = getRows();

  return (
    <div className={classes.root}>
      <StyledGrid container>
        <StyledGridItem item className={classes.preview}>
          <StyledTabs
            value={value}
            onChange={handleChange}
            TabIndicatorProps={{
              style: {
                display: 'none',
                StyledClassTableCell,
              },
            }}
          >
            {tabComponents}
          </StyledTabs>
          {tabPanelComponents}
        </StyledGridItem>
        <StyledGlowInfo item>
          <StyledTable>
            <TableBody>
              {rows.map(row => (
                <TableRow key={row.key}>
                  <StyledTableCell component="th" scope="row">
                    {row.value[0]}
                  </StyledTableCell>
                  {row.key === 'class' ? (
                    <StyledClassTableCell>
                      <span>{row.value[1]}</span>
                    </StyledClassTableCell>
                  ) : (
                    <StyledTableCell>{row.value[1]}</StyledTableCell>
                  )}
                </TableRow>
              ))}
            </TableBody>
          </StyledTable>
          <div className={classes.description}>
            <Fab className={classes.descriptionBtn} onClick={toggleDescription}>
              i
            </Fab>
            <div className={classes.descriptionBtnLabel}>{description[0]}</div>
          </div>
        </StyledGlowInfo>
      </StyledGrid>
      {isDescriptionOpen && <Description onClose={toggleDescription} description={description[1]} />}
    </div>
  );
};

export default GlowingColor;
