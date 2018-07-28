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
        this.state = {};
    }

    /**
     * componentDidMount lifecycle method
     * Runs once the component is mounted to the DOM after rendering
     */
    componentDidMount() {
        $('.tooltipped').tooltip();
    }

    /**
     * The main render method to render the DOM
     */
    render() {
        return (
            <div className="center">
                <a className="waves-effect lime btn tooltipped" data-position="bottom" data-tooltip="Add new node to explore">
                    <i className="material-icons left">add</i>Add Node</a>
                <div className="row ">
                    <div className="input-field col s10 m6 offset-m3">
                        <input id="url" type="text" className="validate" />
                        <label htmlFor="url">Search Node here..</label>
                    </div>
                    <div className="col s2">
                        <a className="btn-floating lime disabled"><i className="material-icons">add</i></a>
                    </div>
                </div>
            </div>
        );
    }
}
export default AddNode;
