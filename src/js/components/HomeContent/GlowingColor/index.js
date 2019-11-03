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
import GlowSelect from './GlowSelect';
import glowData from '../../../fakeData/glowData';
import { getImgPath } from '../../../helpers';

const StyledTab = withTabStyles(Tab);
const StyledTabs = withTabsStyles(Tabs);
const StyledGrid = withGridStyles(Grid);
const StyledGridItem = withGridItemStyles(Grid);
const StyledTable = withTableStyles(Table);
const StyledTableCell = withTableCellStyles(TableCell);
const StyledGlowInfo = withGlowInfoStyles(StyledGridItem);
const StyledClassTableCell = withClassTableCellStyles(StyledTableCell);

const ImgWrapper = ({ id, type }) => {
  const classes = useImgStyles();
  return <img src={getImgPath({ id, type })} alt={`${type}_${id}`} className={classes.root} />;
};

const { types: tabItems, description, ...restGlowData } = glowData;

const GlowingColor = () => {
  const [value, setValue] = useState(0);
  const [valueType, setValueType] = useState('day');
  const [isDescriptionOpen, setDescriptionOpen] = useState(false);
  const classes = useStyles();

  const toggleDescription = () => setDescriptionOpen(!isDescriptionOpen);

  const onVariantChange = (event, newValue) => setValue(newValue);

  const onTypeChange = newValue => setValueType(newValue);

  const getImgTabsAndPanelsComponents = () => {
    const tabComponents = [];
    const tabPanelComponents = [];
    const tabItem = tabItems.find(({ id }) => id === value);
    tabItem?.variants.forEach((key, index) => {
      tabComponents.push(<StyledTab key={index} wrapped={false} currentTab={value} disableRipple />);
      tabPanelComponents.push(
        <CustomTabPanel key={key} value={value} index={index}>
          <ImgWrapper id={key} type={valueType} />
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
      {!isDescriptionOpen && (
        <StyledGrid container>
          <StyledGridItem item className={classes.preview}>
            <StyledTabs
              value={value}
              onChange={onVariantChange}
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
            <GlowSelect onSelect={onTypeChange} items={tabItems} selected={valueType} />
          </StyledGlowInfo>
        </StyledGrid>
      )}
      {isDescriptionOpen && <Description onClose={toggleDescription} description={description[1]} />}
    </div>
  );
};

export default GlowingColor;
