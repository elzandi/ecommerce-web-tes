import React from 'react';

const Button = props => {

    let icon = null;
    if (props.icon !== null) {
        icon = <span><i className={props.icon}></i></span>;
    }

    return(
        <button className={props.btnClass}>
            {icon} {props.name}
        </button>
    );
}

export default Button;