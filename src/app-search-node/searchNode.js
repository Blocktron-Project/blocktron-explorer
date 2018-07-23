import React, {
  Component
} from 'react';
import './style.css';

class Header extends Component {
  render() {
    return (
      <div className="row">
        <div className="col s12">
          <div className="card">
            <div className="card-content white-text">
              <div className="row">
                <div className="input-field col s8 m10 l11">
                  <input id="search" type="text" class="validate" />
                  <label for="search">Search Node</label>
                </div>
                <a class="waves-effect btn lime white-text"><i class="material-icons">search</i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
