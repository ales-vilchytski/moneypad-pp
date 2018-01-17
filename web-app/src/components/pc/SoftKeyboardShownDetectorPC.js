import { PureComponent } from 'react'
import PropTypes from 'prop-types'

/** Intentionally does nothing because PC has no soft keyboard */
class SoftKeyboardShownDetectorPC extends PureComponent {

    static propTypes = {
        onSoftKeyBoardChanged: PropTypes.func.isRequired
    };

    render() {
        return (
            null
        );
    }

}

export default SoftKeyboardShownDetectorPC;
