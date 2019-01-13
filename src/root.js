import React from 'react';
import ReactDOM from 'react-dom';
import RangeSlider from './components/RangeSlider';

ReactDOM.render(
    <RangeSlider minimumValue={1950} maximumValue={2000} initialValue={1984} />,
    document.getElementById('root'));
