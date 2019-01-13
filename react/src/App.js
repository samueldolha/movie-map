import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup, GeoJSON} from 'react-leaflet';
import countryData from './countries.js'

const data = { 1975: { Canada: .6 } }

function getColor(p) {
  return p > 1 ? '#800026' :
           p > .85  ? '#BD0026' :
           p > .70  ? '#E31A1C' :
           p > .55  ? '#FC4E2A' :
           p > .40   ? '#FD8D3C' :
           p > .25  ? '#FEB24C' :
           p > .10  ? '#FED976' :
                      '#FFEDA0';
}

function style(feature) {
  return {
    fillColor: getColor(data['1975'][feature.properties.ADMIN]),
    weight: 2,
    opacity: 1,
    color: 'white',
    dashArray: '3',
    fillOpacity: 0.7
  };
}

type State = {
  lat: number,
  lng: number,
  zoom: number,
}

export default class App extends Component<{}, State> {
  state = {
    lat: 51.505,
    lng: -0.09,
    zoom: 13,
  }

  render() {
    const position = [this.state.lat, this.state.lng]
    return (
      <Map center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <GeoJSON data={countryData} style={style}></GeoJSON>
      </Map>
    )
  }
}