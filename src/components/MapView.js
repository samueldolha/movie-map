import React from 'react';
import { GeoJSON, Map, TileLayer } from 'react-leaflet';
import countryData from '../countries.json';

const data = { 1975: { Canada: .6 } }

const getColor = (intensity) => {
    if (intensity > 1) {
        return '#800026';
    }

    if (intensity > 0.85) {
        return '#BD0026';
    }

    if (intensity > 0.70) {
        return '#E31A1C';
    }

    if (intensity > 0.55) {
        return '#FC4E2A';
    }

    if (intensity > 0.40) {
        return '#FD8D3C';
    }

    if (intensity > 0.25) {
        return '#FEB24C';
    }

    if (intensity > 0.10) {
        return '#FED976';
    }

    return '#FFEDA0';
}

const getStyle = (feature) => ({
    fillColor: getColor(data['1975'][feature.properties.ADMIN]),
    weight: 2,
    opacity: 1,
    color: 'white',
    dashArray: '3',
    fillOpacity: 0.7
});

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = { latitude: 0, longitude: 0, zoom: 1 };
    }

    render() {
        return (
            <Map center={[this.state.latitude, this.state.longitude]} zoom={this.state.zoom}>
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <GeoJSON
                    attribution='&amp;copy <a href="https://datahub.io/core/geo-countries">Country GeoJSON</a>'
                    data={countryData}
                    style={getStyle}
                />
            </Map>
          );
    }
};
