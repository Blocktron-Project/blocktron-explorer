import React, {
    Component
} from 'react';
import './style.css';

class AddTransaction extends Component {
    render() {
        return (
            <div className="col s12 m10 offset-m1">
                <div className="card grey lighten-3">
                    <div className="card-content grey-text">
                        <span className="card-title"><i className="material-icons left">add_box</i> Add Transaction</span>
                        <p>You can add more transactions here.</p>
                    </div>
                    <div className="card-action">
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
                    <div className="card-action">
                        <a href="#">This is a link</a>
                        <a href="#">This is a link</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddTransaction;
