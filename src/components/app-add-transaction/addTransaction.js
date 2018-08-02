import React, {
    Component
} from 'react';
import './style.css';

class AddTransaction extends Component {
    constructor(props){
        super(props)

        this.state = {
            amount: '',
            receiver: '',
            form: 'hide',
            send: 'disabled',
            clear: ''
        };
    }

    validate = () =>{
        this.setState({form: ''});
        let amount = document.querySelector('#amount').value;
        let receiver = document.querySelector('#receiver').value;

        let validAmount = ((amount.length === 0 || amount === undefined || amount === null || amount === 0) ? false : true);
        let validReceiver = ((receiver.length === 0 || receiver.length <= 3 || receiver === undefined || receiver === null) ? false : true);

        if(!validAmount){
            this.setState({amount: 'invalid'});
        }
        if(!validReceiver){
            this.setState({receiver: 'invalid'});
        }
    };

    clear = () => {
         document.querySelector('#amount').value = '';
         document.querySelector('#receiver').value = '';
         return;
    };

    render() {
        return (
            <div>
                <span className="card-title">
                    <i className="material-icons left">add_box</i>
                    Add Transaction</span>
                <p>You can add more transactions here.</p>
                <div className="row">
                <form id="form" onChange={this.validate}>
                <div className="input-field col s12">
                        <input id="amount" type="text" className={`validate ${this.state.amount}`} />
                        <label htmlFor="amount">Amount</label>
                    </div>
                    <div className="input-field col s12">
                        <input id="receiver" type="text" className={`validate ${this.state.receiver}`} />
                        <label htmlFor="receiver">Receiver</label>
                    </div>
                    <div className="input-field col s12">
                        <input disabled value="00BLOCKTRON" id="sender" type="text" className="validate" />
                        <label htmlFor="sender" className="active">Sender</label>
                    </div>
                    <div className={`col s12 form-control clearfix ${this.state.form}`}>
                        <a className={`waves-effect btn lime right ${this.state.send}`}>
                            <i className="material-icons left">send</i>Off you go!</a>
                        <a className={`waves-effect btn orange lighten-3 right ${this.state.clear}`} onClick={this.clear}>
                            <i className="material-icons left">clear_all</i>Clear</a> &nbsp;
                    </div>
                </form>
                </div>
            </div>
        );
    }
}

export default AddTransaction;
