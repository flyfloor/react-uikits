const React = require('react')
const Component = React.Component
const _DropDown = require('react-ui-component').DropDown
const NS = require('./base/constant').NS
const klassName = require('./base/util').klassName


class DropDown extends Component {
    render() {
        const {props} = this
        let className = klassName(props.className, NS)
        return (
            <_DropDown {...props} className={className} />
        )
    }
}

DropDown.defaultProps = {
    placeHolder: '下拉选择...'
}

module.exports = {
    DropDown
}
