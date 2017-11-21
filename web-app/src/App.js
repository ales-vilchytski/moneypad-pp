import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon'

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <div>
                    <Button raised color="primary">
                        Hello World
                    </Button>
                </div>
                <div>
                    <Icon>3d_rotation</Icon>
                </div>
                <div>
                    content 2
                </div>
                <label>
                    LABEL
                    <input ref={i => this.input = i } name="i"/>
                </label>
                <div>bottom</div>
                <div className="sizing">sizing</div>
                <div className="bottom">bottom</div>
            </div>
        );
    }

    componentDidMount() {
    }
}

export default App;
