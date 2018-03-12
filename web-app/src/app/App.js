import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './App.css';
import { observer } from 'mobx-react'
import { Router, Switch, Route, Redirect } from 'react-router-dom'
import { SoftKeyboardShownDetector } from '../components/PlatformSpecificComponents'
import classNames from 'classnames'
import AppBar from 'material-ui/AppBar';
import MenuIcon from 'material-ui-icons/Menu';
import Toolbar from 'material-ui/Toolbar';
import AppMenu from './AppMenu'
import RouteSyncHandler from '../components/RouteSyncHandler'
import ExpensesAddPage from '../expenses/ExpensesAddPage'
import ExpensesListPage from '../expenses/ExpensesListPage'


const modalRoutes = {
    '/app_menu': true
};

function RedirectToRoot() {
    return <Redirect to="/expenses_list" push={false}/>
}

class RootModalSwitch extends Component {
    static propTypes = {
        history: PropTypes.object.isRequired,
        appState: PropTypes.object.isRequired,
        prevHist: PropTypes.object.isRequired
    };

    componentWillReceiveProps(nextProps) {
        const { location } = this.props.history;
        if (nextProps.history.action !== 'POP' && !modalRoutes[location.pathname]) {
            this.props.prevHist.location = location
        }
    }

    render() {
        const { location } = this.props.history;
        const isModal = !!(
            modalRoutes[location.pathname] &&
            this.props.prevHist.location !== location // not initial render
        );

        return (
            <div className={classNames({
                     'app_app-switch': true,
                     'keyboard-shown': this.props.appState.softKeyBoardShown
                 })}>
                <Switch location={isModal ? this.props.prevHist.location : location}>
                    <Route exact path="/" component={RedirectToRoot}/>
                    <Route path="/expenses_list" component={ExpensesListPage}/>
                    <Route path="/expenses_add" component={ExpensesAddPage}/>

                    {Object.keys(modalRoutes).map((route) => {
                        return (
                            modalRoutes[route]
                                ? <Route key={route} path={route} component={RedirectToRoot}/>
                                : null
                        );
                    })}
                </Switch>
                <Route path="/app_menu" component={this.AppMenuRouteHandler}/>
            </div>
        )
    }

    AppMenuRouteHandler = () => {
        return <RouteSyncHandler stateObj={this.props.appState}
                                 stateKey={"appMenuOpen"}
                                 valOnEnter={true}
                                 valOnExit={false}/>
    };

}

class App extends Component {

    static propTypes = {
        appState: PropTypes.object.isRequired
    };

    prevHist = {
        location: this.props.history.location
    };

    render() {
        return (
            <Router history={this.props.history}>
                <div className="App">
                    <SoftKeyboardShownDetector onSoftKeyBoardChanged={this.onSoftKeyboardChanged} />
                    <Route component={this.RootModalSwitchComponent} />
                    <AppBar position="static"
                            className={classNames({
                                'app_app-bar': true,
                                'hidden': this.props.appState.softKeyBoardShown
                            })}>
                        <Toolbar>
                            <MenuIcon onClick={this.handleAppMenuOpen}/>
                        </Toolbar>
                    </AppBar>
                    <AppMenu open={this.props.appState.appMenuOpen}
                             currentPath={this.props.history.location.pathname}
                             location={this.prevHist.location}
                             onClose={this.handleAppMenuClose}/>

                </div>
            </Router>
        );
    }

    RootModalSwitchComponent = (props) => {
        return <RootModalSwitch history={props.history}
                                appState={this.props.appState}
                                prevHist={this.prevHist} />;
    };

    onSoftKeyboardChanged = (isShown) => {
        this.props.appState.softKeyBoardShown = isShown;
    };

    handleAppMenuOpen = () => {
        this.props.history.push("/app_menu");
    };

    handleAppMenuClose = () => {
        this.props.history.go(-1);
    };

}


export default observer(App);
