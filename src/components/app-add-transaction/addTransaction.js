import React, {
    Component
} from 'react';
import './style.css';

class AddTransaction extends Component {
    render() {
        return (
            <div>
                <span className="card-title">
                    <i className="material-icons left">add_box</i>
                    Add Transaction</span>
                <p>You can add more transactions here.</p>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="amount" type="text" className="validate" />
                        <label htmlFor="amount">Amount</label>
                    </div>
                    <div className="input-field col s12">
                        <input id="receiver" type="text" className="validate" />
                        <label htmlFor="receiver">Receiver</label>
                    </div>
                    <div className="input-field col s12">
                        <input disabled value="00BLOCKTRON" id="sender" type="text" className="validate" />
                        <label htmlFor="sender" className="active">Sender</label>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddTransaction;
