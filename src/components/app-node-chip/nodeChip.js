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

    componentDidUpdate() {
        $('.tooltipped').tooltip();
    }

    handleChipClick = () => {
        let node = this.props.nodeDetails.data;
        this.props.handleChipClick(node);
    };

    render() {
        if (this.props && this.props.nodeDetails && this.props.nodeDetails.data) {
            let data = this.props.nodeDetails.data;
            return (
                <div className="chip lime lighten-3 bold-text z-depth-2 tooltipped" data-position="bottom" data-tooltip="Click to view details" onClick={this.handleChipClick}>
                    <img src="img/node.png" alt="Contact Person" />
                    {data.configuration.node_address}
                    <i className="close material-icons">cancel</i>
                </div>
            );
        }
        else {
            return ('');
        }
    }
}
export default NodeChip;
