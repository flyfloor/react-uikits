const wrapComponent = require('./base/util').wrapComponent
const Cmp = require('react-ui-component')
const {Menu, MenuItem, MenuGroup, SubMenu} = Cmp


module.exports = {
    Menu: wrapComponent(Menu),
    MenuItem,
    MenuGroup,
    SubMenu,
}


