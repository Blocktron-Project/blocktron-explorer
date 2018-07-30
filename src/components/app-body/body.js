import React, { Component } from 'react';
import './style.css';

import Welcome from '../app-welcome/welcome';
import AddNode from '../app-add-node/add-node';
import NodeChip from '../app-node-chip/nodeChip'
import DetailsCard from '../app-details-card/detailsCard';

class Body extends Component {
    constructor(props) {
        super(props)

        this.state = {
            NodeDetails: '',
            selectedNode: ''
        };
    }

    componentDidMount() {
        $('.tooltipped').tooltip();
        $('.tabs').tabs();
        $('.collapsible').collapsible();
        _bt.btProgress.done();
    }

    getNodeDetails = (data) => {
        this.setState({
            NodeDetails: data
        });
    };

    handleChipClick = (node) => {
        this.setState({ selectedNode: node });
    };

    render() {
        return (
            <div className="container">
                <Welcome />
                <AddNode getNodeDetails={this.getNodeDetails} />
                <NodeChip nodeDetails={this.state.NodeDetails} handleChipClick={this.handleChipClick} />
                <DetailsCard selectedNode={this.state.selectedNode} />
                
            </div>
        );
    }
}
export default Body;
