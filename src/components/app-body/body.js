import React, { Component } from 'react';
import './style.css';
import SearchNode from '../app-search-node/searchNode';
import Welcome from '../app-welcome/welcome';
import NodeDetails from '../app-node-details/nodeDetails';

class Body extends Component {
    constructor(props) {
        super(props)

        this.state = {
            NodeDetails: ''
        };
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

                <div className="center">
                    <a className="waves-effect lime btn">
                        <i className="material-icons left">add</i>Add Node</a>
                </div>

                <div className="center">
                    <div className="chip lime lighten-3 bold-text">
                        <img src="img/yuna.jpg" alt="Contact Person" />
                       http://127.0.0.1:3001
                    <i className="close material-icons">close</i>
                    </div>
                </div>
            </div>

        );
    }
}
export default Body;
