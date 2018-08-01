/**
 * Import React libraries and CSS
 */
import React, {
    Component
} from 'react';
import axios from 'axios';
import './style.css';

import AddTransaction from '../app-add-transaction/addTransaction';

class ChainConfig extends Component {
    constructor(props) {
        super(props)

        this.state = {
            pendingTransactions: '',
            networkNodes: ''
        };
    }

    componentDidMount() {
        let url = this.props.nodeAddress + '/blockchain';
        axios.get(url)
            .then((response) => {
                this.setState({
                    pendingTransactions: response.data.pendingTransactions,
                    networkNodes: response.data.networkNodes
                });
            })
            .catch(error => {
                //TODO: Catch error and do global error logging
            });
    }

    componentDidUpdate() {

        /**
         * Materialize init
         */
        $('.tabs').tabs();
    }

    render() {
        if (this.state && this.state.pendingTransactions && this.state.networkNodes) {
            let pendingTransactions = this.state.pendingTransactions;
            let networkNodes = this.state.networkNodes;
            return (
                <div className="row">
                    <div className="col s12 m10 offset-m1">
                        <div className="card hoverable">
                            <div className="card-content grey-text">
                                <span className="card-title"> <i className="material-icons left">extension</i> Blockchain Configuration</span>
                            </div>
                            <div className="card-tabs">
                                <ul className="tabs tabs-fixed-width">
                                    <li className="tab">
                                        <a className="active" href="#pendingTransactions">Pending Transactions {pendingTransactions.length !== 0 ? '(' + pendingTransactions.length.toString() + ')' : ''}</a></li>
                                    <li className="tab">
                                        <a href="#networkNodes">Network Nodes {networkNodes.length !== 0 ? '(' + networkNodes.length.toString() + ')' : ''}</a></li>
                                </ul>
                            </div>
                            <div className="card-content grey lighten-4">
                                <div id="pendingTransactions">
                                    <AddTransaction />
                                    <p className="grey-text">Pending Transaction are listed here.</p>
                                    {
                                        pendingTransactions.length !== 0
                                            ? <table className="striped highlight responsive-table">
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>Transaction Id</th>
                                                        <th>Amount</th>
                                                        <th>Sender</th>
                                                        <th>Receiver</th>
                                                    </tr>
                                                </thead>

                                                <tbody>
                                                    {
                                                        pendingTransactions.map((transaction, key) => {
                                                            return (
                                                                <tr key={key}>
                                                                    <td>{key.toString()}</td>
                                                                    <td className="trim">{transaction.transactionId.toString()}</td>
                                                                    <td>{transaction.amount.toString()}</td>
                                                                    <td>{transaction.sender.toString()}</td>
                                                                    <td className="trim">{transaction.receiver.toString()}</td>
                                                                </tr>
                                                            )
                                                        })
                                                    }
                                                </tbody>
                                            </table>
                                            : <p className="grey-text">No pending transactions are found.</p>
                                    }
                                </div>
                                <div id="networkNodes">
                                    {networkNodes.length !== 0
                                        ?
                                        <table className="striped highlight">
                                            <tbody>
                                                {networkNodes.map((node, key) => {
                                                    return (
                                                        <tr key={key}>
                                                            <td>{key + 1} <strong>{node.toString()}</strong></td>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </table>
                                        : <p className="grey-text">No nodes have been added.</p>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return ('');
        }
    }
}
export default ChainConfig;