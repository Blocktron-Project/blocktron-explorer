import React, {
    Component
} from 'react';
import './style.css';
import Blockchain from '../app-blockchain/blockchain';

class NodeDetails extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        if (this.props.nodeDetails && this.props.nodeDetails.data) {
            let data = this.props.nodeDetails.data;
            return (
                <div>
                    <div className="row">
                        <div className="col s12">
                            <div className="card">
                                <div className="card-content grey-text">
                                    <span className="card-title"><div className="chip left lime">Node</div> {data.configuration.node_address}</span>
                                    <div className="row">
                                        <table className="col s12 m6 l6 striped highlight">
                                            <tbody>
                                                <tr>
                                                    <td>Status Message</td>
                                                    <td>{data.message}</td>
                                                </tr>
                                                <tr>
                                                    <td>Status Code</td>
                                                    <td>{data.status_code}</td>
                                                </tr>
                                                <tr>
                                                    <td>Port</td>
                                                    <td>{data.port}</td>
                                                </tr>
                                                <tr>
                                                    <td>Process Title</td>
                                                    <td>{data.configuration.process_title}</td>
                                                </tr>
                                                <tr>
                                                    <td>Process Id</td>
                                                    <td>{data.configuration.process_pid}</td>
                                                </tr>
                                                <tr>
                                                    <td>Memory: Resident Set Size</td>
                                                    <td>{data.configuration.memory.resident_set_size}</td>
                                                </tr>
                                                <tr>
                                                    <td>Memory: Heap Total</td>
                                                    <td>{data.configuration.memory.heap_total}</td>
                                                </tr>
                                                <tr>
                                                    <td>Memory: Heap Used</td>
                                                    <td>{data.configuration.memory.heap_used}</td>
                                                </tr>
                                                <tr>
                                                    <td>Memory: External</td>
                                                    <td>{data.configuration.memory.external}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <table className="col s12 m6 l6 striped highlight">
                                            <tbody>
                                                <tr>
                                                    <td>Node Id </td>
                                                    <td>{data.configuration.node_id}</td>
                                                </tr>
                                                <tr>
                                                    <td>Environment</td>
                                                    <td>{data.configuration.environment}</td>
                                                </tr>
                                                <tr>
                                                    <td>Operating System</td>
                                                    <td>{data.configuration.os}</td>
                                                </tr>
                                                <tr>
                                                    <td>CPU Architecture</td>
                                                    <td>{data.configuration.cpu_arch}</td>
                                                </tr>
                                                <tr>
                                                    <td>Node Version</td>
                                                    <td>{data.configuration.process_versions.node_version}</td>
                                                </tr>
                                                <tr>
                                                    <td>V8 Version</td>
                                                    <td>{data.configuration.process_versions.v8_version}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                    <Blockchain node={data.configuration.node_address}/>
                </div>
            );
        } else {
            return ('');
        }
    };
}
export default NodeDetails;
