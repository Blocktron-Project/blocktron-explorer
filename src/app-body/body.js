import React, { Component } from 'react';
import './style.css';
import SearchNode from '../app-search-node/searchNode';

class Header extends Component {
    render() {
        return ( 
            <div className="container">
                <SearchNode/>
            </div>
        );
    }
}
export default Header;
