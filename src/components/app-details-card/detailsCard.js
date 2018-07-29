/**
 * Import React libraries and CSS
 */
import React, {
    Component
} from 'react';
import './style.css';

class DetailsCard extends Component {
    constructor(props) {
        super(props)
    }

    componentDidUpdate() {
        $('.tooltipped').tooltip();
        $('.tabs').tabs();
    }

    render() {
        if (this.props && this.props.selectedNode) {
            let data = this.props.selectedNode;
            console.log(data);
            return (
                <div className="row">
                    <div className="col s12 m10 offset-m1">
                        <div className="card hoverable">
                            <div className="card-content grey-text">
                                <span className="card-title"><div className="chip lime left">
                                    Node
                                    </div>{data.configuration.node_address}</span>
                            </div>
                            <div className="card-tabs">
                                <ul className="tabs tabs-fixed-width">
                                    <li className="tab"><a className="active" href="#overview">Overview</a></li>
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
                                <div id="configuration">Test 2</div>
                                <div id="memory">Test 3</div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return ('');
        }
    }
}

export default DetailsCard;
