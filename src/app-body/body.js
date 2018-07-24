import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import SearchNode from '../app-search-node/searchNode';
import Welcome from '../app-welcome/welcome';

class Header extends Component {
    constructor(){
        super();
        this.hide = this.hide.bind(this);
    }

    hide(){
        let mountNode = ReactDOM.findDOMNode(this.refs.hideme);
        mountNode.classList += ' hide';
    };

    render() {
        return (
            <div className="container" onClick={this.hide}>
                <Welcome ref="hideme"/>
                <SearchNode />
            </div>
        );
    }
}
export default Header;
