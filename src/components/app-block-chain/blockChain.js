/**
 * Import React libraries and CSS
 */
import React, {
    Component
} from 'react';
import axios from 'axios';
import './style.css';

class BlockData extends Component {
    constructor(props) {
        super(props)

        this.state = {
            blockchain: ''
        };
    }

    componentDidMount() {
        let url = this.props.nodeAddress + '/blockchain';
        axios.get(url)
            .then((response) => {
                this.setState({ blockchain: response.data });
            })
            .catch(error => {
                //TODO: Catch error and do global error logging
            });
    }

    componentDidUpdate() {
        /**
         * Materialize init
         */
        $('.collapsible').collapsible();
    }

    render() {
        if (this.state.blockchain) {
            let chain = this.state.blockchain.chain;
            return (
                <div className="chain">
                    {
                        chain.map((item, index) => {
                            return (
                                <div key={index} className="col s12 m10 offset-m1">
                                    <div className={`card hoverable ${index === 0 ? 'grey lighten-4' : ''}`}>
                                        <div className="card-content grey-text">
                                            <span className="card-title">
                                                <i className="material-icons left">device_hub</i>
                                                BLOCK #{index} {index === 0 ? ' - GENESIS' : ''}
                                            </span>
                                            <p>on {new Date(item.timeStamp).toString()}</p>
                                            PREVIOUS HASH &nbsp;
                                            <div className="chip lime lighten-3">
                                                {item.previousHash}
                                            </div><br />
                                            HASH &nbsp;
                                            <div className="chip lime lighten-3">
                                                {item.hash}
                                            </div><br />
                                            NONCE &nbsp;
                                            <div className="chip orange lighten-3">
                                                {item.nonce}
                                            </div>
                                        </div>
                                        <ul className="collapsible">
                                            <li>
                                                <div className="collapsible-header">
                                                    <i className="material-icons">description</i>Transactions</div>
                                                <div className="collapsible-body">
                                                    <span>
                                                        <div className="row">
                                                            {item.transactions.length === 0
                                                                ? <div className="col s12">
                                                                    <p className="grey-text">GENESIS Block has no transactions to show.</p>
                                                                </div>
                                                                : item.transactions.map((transaction, key) => {
                                                                    return (
                                                                        <div key={key} className="col s12">
                                                                            <div className="card-panel">
                                                                                Transaction Id: &nbsp;
                                                                        <div className="chip grey lighten-3">
                                                                                    {transaction.transactionId}
                                                                                </div><br />
                                                                                Amount: &nbsp;
                                                                        <div className="chip orange lighten-3">
                                                                                    {transaction.amount}
                                                                                </div><br />
                                                                                Sender: &nbsp;
                                                                        <div className="chip lime lighten-3">
                                                                                    {transaction.sender}
                                                                                </div><br />
                                                                                Rreceiver: &nbsp;
                                                                        <div className="chip lime lighten-3">
                                                                                    {transaction.receiver}
                                                                                </div><br />
                                                                            </div>
                                                                        </div>
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                    </span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>)
                        })
                    }
                </div>
            );
        } else {
            return ('');
        }
    }
}
export default BlockData;