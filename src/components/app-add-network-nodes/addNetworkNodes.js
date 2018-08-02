import React, {
    Component
} from 'react';
import './style.css';

class AddNetworkNode extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <span className="card-title">
                    <i className="material-icons left">link</i>
                    Add Network Node URL</span>
                <p>You can add more nodes to your node here.</p>
                <div className="row">
                    <div className="input-field col s10">
                        <input id="node" type="text" className="validate" />
                        <label htmlFor="node">Node Url</label>
                    </div>
                    <div className="col s2">
                    <a class="waves-effect btn-floating lime btn">
                    <i class="material-icons">add</i></a>
                    </div>
                </div>
            </div>
        );
    }
}
export default AddNetworkNode;