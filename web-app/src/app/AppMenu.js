import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './AppMenu.css'
import MenuItem from 'material-ui/Menu/MenuItem'
import { ListItemText, ListItemIcon } from 'material-ui/List'
import Drawer from 'material-ui/Drawer'
import { NavLink } from 'react-router-dom'
import ListIcon from 'material-ui-icons/List'
import AddIcon from 'material-ui-icons/PlaylistAdd'

const props = {
    transition: {
        enter: 200,
        exit: 150
    },
    modal: {
        keepMounted: true
    }
};

const routes = [
    { to: '/expenses_list', label: 'List', icon: ListIcon },
    { to: '/expenses_add', label: 'Add', icon: AddIcon }
];

class AppMenu extends PureComponent {

    static propTypes = {
        open: PropTypes.bool.isRequired,
        location: PropTypes.object.isRequired,
        onClose: PropTypes.func
    };

    render() {
        let { open } = this.props;

        // TODO: Drawer may be slow on mobile
        return (
            <Drawer open={!!open}
                    transitionDuration={props.transition}
                    ModalProps={props.modal}
                    anchor={'bottom'}
                    onClose={this.handleClose}>

                {routes.map((route, i) => {
                    let Icon = route['icon'];
                    return (
                        <NavLink key={i}
                                 to={route['to']}
                                 className="app-menu_link"
                                 activeClassName="app-menu_link__active"
                                 replace={true}
                                 location={this.props.location}>
                            <MenuItem className={route['icon'] ? "app-menu_link-item__icon" : "app-menu_link-item"}>
                                {route['icon'] &&
                                    <ListItemIcon className="app-menu_link-icon-wrapper">
                                        <Icon/>
                                    </ListItemIcon>
                                }
                                <ListItemText primary={route['label']} />
                            </MenuItem>
                        </NavLink>
                    );
                })}
            </Drawer>
        );
    }

    handleClose = (e, reason) => {
        if (this.props.onClose) {
            this.props.onClose();
        }
    }
}

export default AppMenu;
