import axios from 'axios';
import React from 'react';
import { GeoJSON, Map, TileLayer } from 'react-leaflet';
import countryData from '../countries.json';

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

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.getStyle = this.getStyle.bind(this);
        this.state = {
            latitude: 0,
            longitude: 0,
            zoom: 1,
            data: null
        };
    }

    getStyle(feature) {
        const yearData = this.state.data[this.props.year];

        return {
            fillColor: getColor(yearData && yearData[feature.properties.ADMIN] || 0),
            weight: 2,
            opacity: 1,
            color: 'white',
            dashArray: '3',
            fillOpacity: 0.7
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8000/api/map').then((response) => {
            const data = {};

            for (let row of response.data) {
                const { pubYear, country } = row;

                if (!data[pubYear]) {
                    data[pubYear] = {};
                }

                if (!data[pubYear][country]) {
                    data[pubYear][country] = 0;
                }

                data[pubYear][country] += 1;
            }

            for (let year in data) {
                for (let country in data[year]) {
                    data[year][country] = Math.log(data[year][country]);
                }
            }

            for (let year in data) {
                let maximum = -1;
    
                for (let country in data[year]) {
                    if (maximum === -1 || data[year][country] > maximum) {
                        maximum = data[year][country];
                    }
                }

                for (let country in data[year]) {
                    data[year][country] = data[year][country] / maximum;
                }
            }

            this.setState({ data });
        });
    }

    render() {
        if (this.state.data === null) {
            return (
                <div style={{ height: 400 }}>
                    Loading Map...
                </div>
            );
        }

        return (
            <Map center={[this.state.latitude, this.state.longitude]} zoom={this.state.zoom}>
                <TileLayer
                    attribution='World map &amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <GeoJSON
                    attribution='GeoJSON &amp;copy Natural Earth <a href="https://datahub.io/core/geo-countries">via Datahub</a>'
                    data={countryData}
                    style={this.getStyle}
                />
            </Map>
          );
    }
};
