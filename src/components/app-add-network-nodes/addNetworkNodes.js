import React, {
    Component
} from 'react';
import axios from 'axios';
import './style.css';
let URL_SCHEMA = require('../../config/urlSchema.json');

class AddNetworkNode extends Component {
    constructor(props) {
        super(props)

        this.state = {
            url: '',
            addBtn: 'disabled',
            nodeUrl: ''
        };
    }

    componentDidMount() {
        this.setState({ nodeUrl: this.props.nodeUrl });
    }

    validateUrl = () => {
        let nodeUrl = document.querySelector('#node').value;
        let urlRegex = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]):[0-9]+$/;
        if (!nodeUrl.match(urlRegex)) {
            this.setState({
                url: 'invalid',
                addBtn: 'disabled'
            });
        } else {
            this.setState({
                url: 'valid',
                addBtn: ''
            });
        }
    };

    addNodeUrl = (event) => {
        event.preventDefault();
        _bt.btProgress.start();
        let self = this;
        let nodeUrl = document.querySelector('#node').value;
        let requestBody = { newNodeUrl: 'http://' + nodeUrl };
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.post(this.state.nodeUrl + URL_SCHEMA.registerAndBroadcastNode, requestBody)
            .then(response => {
                this.props.rerenderChainConfig();
                document.querySelector('#node').value = '';
                _bt.btToast('Node added successfully!', { level: 'success' });
                _bt.btProgress.done();
            })
            .catch(error => {
                _bt.btToast('Node not accessible!', { level: 'error' });
                _bt.btProgress.done();
            });
    };

    render() {
        return (
            <div>
                <span className="card-title">
                    <i className="material-icons left">link</i>
                    Add Network Node URL</span>
                <p>You can add more nodes to your node here.</p>
                <div className="row">
                    <div className="input-field col s10">
                        <input id="node" type="text" className={`validate ${this.state.url}`} onChange={this.validateUrl} />
                        <label htmlFor="node">Node Url</label>
                    </div>
                    <div className="col s2">
                        <a className={`waves-effect btn-floating lime btn ${this.state.addBtn}`} onClick={this.addNodeUrl}>
                            <i className="material-icons">add</i></a>
                    </div>
                </div>
            </div>
        );
    }
}
export default AddNetworkNode;