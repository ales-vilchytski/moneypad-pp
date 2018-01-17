import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react'
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import ExpensesListPage from './expenses_list/ExpensesListPage'
import ExpensesAddPage from './expenses_add/ExpensesAddPage'
import AppState from './state/AppState'
import SoftKeyboardShownDetectorAndroid from './components/android/SoftKeyboardShownDetectorAndroid'
import SoftKeyboardShownDetectorPC from './components/pc/SoftKeyboardShownDetectorPC'
import getPlatform from './utils/platformDetect'

import logo from './logo.svg';
import './App.css';

function RedirectToRoot() {
    return <Redirect to="/expenses_list"/>
}

let SoftKeyboardShownDetector;
let platform = getPlatform();
console.log("Starting App for platform " + platform);
if (platform === 'Android') {
    SoftKeyboardShownDetector = SoftKeyboardShownDetectorAndroid;
} else {
    SoftKeyboardShownDetector = SoftKeyboardShownDetectorPC;
} // TODO: consider to load iOS specific one

class App extends Component {

    static propTypes = {
        appState: PropTypes.instanceOf(AppState).isRequired
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
        console.log("Keyboard is shown: " + isShown);
        this.props.appState.softKeyBoardShown = isShown;
    }

}

export default observer(App);
