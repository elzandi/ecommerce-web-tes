import React from 'react';

const MenuItem = props => {
    return props.menus.map((item, key) => {
        return(
            <div className="menu-item" key={key}>
                <i className={item.icon}></i>
                <div className="name">
                    {item.title}
                </div>
            </div>
        );
    });
};

export default MenuItem;