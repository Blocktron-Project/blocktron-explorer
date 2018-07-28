import React, {
    Component
} from 'react';
import './style.css';
import axios from 'axios';

class Blockchain extends Component {
    constructor(props) {
        super(props)
        this.state = {
            chainData: ''
        };
    }

    componentWillMount() {
        if (this.props && this.props.node) {
            let nodeUrl = this.props.node;
            axios.get(nodeUrl + '/blockchain')
                .then((response) => {
                    this.setState({ chainData: response.data });
                })
                .catch((error) => {
                    _bt.btToast('Node not accessible!', { level: 'error' });
                });
        }
    }

    render() {
        if (this.state.chainData) {
            return (
                <div class="row">
                    <div class="col s12 m5">
                        <div class="card-panel teal">
                            <span class="white-text">I am a very simple card. I am good at containing small bits of information.</span>
                        </div>
                    </div>
                </div>

            );
        } else {
            return ('');
        }
    }
}

export default Blockchain;
