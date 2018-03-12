import React, { Component } from 'react'
import { PropTypes } from "mobx-react"
import './ExpensesAddPage.css'
import ExpensesList from './components/ExpensesList'

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
                <form className="expenses-add-page_form"
                      action="#" onSubmit={this.onSubmit}>
                    <textarea className="expenses-add-page_textarea"
                              autoFocus={true}/>
                </form>
            </div>
        );
    }

    onSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
    }

}

export default ExpensesAddPage;
