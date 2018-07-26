import React, {
    Component
} from 'react';
import './style.css';

class NodeDetails extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.nodeDetails) {
            return (
                <div className="row">
                    <div className="col s12">
                        <div className="card">
                            <div className="card-content grey-text">
                                <span className="card-title">
                                    <div className="chip left lime">Node</div>127.0.0.1:3001
                                </span>
                            </div>
                            <div className="card-action grey-text">
                                <p>I am a very simple card. I am good at containing small bits of information.</p>
                            </div>
                            <div className="card-action">
                                <a href="#">This is a link</a>
                                <a href="#">This is a link</a>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return ('');
        }
    };
}
export default NodeDetails;
