/**
 * Import React libraries and CSS
 */
import React, {
    Component
} from 'react';
import axios from 'axios';
import './style.css';

let URL_SCHEMA = require('../../config/urlSchema.json');

import AddTransaction from '../app-add-transaction/addTransaction';
import AddNetworkNode from '../app-add-network-nodes/addNetworkNodes';

class ChainConfig extends Component {
    constructor(props) {
        super(props)

        this.state = {
            pendingTransactions: '',
            networkNodes: ''
        };
    }

    componentDidMount() {
        this.rerenderChainConfig();
    }

    componentDidUpdate(prevProps) {

        /**
         * Materialize init
         */
        $('.tabs').tabs();

        /**
         * Conditionally rerender the component to avoid infinite loop
         */
        if (this.props.nodeAddress !== prevProps.nodeAddress) {
            this.rerenderChainConfig();
        }
    }

    rerenderChainConfig = () => {
        this.getBlockchain();
    };

    getBlockchain = () => {
        _bt.btProgress.start();
        let url = this.props.nodeAddress + URL_SCHEMA.blockchain;
        axios.get(url)
            .then((response) => {
                this.setState({
                    pendingTransactions: response.data.pendingTransactions,
                    networkNodes: response.data.networkNodes
                });
                _bt.btProgress.done();
            })
            .catch(error => {
                //TODO: Catch error and do global error logging
                _bt.btProgress.done();
            });
    };

    mine = () => {
        _bt.btProgress.start();
        let url = this.props.nodeAddress + URL_SCHEMA.mine;
        axios.get(url)
        .then(response => {
            if(response && response.data && response.data.code === 201){
                this.rerenderChainConfig();
                _bt.btToast('New Block mined!', { level: 'success' });
                _bt.btProgress.done();
            }
        })
        .catch(error => {
            _bt.btToast('Failed to Mine!', { level: 'error' });
            _bt.btProgress.done();
        });
    };

    getConsensus = () => {
        let url;
    };

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
                                    <AddTransaction nodeUrl={this.props.nodeAddress} rerenderChainConfig={this.rerenderChainConfig} />
                                    {
                                        pendingTransactions.length !== 0
                                            ? <div>
                                                <p className="grey-text">Pending Transaction are listed here.</p>
                                                <table className="striped highlight responsive-table">
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
                                            </div>
                                            : <p className="grey-text">No pending transactions are found.</p>
                                    }
                                </div>
                                <div id="networkNodes">
                                    <AddNetworkNode nodeUrl={this.props.nodeAddress} rerenderChainConfig={this.rerenderChainConfig} />
                                    {networkNodes.length !== 0
                                        ? <div>
                                            <p className="grey-text">Network nodes are listed here.</p>
                                            <table className="striped highlight responsive-table">
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>Node URL</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {networkNodes.map((node, key) => {
                                                        return (
                                                            <tr key={key}>
                                                                <td>{key + 1}</td>
                                                                <td><strong>{node.toString()}</strong></td>
                                                            </tr>
                                                        )
                                                    })}
                                                </tbody>
                                            </table>
                                        </div>
                                        : <p className="grey-text">No nodes have been added.</p>
                                    }
                                </div>
                            </div>
                            <div className="card-action">
                                <a className="waves-effect btn-flat lime white-text" onClick={this.mine}>
                                    <i className="material-icons left">gavel</i>Mine</a>
                                <a className="waves-effect btn-flat lime white-text" onClick={this.getConsensus}>
                                    <i className="material-icons left">build</i>Get Consensus</a>
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