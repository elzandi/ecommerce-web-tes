import React from 'react';
import { Link } from 'react-router-dom';

import '../../../assets/sass/header.sass';

const Header = props => {

    return (
        <div className="fixed-nav header">
            <Link to="/home">
                <span>
                    <i className="fas fa-long-arrow-alt-left"></i>
                </span>
            </Link>
            {props.type === 'search' ? (
                <span>
                    <i className="fas fa-search icon"></i>
                    <input ref={props.inputRef} className="form-search" type="text" onChange={props.onEnteredSearch} />
                </span>
            ):(
                <p className="header-title">Purchase History</p>
            )}
        </div>
    );
}

export default Header;