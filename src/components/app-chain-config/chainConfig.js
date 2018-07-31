/**
 * Import React libraries and CSS
 */
import React, {
    Component
} from 'react';
import axios from 'axios';
import './style.css';

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
            return (
                <div className="row">
                    <div className="col s12 m10 offset-m1">
                        <div className="card hoverable">
                            <div className="card-content grey-text">
                                <span className="card-title"> <i className="material-icons left">extension</i> Blockchain Configuration</span>
                            </div>
                            <div className="card-tabs">
                                <ul className="tabs tabs-fixed-width">
                                    <li className="tab"><a className="active" href="#pendingTransactions">Pending Transactions</a></li>
                                    <li className="tab"><a href="#networkNodes">Network Nodes</a></li>
                                </ul>
                            </div>
                            <div className="card-content grey lighten-4">
                                <div id="pendingTransactions">Test 1</div>
                                <div id="networkNodes">Test 2</div>
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