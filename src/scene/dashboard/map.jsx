
import React , { useEffect, useState } from 'react';
import axios from 'axios';
import { MapContainer, TileLayer, Marker, Popup, Polyline,Pane} from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Api } from '@mui/icons-material';
const redMarker = new L.Icon({
    iconUrl: 'https://superstorefinder.net/support/wp-content/uploads/2015/07/m4.png',
   
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34]
  });
  
  const blueMarker = new L.Icon({
    iconUrl: 'https://superstorefinder.net/support/wp-content/uploads/2015/07/m3.png',
    
  iconSize: [15, 15],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34]
  });
  
  const greenMarker = new L.Icon({
    iconUrl: 'https://superstorefinder.net/support/wp-content/uploads/2015/07/m5.png',
   
    iconSize: [10, 10],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34]
  });

const Mapdisplay=()=>{
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
  }, []);

  
    return(
        <div>
            <MapContainer center={[0, 0]} zoom={-2} style={{ height: '250px', width: '500px' }}>
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
        
         </div>
        ))}
       

      </MapContainer>

        </div>
    )

}

export default Mapdisplay;