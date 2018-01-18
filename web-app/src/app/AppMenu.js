import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { MenuItem } from 'material-ui/Menu'
import Drawer from 'material-ui/Drawer'

class AppMenu extends PureComponent {

    static propTypes = {
        open: PropTypes.bool.isRequired,
        onItemClick: PropTypes.func,
        onClose: PropTypes.func
    };

    constructor(props) {
        super(props);
    }

    render() {
        let { open } = this.props;

        return (
            <Drawer open={!!open}
                    anchor={'bottom'}
                    onRequestClose={this.handleClose}>

                <MenuItem onClick={this.handleClick}>Item 1</MenuItem>
                <MenuItem onClick={this.handleClick}>Item 2</MenuItem>
            </Drawer>
        );
    }

    handleClick = () => {
        if (this.props.onItemClick) {
            this.props.onItemClick();
        }
    };

    handleClose = () => {
        if (this.props.onClose) {
            this.props.onClose();
        }
    }
}

export default AppMenu;
