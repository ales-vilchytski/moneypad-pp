// eslint-disable-next-line
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class RouteSyncHandler extends PureComponent {

    static propTypes = {
        stateObj: PropTypes.object.isRequired,
        stateKey: PropTypes.string.isRequired,
        valOnEnter: PropTypes.any.isRequired,
        valOnExit: PropTypes.any.isRequired
    };

    render() {
        return (
            null
        );
    }

    componentWillMount() {
        this.props.stateObj[this.props.stateKey] = this.props.valOnEnter;
    }

    componentWillUnmount() {
        this.props.stateObj[this.props.stateKey] = this.props.valOnExit;
    }

}

export default RouteSyncHandler;
