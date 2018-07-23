import React, { Component } from 'react';
import './style.css';
import SearchNode from '../app-search-node/searchNode';
import Welcome from '../app-welcome/welcome';

class Header extends Component {
    render() {
        return (
            <div className="container">
                <Welcome />
                <SearchNode />
            </div>
        );
    }
}
export default Header;
