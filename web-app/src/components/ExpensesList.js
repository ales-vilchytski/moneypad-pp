import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './ExpensesList.css'

class ExpensesList extends PureComponent {

    static propTypes = {
        items: PropTypes.array
    };

    render() {
        return (
            <div className="expenses-list">
                This will be a list of expenses
            </div>
        );
    }

}

export default ExpensesList;
