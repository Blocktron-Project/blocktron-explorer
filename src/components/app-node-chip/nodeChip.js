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

    render() {
        if (this.props && this.props.nodeDetails) {
            return (
                <div className="center">
                    <div className="chip lime lighten-3 bold-text">
                        <img src="img/node.png" alt="Contact Person" />
                        http://127.0.0.1:3001
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
