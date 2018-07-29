/**
 * Import React libraries and CSS
 */
import React, {
    Component
} from 'react';
import './style.css';

class DetailsCard extends Component {
    constructor(props) {
        super(props)
    }

    componentDidUpdate() {
        $('.tooltipped').tooltip();
        $('.tabs').tabs();
    }

    render() {
        return (
            <div className="row">
                <div className="col s12 m9 offset-m2">
                    <div className="card hoverable">
                        <div className="card-content grey-text">
                            <span className="card-title"><div className="chip lime left">
                                Node
                                </div>http://127.0.01:3001</span>
                        </div>
                        <div className="card-tabs">
                            <ul className="tabs tabs-fixed-width">
                                <li className="tab"><a className="active" href="#overview">Overview</a></li>
                                <li className="tab"><a href="#configuration">Configuration</a></li>
                                <li className="tab"><a href="#memory">Memory & Resources</a></li>
                            </ul>
                        </div>
                        <div className="card-content grey lighten-4">
                            <div id="overview">Test 1</div>
                            <div id="configuration">Test 2</div>
                            <div id="memory">Test 3</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DetailsCard;
