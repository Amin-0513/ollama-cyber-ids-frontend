import React , { useEffect, useState } from 'react';
import axios from 'axios';
import './f.css'; // Import CSS file for styles
import {Link,Route,Routes,Outlet} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  DeleteOutlined,
  EditOutlined,
  FundViewOutlined,
  EyeFilled,
  EyeOutlined
 } from '@ant-design/icons';
 import {
  Form,
  InputNumber,
  Cascader,
  Select,
  DatePicker,
  Checkbox,
  AutoComplete,
} from 'antd';
import { Button} from 'antd';
import {  Modal,Table } from 'antd';
import { Input } from 'antd';
import { Row, Col } from 'antd';
//import { Edituser } from './edituser';
//import { isDisabled } from '@testing-library/user-event/dist/utils';
import { Footer } from 'antd/lib/layout/layout';
import Password from 'antd/lib/input/Password';

import { refreshFilteredColsUid } from '@syncfusion/ej2-react-grids';
import FormItem from 'antd/lib/form/FormItem';
//my work
import { useNavigate } from "react-router-dom";
//import { NoEncryption } from '@material-ui/icons';


const { Search } = Input;
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};




const Dashboard=()=>{
  const navigate = useNavigate();
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
          const response = await axios.get('http://127.0.0.1:5000/api/data33');
          // Set the fetched data to the state
          setApiData3(response.data);
          console.log(apiData3)
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


const columns = [
  {
    title: 'packet_id',
    width:  120,
    dataIndex: 'packet_id',
    key: 'packet_id',
    fixed: 'left',
  },
  {
    title: 'Source_ipv4',
    width: 90,
    dataIndex: 'Source_ipv4',
    key: 'Source_ipv4',
    fixed: 'left',
  },
  {
    title: 'Des_ipv4',
    width: 90,
    dataIndex: 'Des_ipv4',
    key: 'Des_ipv4',
    fixed: 'left',
  },
  {
    title: 'Source_port',
    width: 100,
    dataIndex: 'Source_port',
    key: 'Source_port',
    fixed: 'left',
  },
  {
    title: 'Des_port',
    width: 80,
    dataIndex: 'Des_port',
    key: 'Des_port',
    fixed: 'left',
  },
  {
    title: 'Prediction',
    width: 80,
    dataIndex: 'Prediction',
    key: 'Prediction',
    fixed: 'left',
  },
  {
    title: 'Date',
    width: 140,
    dataIndex: 'Date',
    key: 'Date',
    fixed: 'left',
  },
  
  {
    title: 'Action',
    dataIndex: 'Action',
    key:'Action',
    fixed: 'right',
    width: 80,
  }
  
];
const data=apiData3.map(row=>({
  packet_id: row.id,
  Source_ipv4:row.src_ip,
  Des_ipv4:row.dst_ip,
  Source_port:row.src_port,
  Des_port:row.dst_port,
  Prediction:row.prediction,
  Date:row.date,
  Action:<a>
   <a onClick={() =>{
     //editinguser(ro)

//my work mmm
   console.log(`/a/${row.id}`);
   navigate(`/edit/${row.id}`);
   
    }
   } 
   >
    <EditOutlined style={{color:"green", marginLeft:"6px"}}/>
    </a>
      </a>

}))

const rowClassName = (record) => {
  return record.Prediction !== 'normal' ? 'red-row' : '';
};


return(
     <div style={{backgroundColor:'#0f0f0f', width:'99%', padding:'20px' , height:'690px', marginLeft:'8px', marginTop:'20px', marginRight:'8px', alignItems:"center", borderRadius:'4px'}}>
         <h1><i>DATA PACKETS</i></h1>
         <Table style={{marginTop:'2px'}} columns={columns} dataSource={data} scroll={{ x: 500 }} rowClassName={rowClassName}></Table>

          

         
       </div>
        
    )
}
export default Dashboard;