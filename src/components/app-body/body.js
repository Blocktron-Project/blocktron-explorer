import React, { Component } from 'react';
import './style.css';


import SearchNode from '../app-search-node/searchNode';
import Welcome from '../app-welcome/welcome';
import NodeDetails from '../app-node-details/nodeDetails';

import AddNode from '../app-add-node/add-node';

class Body extends Component {
    constructor(props) {
        super(props)

        this.state = {
            NodeDetails: ''
        };
    }

    componentDidMount() {
        $('.tooltipped').tooltip();
        $('.tabs').tabs();
        $('.collapsible').collapsible();
        NProgress.done();
    }

    getNodeDetails = (data) => {
        this.setState({
            NodeDetails: data
        });
    };

    render() {
        return (
            <div className="container">
                <Welcome />
                {/* <SearchNode getNodeDetails={this.getNodeDetails} />
                <NodeDetails nodeDetails={this.state.NodeDetails} /> */}

                <AddNode getNodeDetails={this.getNodeDetails}/>


                <div className="center">
                    <div className="chip lime lighten-3 bold-text">
                        <img src="img/yuna.jpg" alt="Contact Person" />
                        http://127.0.0.1:3001
                    <i className="close material-icons">close</i>
                    </div>
                </div>



                <div className="row">
                    <div className="col s12 m9 offset-m2">
                        <div className="card hoverable">
                            <div className="card-content grey-text">
                                <span className="card-title"><div className="chip lime left">
                                    Node
                                </div>http://127.0.01:3001</span>
                            </div>
                            <div className="card-tabs">
                                <ul className="tabs tabs-fixed-width">
                                    <li className="tab"><a className="active" href="#overview">Overview</a></li>
                                    <li className="tab"><a href="#configuration">Configuration</a></li>
                                    <li className="tab"><a href="#memory">Memory & Resources</a></li>
                                </ul>
                            </div>
                            <div className="card-content grey lighten-4">
                                <div id="overview">Test 1</div>
                                <div id="configuration">Test 2</div>
                                <div id="memory">Test 3</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col s12 m9 offset-m2">
                        <div className="card hoverable lime lighten-5">
                            <div className="card-content grey-text">
                                <span className="card-title">BLOCK #1 - GENESIS</span>
                                <p>on Sat, 28 Jul 2018 15:57:58 GMT</p>
                                <div className="chip lime lighten-3">
                                    PREVIOUS HASH
                                </div><br/>
                                <div className="chip lime lighten-3">
                                    HASH
                                </div><br/>
                                <div className="chip orange lighten-3">
                                    1323
                                </div>

                            </div>
                            <ul className="collapsible">
                                <li>
                                    <div className="collapsible-header"><i className="material-icons">monetization_on</i>Transactions</div>
                                    <div className="collapsible-body"><span>

                                        <div className="row">
                                            <div className="col s12">
                                                <div className="card-panel lime lighten-4">
                                                    <span className="grey-text">I am a very simple card. I am good at containing small bits of information.
                                                    I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
        </span>
                                                </div>
                                            </div>
                                        </div></span></div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

        );
    }
}
export default Body;
