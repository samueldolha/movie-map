import React from 'react';
import ReactDOM from 'react-dom';
import MapContainer from './components/MapContainer';

ReactDOM.render(
    <MapContainer minimumYear={1950} maximumYear={2000} initialYear={1984} />,
    document.getElementById('root'));
