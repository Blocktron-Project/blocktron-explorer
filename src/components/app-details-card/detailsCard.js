/**
 * Import React libraries and CSS
 */
import React, {
    Component
} from 'react';
import './style.css';

import DonutCard from '../app-chart-donut/chart';
import BlockChain from '../app-block-chain/blockChain';
import ChainConfig from '../app-chain-config/chainConfig';

class DetailsCard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            blockchain: [],
            random: ''
        };
    }

    componentDidUpdate() {

        /**
         * Materialize init
         */
        $('.tooltipped').tooltip();
        $('.tabs').tabs();
    }

    handleChainUpdate = () => {
        this.setState({ random: floor(Math.random()) });
    };

    render() {
        if (this.props && this.props.selectedNode) {
            let data = this.props.selectedNode;
            return (
                <div className="row">
                    <div className="col s12 m10 offset-m1">
                        <div className="card hoverable">
                            <div className="card-content grey-text">
                                <span className="card-title"><div className="chip lime left">Node</div>
                                    {data.configuration.node_address}</span>
                            </div>
                            <div className="card-tabs">
                                <ul className="tabs tabs-fixed-width">
                                    <li className="tab">
                                        <a className="active" href="#overview">
                                            Overview</a>
                                    </li>
                                    <li className="tab"><a href="#configuration">Configuration</a></li>
                                    <li className="tab"><a href="#memory">Memory & Resources</a></li>
                                </ul>
                            </div>
                            <div className="card-content grey lighten-4">
                                <div id="overview">
                                    <p className="grey-text"><strong>Status message:</strong> {data.message}</p>
                                    <p className="grey-text"><strong>Status code:</strong> <span className="label lime lighten-4">{data.status_code}</span></p>
                                    <p className="grey-text"><strong>Port:</strong> <strong className="label lime lighten-4">{data.port}</strong></p>
                                    <p className="grey-text"><strong>Environment:</strong> {data.configuration.environment}</p>
                                    <p className="grey-text"><strong>Node Id:</strong> <strong className="label lime lighten-4">{data.configuration.node_id}</strong></p>
                                </div>
                                <div id="configuration">
                                    <p className="grey-text"><strong>Process title:</strong> {data.configuration.process_title}</p>
                                    <p className="grey-text"><strong>Process Id:</strong> <span className="label lime lighten-4">{data.configuration.process_pid}</span></p>
                                    <p className="grey-text"><strong>Os:</strong> <strong className="label lime lighten-4">{data.configuration.os}</strong></p>
                                    <p className="grey-text"><strong>CPU Architecture:</strong> {data.configuration.cpu_arch}</p>
                                    <p className="grey-text"><strong>Node version:</strong> <strong className="label lime lighten-4">{data.configuration.process_versions.node_version}</strong></p>
                                    <p className="grey-text"><strong>V8 version:</strong> <strong className="label lime lighten-4">{data.configuration.process_versions.v8_version}</strong></p>
                                </div>
                                <div id="memory">
                                    <p className="grey-text"><strong>Memory - External:</strong> <span className="label lime lighten-4">{data.configuration.memory.external}</span></p>
                                    <p className="grey-text"><strong>Memory - Resident Set Size:</strong> <span className="label lime lighten-4">{data.configuration.memory.resident_set_size}</span></p>
                                    <div className="row">
                                        <DonutCard chartData={[data.configuration.memory.resident_set_size, data.configuration.memory.heap_total]} labels={['Resident Set Size', 'Heap Total']} />
                                        <DonutCard chartData={[data.configuration.memory.heap_total, data.configuration.memory.heap_used]} labels={['Heap Total', 'Heap Used']} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Refactor to make an orchestrator which GETs blockchain data 
                    and pass required data to child components, thus making only a single network request */}
                    <ChainConfig nodeAddress={this.props.selectedNode.configuration.node_address} handleChainUpdate={this.props.handleChainUpdate} />
                    <BlockChain nodeAddress={this.props.selectedNode.configuration.node_address} random={this.state.random}/>
                </div>
            );
        }
        else {
            return ('');
        }
    }
}

export default DetailsCard;
