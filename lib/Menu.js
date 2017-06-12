'use strict';

var wrapComponent = require('./base/util').wrapComponent;
var Cmp = require('react-ui-component');
var Menu = Cmp.Menu,
    MenuItem = Cmp.MenuItem,
    MenuGroup = Cmp.MenuGroup,
    SubMenu = Cmp.SubMenu;


module.exports = {
    Menu: wrapComponent(Menu),
    MenuItem: MenuItem,
    MenuGroup: MenuGroup,
    SubMenu: SubMenu
};

Menu.defaultProps = {
    paddingLeft: 20
};