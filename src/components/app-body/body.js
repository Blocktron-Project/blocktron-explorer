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
            <div className="row">
                <Welcome />
                <SearchNode getNodeDetails={this.getNodeDetails} />
                <NodeDetails nodeDetails={this.state.NodeDetails} />
            </div>
        );
    }
}
export default Body;
