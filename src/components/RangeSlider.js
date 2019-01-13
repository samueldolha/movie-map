import React from 'react';

export default (props) => (
    <div>
        <input
            type="range"
            min={props.minimumValue}
            max={props.maximumValue}
            value={props.currentValue}
            onChange={props.onChange}
        />
        <div>{props.currentValue}</div>
    </div>
);