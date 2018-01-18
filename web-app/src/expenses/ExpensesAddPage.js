import React, { Component } from 'react'
import { PropTypes } from "mobx-react"
import './ExpensesAddPage.css'
import ExpensesList from '../components/ExpensesList'

class ExpensesAddPage extends Component {

    static propTypes = {
        globalState: PropTypes.observableMap
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="expenses-add-page">
                <ExpensesList items={null}/>
                Form to add/edit
            </div>
        );
    }

}

export default ExpensesAddPage;
