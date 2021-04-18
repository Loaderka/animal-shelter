import React from 'react';

import './Dot.scss';

const Dot = ({ isActive }) => {
    return (
        <span
            style={{
                display: 'inline-block',
                height: isActive ? '8px' : '5px',
                width: isActive ? '8px' : '5px',
                background: '#000'
            }}
        ></span>
    );
};

export default Dot;
