import React , { useEffect, useState } from 'react';
import axios from 'axios';
import './f.css'; // Import CSS file for styles
import Mapdisplay from './map';
import Chartbar from './chartbar';

const Dashboard=()=>{
    const [apiData3, setApiData3] = useState([]);
    const [apiData2, setApiData2] = useState([]);
    const [apiData4, setApiData4] = useState([]);
    const [apiData5, setApiData5] = useState([]);

    const [apiData6, setApiData6] = useState([]);


    //NORMAl
    useEffect(() => {
      // Function to fetch data from the API
      const fetchData = async () => {
        try {
          // Make the API call
          const response = await axios.get('http://127.0.0.1:5000/api/predictions/count_normal');
          // Set the fetched data to the state
          setApiData3(response.data);
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
}, []); // Empty dependency array to run effect only once when component mount
//DDos    
useEffect(() => {
    // Function to fetch data from the API
    const fetchData2 = async () => {
      try {
        // Make the API call
        const response = await axios.get('http://127.0.0.1:5000/api/predictions/count_ddos');
        // Set the fetched data to the state
        setApiData2(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

// Fetch data initially
fetchData2();

// Set interval to fetch data every 2 seconds
const intervalId = setInterval(fetchData2, 2000);

// Clean up function to clear interval when component unmounts
return () => clearInterval(intervalId);
}, []);

//Probe

useEffect(() => {
    // Function to fetch data from the API
    const fetchData3 = async () => {
      try {
        // Make the API call
        const response = await axios.get('http://127.0.0.1:5000/api/predictions/count_probe');
        // Set the fetched data to the state
        setApiData4(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

// Fetch data initially
fetchData3();

// Set interval to fetch data every 2 seconds
const intervalId = setInterval(fetchData3, 2000);

// Clean up function to clear interval when component unmounts
return () => clearInterval(intervalId);
}, []);


//U@L

useEffect(() => {
    // Function to fetch data from the API
    const fetchData4 = async () => {
      try {
        // Make the API call
        const response = await axios.get('http://127.0.0.1:5000/api/predictions/count_u2l');
        // Set the fetched data to the state
        setApiData5(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

// Fetch data initially
fetchData4();

// Set interval to fetch data every 2 seconds
const intervalId = setInterval(fetchData4, 2000);

// Clean up function to clear interval when component unmounts
return () => clearInterval(intervalId);
}, []);

//r2l


useEffect(() => {
    // Function to fetch data from the API
    const fetchData5 = async () => {
      try {
        // Make the API call
        const response = await axios.get('http://127.0.0.1:5000/api/predictions/count_probe');
        // Set the fetched data to the state
        setApiData6(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

// Fetch data initially
fetchData5();

// Set interval to fetch data every 2 seconds
const intervalId = setInterval(fetchData5, 2000);

// Clean up function to clear interval when component unmounts
return () => clearInterval(intervalId);
}, []);
return(
     <div style={{ width:'99%',padding:'50px' , height:'100px', marginLeft:'8px', marginTop:'10px', marginRight:'8px', alignItems:"center", borderRadius:'4px'}}>
         <div style={{width:"1430px",height:'250px',marginLeft:"-52px",marginTop:"-52px"}}>
         <div className="grid-container">
            <div className="grid-item">
                
                
            </div>
            <div className="grid-item">

            <div className="grid-container1">
            <div className="grid-item1">
                <h1 style={{marginTop:"-2px", color:'#DE3163'}}>Normal<br></br>{apiData3.count}</h1>

                
                
            </div>
            <div className="grid-item1">
            <h1 style={{marginTop:"-2px", color:'#FFC300'}}>DDos<br></br>{apiData2.count}</h1>

            </div>
            <div className="grid-item1">

            <h1 style={{marginTop:"-2px", color:'#169AA0'}}>R2L<br></br>{apiData6.count}</h1>

            </div>
            <div className="grid-item1">
            <h1 style={{marginTop:"-2px", color:'#1616A0'}}>Probe<br></br>{apiData4.count}</h1>

            </div>
            <div className="grid-item1">
            <h1 style={{marginTop:"-2px", color:'#4A0B65'}}>U2L<br></br>{apiData5.count}</h1>

            </div>
            </div>
                




            </div>
            <div className="grid-item">


                <Mapdisplay/>
            </div>
         </div>




                
            </div>
            </div>
        
    )
}
export default Dashboard;