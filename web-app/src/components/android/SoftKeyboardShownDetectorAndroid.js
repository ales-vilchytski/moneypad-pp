import { PureComponent } from 'react'
import PropTypes from 'prop-types'

class SoftKeyboardShownDetectorAndroid extends PureComponent {

    static propTypes = {
        onSoftKeyBoardChanged: PropTypes.func.isRequired
    };

    render() {
        return (
            null
        );
    }

    componentWillMount() {
        this._initialWindowHeight = window.innerHeight ;
    }

    componentDidMount() {
        window.addEventListener('resize', this._onWindowResize)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this._onWindowResize);
    }

    _onWindowResize = () => {
        let isShown = false;
        if (window.innerHeight < this._initialWindowHeight) {
            isShown = true;
        }
        this.props.onSoftKeyBoardChanged(isShown);
    }
}

export default SoftKeyboardShownDetectorAndroid;
