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

        /**
         * Materialize init
         */
        $('.collapsible').collapsible();

        let url = this.props.nodeAddress + '/blockchain';
        axios.get(url)
            .then((response) => {
                this.setState({ blockchain: response.data });
            })
            .catch(error => {
                //TODO: Catch error and do global error logging
            });
    }

    render() {
        if (this.state.blockchain) {
            let chain = this.state.blockchain.chain;
            console.log(chain);
            return (
                <div>
                    {
                        chain.map((item, index) => {
                            return (
                                <div key={index} className="col s12 m10 offset-m1">
                                    <div className="card hoverable lime lighten-5">
                                        <div className="card-content grey-text">
                                            <span className="card-title">BLOCK #1 - GENESIS</span>
                                            <p>on Sat, 28 Jul 2018 15:57:58 GMT</p>
                                            <div className="chip lime lighten-3">
                                                PREVIOUS HASH
                                    </div><br />
                                            <div className="chip lime lighten-3">
                                                HASH
                                    </div><br />
                                            <div className="chip orange lighten-3">
                                                1323
                                    </div>

                                        </div>
                                        <ul className="collapsible">
                                            <li>
                                                <div className="collapsible-header"><i className="material-icons">monetization_on</i>Transactions</div>
                                                <div className="collapsible-body">
                                                    <span>
                                                        <div className="row">
                                                            <div className="col s12">
                                                                <div className="card-panel lime lighten-4">
                                                                    <span className="grey-text">I am a very simple card. I am good at containing small bits of information.
                                                                    I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
                                                        </span>
                                                                </div>
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