import React, { Component, PureComponent } from 'react'
import PropTypes from 'prop-types'
import './App.css';
import { observer } from 'mobx-react'
import { Router, Switch, Route, Link, Redirect } from 'react-router-dom'
import { SoftKeyboardShownDetector } from '../components/PlatformSpecificComponents'
import classNames from 'classnames'
import AppBar from 'material-ui/AppBar';
import MenuIcon from 'material-ui-icons/Menu';
import Toolbar from 'material-ui/Toolbar';
import AppMenu from './AppMenu'
import RouteSyncHandler from '../components/RouteSyncHandler'
import ExpensesAddPage from '../expenses/ExpensesAddPage'
import ExpensesListPage from '../expenses/ExpensesListPage'

import logo from '../assets/logo.svg';

const modalRoutes = {
    '/app_menu': true
};

function RedirectToRoot() {
    return <Redirect to="/expenses_list"/>
}

class RootModalSwitch extends Component {
    static propTypes = {
        history: PropTypes.object.isRequired,
        appState: PropTypes.object.isRequired
    };

    previousLocation = this.props.history.location;

    componentWillReceiveProps(nextProps) {
        const { location } = this.props.history;
        if (nextProps.history.action !== 'POP' && !modalRoutes[location.pathname]) {
            this.previousLocation = location
        }
    }

    render() {
        const { location } = this.props.history;
        const isModal = !!(
            modalRoutes[location.pathname] &&
            this.previousLocation !== location // not initial render
        );

        return (
            <div>
                <Switch location={isModal ? this.previousLocation : location}>
                    <Route exact path="/" component={RedirectToRoot}/>
                    <Route path="/expenses_list" component={ExpensesListPage}/>
                    <Route path="/expenses_add" component={ExpensesAddPage}/>
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

    render() {
        return (
            <Router history={this.props.history}>
                <div className="App">
                    <SoftKeyboardShownDetector onSoftKeyBoardChanged={this.onSoftKeyboardChanged}/>
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">Welcome to React</h1>
                    </header>

                    <Route component={this.RootModalSwitchComponent} />

                    <div>
                        <Link to="/expenses_list">LIST</Link>
                    </div>

                    <div>
                        <Link to="/expenses_add">ADD</Link>
                    </div>
                    <label>INPUT
                      <input type="text"/>
                    </label>
                    <h2>
                        SoftKeyboardShown: {String(this.props.appState.softKeyBoardShown)}
                    </h2>
                    <h2>
                        Menu: {String(this.props.appState.appMenuOpen)}
                    </h2>

                    <AppBar position="static"
                            className={classNames({
                                'hidden': this.props.appState.softKeyBoardShown,
                                'app_app-bar': true
                            })}>
                        <Toolbar>
                            <MenuIcon onClick={this.handleAppMenuOpen}/>
                        </Toolbar>
                    </AppBar>
                    <AppMenu open={this.props.appState.appMenuOpen}
                             onClose={this.handleAppMenuClose}
                             onItemClick={this.handleAppMenuClose}/>

                </div>
            </Router>
        );
    }

    RootModalSwitchComponent = (props) => {
        return <RootModalSwitch history={props.history} appState={this.props.appState} />;
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
