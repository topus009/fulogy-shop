import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import SvgIcon from '@material-ui/core/SvgIcon';
import {
  useStyles,
  withShoppingCartBadgeStyles,
  withSideMenuStyles,
  withSideMenuListItemStyles,
  withSideMenuListStyles,
  withSideMenuListItemTextStyles,
  withLogoStyles,
} from './styles';
import { sideMenuItems } from './conctants';
import { Logo } from '../CustomSvgIcon';
import SideMenuNavLink from '../SideMenuNavLink';

const StyledShoppingCartBadge = withShoppingCartBadgeStyles(Badge);
const StyledSideMenu = withSideMenuStyles(Drawer);
const StyledSideMenuListItem = withSideMenuListItemStyles(SideMenuNavLink);
const StyledSideMenuList = withSideMenuListStyles(List);
const StyledSideMenuListItemText = withSideMenuListItemTextStyles(ListItemText);
const StyledLogo = withLogoStyles(SvgIcon);

const Header = ({ history }) => {
  const classes = useStyles();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = (open, event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setMenuOpen(open);
  };

  const sideList = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={e => toggleMenu(false, e)}
      onKeyDown={e => toggleMenu(false, e)}
    >
      <StyledSideMenuList>
        {Object.keys(sideMenuItems).map(key => (
          <StyledSideMenuListItem key={key} button to={`/${key}`}>
            <StyledSideMenuListItemText primary={sideMenuItems[key]} disableTypography />
          </StyledSideMenuListItem>
        ))}
      </StyledSideMenuList>
    </div>
  );

  const renderMenuIcon = () =>
    isMenuOpen ? <CloseIcon className={classes.menuIcon} /> : <MenuIcon className={classes.menuIcon} />;

  const handleLogoClick = () => {
    setMenuOpen(false);
    history.push('/');
  };

  return (
    <>
      <AppBar>
        <Toolbar>
          <StyledLogo viewBox="-4.875 18.75 82.125 34.375" onClick={handleLogoClick}>
            <Logo />
          </StyledLogo>
          <IconButton
            className={classes.shopIconButton}
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={() => toggleMenu()}
            color="inherit"
          >
            <StyledShoppingCartBadge className={classes.shopIconBadge} badgeContent={4}>
              <ShoppingCart />
            </StyledShoppingCartBadge>
          </IconButton>

          <IconButton
            className={classes.menuIconButton}
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={e => toggleMenu(true, e)}
          >
            {renderMenuIcon()}
          </IconButton>
        </Toolbar>
      </AppBar>
      <StyledSideMenu anchor="right" open={isMenuOpen} onClose={e => toggleMenu(false, e)}>
        {sideList()}
      </StyledSideMenu>
    </>
  );
};

export default withRouter(Header);
