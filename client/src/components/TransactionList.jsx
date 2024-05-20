import React from 'react';

const TransactionList = ({ transactions }) => {
    console.log(transactions);
    return (
        <div>
            <h2>Transaction List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Category</th>
                        <th>Vendor</th>
                        <th>Green Credits</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction) => (
                        <tr key={transaction.id}>
                            <td>{transaction.date}</td>
                            <td>{transaction.amount}</td>
                            <td>{transaction.category}</td>
                            <td>{transaction.vendor}</td>
                            <td>{transaction.greenCredits}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
};

export default TransactionList;
