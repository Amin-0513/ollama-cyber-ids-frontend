import React , { useEffect, useState } from 'react';
import axios from 'axios';
import { MapContainer, TileLayer, Marker, Popup, Polyline,Pane} from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Api } from '@mui/icons-material';
import Legend from './legent';


const redMarker = new L.Icon({
    iconUrl: 'https://superstorefinder.net/support/wp-content/uploads/2015/07/m4.png',
   
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34]
  });
  
  const blueMarker = new L.Icon({
    iconUrl: 'https://superstorefinder.net/support/wp-content/uploads/2015/07/m3.png',
    
  iconSize: [30, 45],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34]
  });
  
  const greenMarker = new L.Icon({
    iconUrl: 'https://superstorefinder.net/support/wp-content/uploads/2015/07/m5.png',
   
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34]
  });

const GeoLocaltion=()=>{
  
    const data = [
        { name: 'pivate', latitude: 1.289987, longitude: 103.850281,city:"pivate" },
        { name: 'Pakistan', latitude: 33.721558, longitude: 73.043381 ,city:"pivate"},
        { name: 'United States of America', latitude: 37.7757, longitude: -122.395203,city:"United States of America" },
        { name: 'Canada', latitude: 45.508839, longitude: -73.587807,city:"Canada" },
        { name: 'Ireland', latitude: 53.344151, longitude: -6.267249,city:"Ireland" }
      ];
      const [apiData, setApiData] = useState([]);
    
      useEffect(() => {
        // Function to fetch data from the API
        const fetchData = async () => {
          try {
            // Make the API call
            const response = await axios.get('http://127.0.0.1:5000/api/data');
            // Set the fetched data to the state
            setApiData(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
    // Fetch data initially
    fetchData();

    // Set interval to fetch data every 2 seconds
    const intervalId = setInterval(fetchData, 2000);

    // Clean up function to clear interval when component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to run effect only once when component mounts
    return(
        <div>
           <div style={{backgroundColor: 'rgb(9 9 9 / 62%)', width:'99%',padding:'10px' ,marginTop:'10px', height:'690px', marginLeft:'8px', marginRight:'8px', alignItems:"center", borderRadius:'4px' }}>
           <MapContainer center={[0, 0]} zoom={3} style={{ height: '660px', width: '100%' }}>
        <TileLayer
          url="https://api.maptiler.com/maps/toner-v2/{z}/{x}/{y}.png?key=w6SJZFbyJSihXeP9o5FE"
          
        />
        {apiData.map((item, index) => (
          <div key={index}>
        <Marker key={index}  position={[item.src_latitude, item.src_longitude]}  icon={blueMarker}>
          <Popup key={index} >{item.src_country_name}<br/>{item.src_city} <br/>{item.src_ip}<br/>{item.src_latitude} <br/>{item.src_longitude}</Popup>
        </Marker>
          
           <Marker  key={index} position={[item.des_latitude, item.des_longitude]} des={index} icon={greenMarker}>
           <Popup key={index}>{item.des_country_name}<br/>{item.des_city} <br/>{item.dst_ip}<br/>{item.des_latitude} <br/>{item.des_longitude}</Popup>
         </Marker>
         <Polyline positions={[
        [item.src_latitude, item.src_longitude],
        [item.des_latitude, item.des_longitude]
      ]} 
      color='green'/>
         </div>
        ))}
       

      </MapContainer>

      <Legend/>
         
            </div>
            
                 
        </div>
    )
}
export default GeoLocaltion;
/*
https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png
https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}
import { world_map } from 'world-map.ts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { MapsComponent, LayersDirective, LayerDirective, MarkersDirective, MarkerDirective, Marker, Inject } from '@syncfusion/ej2-react-maps';
export function App() {
    return(
                <MapsComponent >
                <Inject services={[Marker]} />
                    <LayersDirective>
                        <LayerDirective shapeData={world_map}>
                        <MarkersDirective>
                        <MarkerDirective visible={true} shape= "Diamond" height={15} fill="green" width={15}
                                        dataSource={[
                                            { latitude: 37.0000, longitude: -120.0000, name:'California'},
                                            { latitude: 40.7127, longitude: -74.0059, name:"New York" },
                                            { latitude: 42, longitude: -93, name:'Iowa' }
                                        ]}>
                                        </MarkerDirective>
                        <MarkerDirective visible={true} height={10} width={10} fill="blue" shape= "Circle"
                                        dataSource={[
                                            { latitude: 19.228825, longitude: 72.854118, name: "Mumbai"},
                                            { latitude: 28.610001, longitude: 77.230003, name: "Delhi"},
                                            { latitude: 13.067439, longitude: 80.237617, name: "Chennai"}
                                        ]}>
                        </MarkerDirective>
                        </MarkersDirective>
                        </LayerDirective>
                    </LayersDirective>
                </MapsComponent>
    );
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);



*/ 