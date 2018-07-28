import React, {
    Component
} from 'react';
import './style.css';
import axios from 'axios';

class Blockchain extends Component {
    constructor(props){
        super(props)
        this.state = {
            chainData: ''
        };
    }

    componentWillMount(){
        if(this.props && this.props.node){
            let nodeUrl = this.props.node;
            axios.get(nodeUrl+'/blockchain')
            .then((response)=>{
               this.state.chainData = response.data;
            })
            .catch((error) => {
                _bt.btToast('Node not accessible!', { level: 'error' });
            });
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col s12 m6 l6">
                    <div className="card">
                        <div className="card-content grey-text">
                            <span className="card-title">Blockchain</span>
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
    }
}

export default Blockchain;
