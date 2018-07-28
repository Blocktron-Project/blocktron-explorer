/**
 * Import React libraries and CSS
 */
import React, {
    Component
} from 'react';
import './style.css';

/**
 * @class AddNode
 * @extends Component
 */
class AddNode extends Component {

    /**
     * Constructor to initialize the parent React Component class
     * @param {*} props - The input to the component
     */
    constructor(props) {
        super(props)
        this.state = {
            addNodeBtnClass: '',
            inputClass: 'hide',
            urlInput: '',
            addButton:'disabled'
        };
    }

    /**
     * componentDidMount lifecycle method
     * Runs once the component is mounted to the DOM after rendering
     */
    componentDidMount() {
        $('.tooltipped').tooltip();
    }

    handleAddNode = () => {
        this.setState({
            addNodeBtnClass: 'disabled',
            inputClass: ''
        });
    };

    validateUrl = () => {
        let input = document.querySelector('#url');
        let url = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]):[0-9]+$/;
        if (input.value.match(url)) {
          this.setState({
            urlInput: 'valid',
            addButton: ''
          });
        } else {
          this.setState({
            urlInput: 'invalid',
            addButton: 'disabled'
          });
        }
    }
    /**
     * The main render method to render the DOM
     */
    render() {
        return (
            <div className="center">
                <a className={`waves-effect lime btn tooltipped ${this.state.addNodeBtnClass}`} onClick={this.handleAddNode} data-position="bottom" data-tooltip="Add new node to explore">
                    <i className="material-icons left">add</i>Add Node</a>
                <div className={`row ${this.state.inputClass}`}>
                    <div className="input-field col s10 m6 offset-m3">
                        <input id="url" type="text" className={`validate ${this.state.urlInput}`} onChange={this.validateUrl}/>
                        <label htmlFor="url">Search Node here..</label>
                    </div>
                    <div className="col s2">
                        <a className={`btn-floating lime ${this.state.addButton}`}><i className="material-icons">add</i></a>
                    </div>
                </div>
            </div>
        );
    }
}
export default AddNode;
