import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react'
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import ExpensesListPage from '../expenses/ExpensesListPage'
import ExpensesAddPage from '../expenses/ExpensesAddPage'
import { SoftKeyboardShownDetector } from '../components/PlatformSpecificComponents'

import logo from '../assets/logo.svg';
import './App.css';

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
                </div>
            </Router>
        );
    }

    onSoftKeyboardChanged = (isShown) => {
        this.props.appState.softKeyBoardShown = isShown;
    }

}

export default observer(App);
