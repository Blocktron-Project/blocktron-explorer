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
                <div>
                    {
                        chain.map((item, index) => {
                            return (
                                <div key={index} className="col s12 m10 offset-m1">
                                    <div className="card hoverable lime lighten-5">
                                        <div className="card-content grey-text">
                                            <span className="card-title">BLOCK #{index} {index === 0 ? ' - GENESIS' : ''}</span>
                                            <p>on {new Date(item.timeStamp).toString()}</p>
                                            PREVIOUS HASH &nbsp;
                                            <div className="chip lime lighten-3">
                                                {item.previousHash}
                                            </div><br />
                                            HASH &nbsp;
                                            <div className="chip lime lighten-3">
                                                {item.hash}
                                            </div><br />
                                            <div className="chip orange lighten-3">
                                                {item.nonce}
                                            </div>
                                        </div>
                                        <ul className="collapsible">
                                            <li>
                                                <div className="collapsible-header">
                                                    <i className="material-icons">monetization_on</i>Transactions</div>
                                                <div className="collapsible-body">
                                                    <span>
                                                        <div className="row">
                                                            <div className="col s12">
                                                                {item.transactions.length === 0
                                                                    ? <p className="grey-text">No transactions to show, GENESIS Block is always empty</p>
                                                                    : <div className="card-panel">
                                                                        <div className="chip orange lighten-3">
                                                                            {item.transactions[0].transactionId}
                                                                        </div><br />
                                                                        <div className="chip orange lighten-3">
                                                                            {item.transactions[0].amount}
                                                                        </div><br />
                                                                        <div className="chip orange lighten-3">
                                                                            {item.transactions[0].sender}
                                                                        </div><br />
                                                                        <div className="chip orange lighten-3">
                                                                            {item.transactions[0].receiver}
                                                                        </div><br />
                                                                    </div>}
                                                            </div>
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