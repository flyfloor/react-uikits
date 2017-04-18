const React = require('react')
const Component = React.Component
const _DateTimePicker = require('react-ui-component').DateTimePicker
const NS = require('./base/constant').NS
const klassName = require('./base/util').klassName

class DateTimePicker extends Component {
    render() {
        const {props} = this
        let className = klassName(props.className, NS)
        return (
            <_DateTimePicker {...props} className={className} />
        )
    }
}

DateTimePicker.defaultProps = {
    confirm: <span>确认</span>
}

module.exports = {
    DateTimePicker
}
