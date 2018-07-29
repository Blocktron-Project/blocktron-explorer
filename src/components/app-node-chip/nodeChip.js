/**
 * Import React libraries and CSS
 */
import React, {
    Component
} from 'react';
import './style.css';

class NodeChip extends Component {
    constructor(props) {
        super(props)
    }

    componentDidUpdate(){
        $('.tooltipped').tooltip();
    }

    render() {
        if (this.props && this.props.nodeDetails && this.props.nodeDetails.data) {
            let data = this.props.nodeDetails.data;
            return (
                <div className="center">
                    <div className="chip lime lighten-3 bold-text tooltipped" data-position="bottom" data-tooltip="Click to view details">
                        <img src="img/node.png" alt="Contact Person"/>
                        {data.configuration.node_address}
                        <i className="close material-icons">close</i>
                    </div>
                </div>
            );
        }
        else {
            return ('');
        }
    }
}
export default NodeChip;
