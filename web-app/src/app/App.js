import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './App.css';
import { observer } from 'mobx-react'
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import { SoftKeyboardShownDetector } from '../components/PlatformSpecificComponents'
import classNames from 'classnames'
import AppBar from 'material-ui/AppBar';
import MenuIcon from 'material-ui-icons/Menu';
import Toolbar from 'material-ui/Toolbar';
import AppMenu from './AppMenu'
import ExpensesAddPage from '../expenses/ExpensesAddPage'
import ExpensesListPage from '../expenses/ExpensesListPage'

import logo from '../assets/logo.svg';

function RedirectToRoot() {
    return <Redirect to="/expenses_list"/>
}


class App extends Component {

    static propTypes = {
        appState: PropTypes.object
    };

    render() {
        return (
            <Router>
                <div className="App">
                    <SoftKeyboardShownDetector onSoftKeyBoardChanged={this.onSoftKeyboardChanged}/>
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">Welcome to React</h1>
                    </header>
                    <Route exact path="/" component={RedirectToRoot}/>
                    <Route path="/expenses_list" component={ExpensesListPage}/>
                    <Route path="/expenses_add" component={ExpensesAddPage}/>

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

                    <AppBar position="static" classes=""
                            className={classNames({
                                'hidden': this.props.appState.softKeyBoardShown,
                                'app_app-bar': true
                            })}>
                        <Toolbar classes="">
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

    onSoftKeyboardChanged = (isShown) => {
        this.props.appState.softKeyBoardShown = isShown;
    };

    handleAppMenuOpen = () => {
        this.props.appState.appMenuOpen = true
    };

    handleAppMenuClose = () => {
        this.props.appState.appMenuOpen = false;
    }


}

export default observer(App);
