import React, {
    Component
} from 'react';
import './style.css';

class AddTransaction extends Component {
    constructor(props) {
        super(props)

        this.state = {
            amount: '',
            receiver: '',
            form: 'hide',
            send: 'disabled',
            clear: ''
        };
    }

    /**
     * Validate amount input
     */
    validateAmount = () => {
        let self = this;
        self.setState({ form: '' });
        let amountValue = document.querySelector('#amount').value;
        if (amountValue && !isNaN(amountValue)) {
            self.setState({
                amount: 'valid',
                send: ''
            });
        } else {
            self.setState({
                amount: 'invalid',
                send: 'disabled'
            });
        }
    };

    /**
     * Validate receiver input
     */
    validateReceiver = () => {
        let self = this;
        self.setState({ form: '' });
        let receiverValue = document.querySelector('#receiver').value;
        if (receiverValue.length === 0 || receiverValue.length <= 3 || receiverValue === undefined || receiverValue === null) {
            self.setState({
                receiver: 'invalid',
                send: 'disabled'
            });
        } else {
            self.setState({
                receiver: 'valid',
                send: ''
            });
        }
    };

    /**
     * Clear the form/inputs
     */
    clear = () => {
        document.querySelector('#amount').value = '';
        document.querySelector('#receiver').value = '';
        this.setState({
            form: 'hide',
            send: 'disabled',
        });
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
                    <div className="input-field col s12">
                        <input id="amount" type="text" className={`validate ${this.state.amount}`} onChange={this.validateAmount} />
                        <label htmlFor="amount">Amount</label>
                    </div>
                    <div className="input-field col s12">
                        <input id="receiver" type="text" className={`validate ${this.state.receiver}`} onChange={this.validateReceiver} />
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
                </div>
            </div>
        );
    }
}

export default AddTransaction;
