import React ,{useState,useEffect} from "react";
import axios from 'axios';
import { MapContainer, TileLayer, Marker, Popup, Polyline,Pane} from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Flex, Progress, Slider, Typography } from 'antd';
import { useParams } from 'react-router-dom'; // Import useParams to get the id from the URL
import './f.css'; // Import CSS file for styles

const Detail = () => {
    const [stepsCount, setStepsCount] = React.useState(5);
    const [stepsGap, setStepsGap] = React.useState(7);
    const [api1,setapi]=React.useState([])
    const { id } = useParams(); 
    const [long, setlong]=React.useState(0)
    const [lit, setlit]=React.useState(0)
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
  
  

    useEffect(() => {
        // Function to fetch data from the API
        const fetchData = async () => {
          try {
            // Make the API call using the id from the URL
            const response = await axios.get(`http://127.0.0.1:5000/api/data2/${id}`);
            // Set the fetched data to the state
            setapi(response.data);
            setlong(api1.src_long)
            setlit(api1.src_lati)
            console.log(api1);

          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        // Fetch data initially
        fetchData();
      }, [id]);

    return(
        <div style={{backgroundColor:'#0f0f0f', width:'99%', padding:'20px' , height:'690px', marginLeft:'8px', marginTop:'20px', marginRight:'8px', alignItems:"center", borderRadius:'4px'}}>
        
        <div style={{width:"1430px",height:'250px',marginLeft:"-20px",marginTop:"-20px"}}>
         <div className="grid-container">
            <div className="grid-item">
            <h3><i>CYBER THREAT INTELLIGENCE</i></h3>








            <div style={{width:"800px", height:"280px", marginLeft:"15px", padding:'10px'}}>
                <h3 ><i>Packet Analysis</i></h3>
                <div className="grid-container" style={{width:"760px", height:"220px", marginLeft:"15px", padding:'10px', fontSize:"18px"}}>
                <div className="grid-item2">
                  <p><b>Source_ipv4: </b> {api1.src_ip}</p>
                  <p ><b>Destination_ipv4: </b> {api1.dst_ip}</p>
                  <p ><b>Source_port: </b> {api1.src_port}</p>
                  <p ><b>Destination_port: </b> {api1.dst_port}</p>
                  <p ><b>Service: </b> {api1.service}</p>
                  
                   </div>
                   <div className="grid-item2">
                   <p ><b>Flag: </b> {api1.flag}</p>
                   <p ><b>Date: </b> {api1.date}</p>
                   <p ><b>Source_loc: </b> {api1.src_country}</p>
                   <p ><b>Destination_loc: </b> {api1.dst_country}</p>
                   <p ><b>Attack Type: </b> {api1.prediction}</p>

                    
                   </div>

                </div>

            </div>
                
                
            </div>
            <div className="grid-item">
            
            <MapContainer center={[0, 0]} zoom={2} style={{ height: '314px' , width: '600px' }}>
                            <TileLayer
                                url="https://api.maptiler.com/maps/toner-v2/{z}/{x}/{y}.png?key=w6SJZFbyJSihXeP9o5FE"
                            />
                            <Marker position={[0, 0]} icon={blueMarker}>
                                <Popup>
                                    {api1.src_country}<br />{api1.src_city}<br />{api1.src_ip}<br />{api1.src_lati}<br />{api1.src_long}
                                </Popup>
                            </Marker>
                            <Marker position={[0, 0]} icon={greenMarker}>
                                <Popup>
                                    {api1.dst_country}<br />{api1.dst_city}<br />{api1.dst_ip}<br />{api1.dst_lati}<br />{api1.dst_long}
                                </Popup>
                            </Marker>
                        </MapContainer>

        

                




            </div>
            <div className="grid-item">
                <h5><i>CVE Description</i></h5>
                <p><i>{api1.description}</i></p>
                
            </div>
            <div className="grid-item">
                <div style={{ width:"560px" ,height:"150px"}}>
                
                <>
                <Flex
                wrap
                gap="middle"
                width='50px'
                style={{
                marginTop: -5,
                marginLeft:0,
                
                
            }}
            >
        
     
      </Flex>
    </>
                    
                </div>
                <div style={{ width:"560px" ,height:"150px", marginTop:"3px"}}>
                <h5><i>Exploited CVE-ID</i></h5>
                {api1.cve_id && api1.cve_id.length > 0 ? (
        <ul>
            {api1.cve_id.map((cve, index) => (
                <li key={index}>{cve}</li>
            ))}
        </ul>
    ) : (
        <p>No CVE IDs available</p>
    )}

                    
                </div>


                
            </div>
         </div>




                
            </div>
        

         

        
      </div>
    )



};

export default Detail;
