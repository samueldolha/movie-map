import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import { VectorMap } from "react-jvectormap"
  
  class Game extends React.Component {
    render() {
        let mapData = {
            CN: 100000,
            IN: 9900,
            SA: 86,
            EG: 70,
            SE: 0,
            FI: 0,
            FR: 0,
            US: 20,
          };
  
      return (
        <VectorMap
        map={"world_mill"}
        backgroundColor="transparent" //change it to blue !!!
        zoomOnScroll={false}
        containerStyle={{
          width: "100%",
          height: "520px"
        }}
  
        //onRegionClick={handleClick}  //gets the country code
        containerClassName="map"
        regionStyle={{
          initial: {
            fill: "#e4e4e4",
            "fill-opacity": 0.9,
            stroke: "none",
            "stroke-width": 0,
            "stroke-opacity": 0
          },
          hover: {
            "fill-opacity": 0.8,
            cursor: 'pointer'
          },
          selected: {
            fill: '#2938bc'  //what colour clicked country will be
          },
          selectedHover: {
          }      
        }}
        regionsSelectable={true}
        series={{
          regions: [
            {
              values: mapData,  //this is your data
              scale: ["#146804", "#ff0000"],  //your color game's here
              normalizeFunction: "polynomial"
            }
          ]
        }}
      />
      );
    }
  }

  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  