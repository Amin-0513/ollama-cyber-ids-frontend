import {Pane } from 'react-leaflet';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import React , { useEffect, useState } from 'react';
import axios from 'axios';

const Legend = () => {
    const mystyle = {
        container: {
          display: 'flex', /* Use flexbox layout */
          
        },
        
        box: {
          width: '897px', /* Adjust width as needed */
          height: '225px', /* Adjust height as needed */
          backgroundColor: 'black', /* Set background color */
          margin:0,
          opacity:0.9
        },
        box1: {
            width: '286px', /* Adjust width as needed */
            height: '225px', /* Adjust height as needed */
            backgroundColor: 'black', /* Set background color */
            margin:0,
            opacity:0.9
          },
          box2: {
            width: '220px', /* Adjust width as needed */
            height: '260px', /* Adjust height as needed */
            backgroundColor: 'black', /* Set background color */
            margin:0,
            opacity:0.9,
            overflowY: 'auto', // Enable vertical scrollbar
            
          },
        
      };

      const tableStyle = {
        width: '900px',
        border: '2px solid white',
        borderCollapse: 'collapse'
      };
      const tableStyle1= {
        width: '240px',
        border: '2px solid white',
        borderCollapse: 'collapse'
      };

      const tableStyle2= {
        width: '220px',
        border: '2px solid white',
        borderCollapse: 'collapse'
      };
      const thStyle = {
        backgroundColor: 'red',
        color: 'white',
        border: '2px solid black',
        padding: '8px',
        opacity:0.9,
      };
    
      const tdStyle = {
        backgroundColor: 'white',
        color: 'black',
        border: '2px solid black',
        padding: '8px',
        opacity:0.9
      };
      const thStyle1 = {
        backgroundColor: 'red',
        width:'200px',
        color: 'white',
        border: '2px solid black',
        padding: '8px',
        opacity:0.9
      };
    
      const tdStyle1 = {
        backgroundColor: 'white',
        color: 'black',
        border: '2px solid black',
        padding: '8px',
        opacity:0.9
      };
      const divStyle = {
        overflowX: 'hidden', // Disable horizontal scrolling
        overflowY: 'auto', // Enable vertical scrolling
        maxHeight: '400px' // Set max height for vertical scrolling
      };
    

      const [apiData, setApiData] = useState([]);
      const [apiData1, setApiData1] = useState([]);
      const [apiData2, setApiData2] = useState([]);

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
    
      useEffect(() => {
        // Function to fetch data from the API for distant cities
        const fetchDistantCities = async () => {
          try {
            // Make the API call
            const response = await axios.get('http://127.0.0.1:5000/api/distant_cities');
            // Set the fetched data to the state
            setApiData1(response.data);
            console.log(response.data);
          } catch (error) {
            console.error('Error fetching distant cities:', error);
          }
        };
    
        // Fetch distant cities initially
        fetchDistantCities();
    
        // Set interval to fetch distant cities every 2 seconds
        const intervalId = setInterval(fetchDistantCities, 2000);
    
        // Clean up function to clear interval when component unmounts
        return () => clearInterval(intervalId);
      }, []); // Empty dependency array to run effect only once when component mounts
    
/////2 No

useEffect(() => {
    // Function to fetch data from the API for distant cities
    const fetchDistantCities2 = async () => {
      try {
        // Make the API call
        const response = await axios.get('http://127.0.0.1:5000/api/distant_country');
        // Set the fetched data to the state
        setApiData2(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching distant cities:', error);
      }
    };

    // Fetch distant cities initially
    fetchDistantCities2();

    // Set interval to fetch distant cities every 2 seconds
    const intervalId = setInterval(fetchDistantCities2, 2000);

    // Clean up function to clear interval when component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to run effect only once when component mounts

      
    return (
        <pane zIndex={500}>
        <div style={{ position: 'fixed', opacity:0.8, width:200, bottom: '550px', marginLeft: '1100px', zIndex: 1000,left: '200px', backgroundColor: 'black', padding: '10px', borderRadius: '5px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
        <center>
        <h3>Legend</h3>
        </center>
        <div>
        <span style={{ backgroundColor: 'red', width: '20px', height: '20px', display: 'inline-block', marginRight: '5px', borderRadius: '50%' }}></span>          Source
        </div>
        <div>
        <span style={{ backgroundColor: '#efa51e', width: '20px', height: '20px', display: 'inline-block', marginRight: '5px', borderRadius: '50%' }}></span>
          Destination
        </div>
        {/* Add more legend items as needed */}
      </div>


      <div style={{ position: 'fixed', opacity:0.9, width:1420, height:240, bottom: '23px', marginLeft: '-100px', zIndex: 1000,left: '200px', backgroundColor: 'black', padding: '10px', borderRadius: '5px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
      <div style={mystyle.container}>
    <div style={mystyle.box1}>


    <div style={divStyle}>
    <table style={tableStyle1}>
      <thead>
        <tr>
          <th style={thStyle}>src_country(city)</th>
          <th style={thStyle}>des_country(city)</th>
        </tr>
      </thead>
      <tbody>
      {apiData.map((item, index) => (
        <tr key={index}>
          <td style={tdStyle}>{item.src_country_name}({item.src_city})</td>
          <td style={tdStyle}>{item.des_country_name}({item.des_city})</td>
     
        </tr>
        ))}
      </tbody>
    </table>
</div>




    </div>
    <div style={mystyle.box2}>

    <div style={divStyle}>
        <div>
    <table style={tableStyle2}>
      <thead>
        <tr>
          <th style={thStyle}>src_country----Hits</th>
         
        </tr>
      </thead>
      <tbody>
        <tr>
        <td style={tdStyle}>
        <ul>
        {Object.entries(apiData1).map(([city, count]) => (
          <li key={city}>
            {city}: {count}
          </li>
        ))}
      </ul>
      </td>
      </tr>
 
      </tbody>
    </table>

      <table style={tableStyle2}>
      <thead>
        <tr>
          <th style={thStyle}>des_country----Hits</th>
         
        </tr>
      </thead>
      <tbody>
        <tr>
        <td style={tdStyle}>
        <ul>
        {Object.entries(apiData2).map(([city, count]) => (
          <li key={city}>
            {city}: {count}
          </li>
        ))}
      </ul>
      </td>
      </tr>
 
      </tbody>
    </table>



    </div>
</div>










    </div>
    <div style={mystyle.box}>
    <div style={divStyle}>
    <table style={tableStyle}>
      <thead>
        <tr>
          <th style={thStyle}>src_country</th>
          <th style={thStyle}>src_ipaddress</th>
          <th style={thStyle}>des_country</th>
          <th style={thStyle}>des_ipaddress</th>
          <th style={thStyle}>Services</th>
          <th style={thStyle1}>Date</th>
        </tr>
      </thead>
      <tbody>
      {apiData.map((item, index) => (
        <tr key={index}>
          <td style={tdStyle}>{item.src_country_name}</td>
          <td style={tdStyle}>{item.src_ip}</td>
          <td style={tdStyle}>{item.des_country_name}</td>
          <td style={tdStyle}>{item.dst_ip}</td>
          <td style={tdStyle}>{item.service}</td>
          <td style={tdStyle1}>{item.date}</td>
        </tr>
        ))}
      </tbody>
    </table>
</div>

    </div>
</div>
      </div>

      </pane>



    );
  };
export default Legend;
