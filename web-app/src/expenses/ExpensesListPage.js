import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './ExpensesListPage.css'
import ExpensesList from './components/ExpensesList'

class ExpensesListPage extends Component {

    static propTypes = {

    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="expenses-list-page">
                <ExpensesList items={null}/>
                List controls
            </div>
        );
    }

}

export default ExpensesListPage;
