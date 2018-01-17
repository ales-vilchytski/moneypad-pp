import React, { Component } from 'react'
import { PropTypes } from "mobx-react"

class ExpensesAddPage extends Component {

    static propTypes = {
        globalState: PropTypes.observableMap
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>This is ADD</div>
        );
    }

}

export default ExpensesAddPage;
