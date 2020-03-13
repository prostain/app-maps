import React, { useState,useEffect } from 'react';
import { render } from 'react-dom'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

import Button from '@material-ui/core/Button';


const MapPage = () => {


  const [pos, setPos] = useState([]);
  
  const addMarker = (e) => {
    console.log(pos)
    const markers = e.latlng
          setPos(prev => {
            prev.push(markers)
            return prev;})
            setPos({markers})
  }


    return (
        <Map onclick={ addMarker}  center={[51.505, -0.09]} zoom={13}>
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
    />
    
    {pos.map((position, key) =>
    <Marker key={`marker-${key}`} position={position}>
      <Popup>A pretty CSS3 popup.<br />{position}
      <Button variant="contained" color="primary"onClick={()=>
      {
        pos.splice({key})

      console.log(pos)
    }}>Supprimer</Button>
      </Popup>
    </Marker>
    )}
  </Map>
    
    );
};


export default MapPage;