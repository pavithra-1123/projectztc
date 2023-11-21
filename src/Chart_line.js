
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useRef, useState} from 'react';
import {  Dropdown} from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';
import { Line } from 'react-chartjs-2';
import {Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'; 
  import {
    Box,
    Divider,
    Grid,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow, 
  } from "@mui/material";
  // import { manageOptions, monthList } from "./utils/chartUtils";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
  );


export const My_Chartpage=()=> 
{

  const data = {
    labels: ["09", "10", "11", "12", "13", "14", "15", "16", "17", "18"],
    datasets: [
      {
        data: [33, 53, 85, 41, 44, 65, 33, 53, 85, 41, 44, 65],
        fill: false,
        borderColor: "green",
        width:'100%',
        tension: 0.4,
        pointBorderColor: "transparent",
        boxSizing: "border-box",
      },
    ],
  };

  const options = {
    elements: {
      bar: {
        borderWidth: 30,
        boxSizing: "border-box",
      },
    },
    plugins: {
      legend: false,
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    },
  };

  const databar = {
    labels: [
      "Older",
      "Jan 01-08",
      "Jan 09-16",
      "Jan 17-24",
      "Jan 25-31",
      "Future",
    ],
    datasets: [
      {
        data: [10, 40, 80, 65, 30, 50],
        fill: false,
        borderColor: "transparent",
        backgroundColor: "green",
        tension: 0.4,
        borderWidth: 20,
      },
    ],
  };

  const databar3 = {
    labels: [
      "August",
      "September",
      "October",
      "November",
      "December",
      "January",
    ],
    datasets: [
      {
        data: [20, 30, 60, 45, 30, 15],
        fill: false,
        borderColor: "transparent",
        backgroundColor: "green",

        borderWidth: 25,
      },
    ],
  };

 

  const tableData = [
    {
      accountTitle: "Sales",
      thisMonthAmount: "1,194.58",
      ytd: "11,418.29",
    },

    {
      accountTitle: "Advertising",
      thisMonthAmount: "6,879.02",
      ytd: "9,271.36",
    },
    {
      accountTitle: "Inventory",
      thisMonthAmount: "4,692.26",
      ytd: "9,768.02",
    },
    {
      accountTitle: "Entertainment",
      thisMonthAmount: "0.00",
      ytd: "0.00",
    },
    {
      accountTitle: "Product",
      thisMonthAmount: "4,652.10",
      ytd: "2,529.90",
    },
  ];
 

const inputref = useRef(null);
const handleImageClick =()=>{
  inputref.current.click();
}

const getManagevalue =()=>
{
  const selectedvalue = document.getElementById("list").value;
  console.log(selectedvalue);
}

  return(
    <>
    <div className='row justify-content-end ' style={{color:'gray', backgroundColor:'lightgray'}}>
        <div className='container row justify-content-end mt-5 ms-5 '>
        <div className='col-2'>
        </div>
        {/* bar1 */}
        <div className='card col row justify-content-end'>
            <div>
            <Grid container spacing={0} p={3}>
          <h5 className='me-5'>Checking Account</h5>
          
         <select className='ms-5 me-5' id='list' onChange={getManagevalue}>
                <option value='Dashboard'>Dashboard</option>
                 <option value='Accounts'>Accounts</option>
                <option value='Payroll'>Payroll</option>
                 <option value='Reports'>Reports</option>
                 <option value='Advisor'>Advisor</option>
                  <option value='Contacts'>Contacts</option>
          </select>
          <select className='ms-5' id='list' onChange={getManagevalue}>
                <option value='January'>January</option>
                 <option value='February'>February</option>
                <option value='March'>March</option>
                 <option value='April'>April</option>
                 <option value='May'>May</option>
                  <option value='June'>June</option>
                  <option value='July'>July</option>
                  <option value='August'>August</option>
                  <option value='September'>September</option>
                  <option value='October'>October</option>
                  <option value='November'>November</option>
                  <option value='December'>December</option>
          </select>
          <hr style={{border:'2px solid #ccc' , margin: '30px 1px',width:'1000px' }} />
          <Grid item md={11} xs={12} sm={12} sx={{ display: "flex" }}>
           
            <Box
              sx={{
                background: "#fff",
                borderRadius: 2,
                width: "100%",
                height: "400px",
              }}
            >
            <Box
               sx={{ height: "400px", width: "100%" }}
               display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
            >
            <Line data={data} options={options} />
            </Box>
            
            </Box>
          </Grid>
          </Grid>
            </div>
        </div>
         
          

          {/* bar2 */}
            <div className='card col ms-5 me-5'>
            <div>
            <Grid container spacing={0} p={3}>
            <h5 className='me-5'>Invoices owned to you</h5>
            <div onClick={handleImageClick} className='ms-5 '>
            <button className='btn btn-outline-light text-success fw-bold ms-5 float-end' >
             New Sales Invoice</button>
            <input type='file' ref={inputref} className=' fw-bold float-end' style={{display:'none'}}/>
            </div>
            <hr style={{border:'2px solid #ccc' , margin: '30px 1px',width:'1000px' }} />

            <Grid item md={10} xs={12} sm={12} 
            sx={{ display: "flex"}}>
            <Box
              sx={{
                background: "#fff",
                borderRadius: 2,
                width: "100%",
                height: "330px",
              }}
            >
            <Box
               sx={{ height: "450px", width: "100%" }}
               display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
            >
            <Bar data={databar} options={options} />
            </Box>
            
            </Box>
          </Grid>
          </Grid>
         
              </div>
            </div>
        </div> 

         {/* bar3 */}
        <div className='container row justify-content-end mt-5 ms-5 '>
        <div className='col-2'>
        </div>
        <div className='card col me-5'>
        <div>
          <Grid container spacing={0} p={3}>
          <div className='justify-content-end'>
          <h5 className='me-5 '>Checking Account
          <span className='border bg-success text-success ms-1 float-end'style={{border:'30px', width:'30px',height:'30px', color:'black',backgroundColor:'skyblue' ,textAlign:'end'}}  ></span>
          <span className='float-end ms-5'>Out</span>
          <span className='border bg-success text-success ms-1 float-end'style={{border:'30px', width:'30px',height:'30px', color:'green',textAlign:'end'}}  ></span>
          <span className='float-end ms-5'>In</span> </h5>
          </div>
          <hr style={{border:'2px solid #ccc' , margin: '30px 1px',width:'1000px' }} />
          <Grid item md={11} xs={12} sm={12} sx={{ display: "flex" }}>
           
            <Box
              sx={{
                background: "#fff",
                borderRadius: 2,
                width: "100%",
                height: "400px",
              }}
            >
            <Box
               sx={{ height: "400px", width: "100%" }}
               display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
            >
            <Bar data={databar3} options={options} />
            </Box>
            </Box>
          </Grid>
          </Grid>
            </div>
      
            </div>

            {/* bar4 */}
            <div className='card col  me-5'>
            <Grid container spacing={0} p={3}>
            <h5 className=' '>Account Watchlist</h5>
              <hr style={{border:'2px solid #ccc' , margin: '30px 1px',width:'700px' }} />
            <Grid item md={11} xs={12} sm={12} sx={{ display: "flex" }}>
                    {/* <div className='row'> */}
                      <div className='col-5'>
                          <ul className='list-group-flush '>
                                Account
                            <li className='list-group-item mt-4'>Sales</li>
                            <li className='list-group-item'>Advertising</li>
                            <li className='list-group-item'>Inventory</li>
                            <li className='list-group-item'>Entertainment</li>
                            <li className='list-group-item'>Product</li>
                          </ul>
                      </div>
                      <div className='col-4 float-end'>
                      <ul className='list-group-flush float-end'>
                              This Month
                            <li className='list-group-item mt-4'>1,194.58</li>
                            <li className='list-group-item'>6,879.02</li>
                            <li className='list-group-item'>4,692.26</li>
                            <li className='list-group-item'>0.00</li>
                            <li className='list-group-item'>4,652.10</li>
                          </ul>

                      </div>
                      <div className='col-3 float-end'>
                      <ul className='list-group-flush float-end'>
                                YTD
                            <li className='list-group-item mt-4'>11,418.2</li>
                            <li className='list-group-item'>9,271.36</li>
                            <li className='list-group-item'>9,768.09</li>
                            <li className='list-group-item'>0.00</li>
                            <li className='list-group-item'>2,529.90</li>
                          </ul>

                      </div>
{/* 
                    </div> */}
            </Grid>
          </Grid>
                {/* <div className='col-lg-8 col-md-9 col-sm-12'>
                    <br/>
                    <span className='mt-4 fw-bold '>Account Watchlist</span>
                    <hr style={{border:'2px solid #ccc' , margin: '30px 1px',width:'700px' }} />

                    <div className='row'>
                      <div className='col-5'>
                          <ul className='list-group-flush '>
                                Account
                            <li className='list-group-item mt-4'>Sales</li>
                            <li className='list-group-item'>Advertising</li>
                            <li className='list-group-item'>Inventory</li>
                            <li className='list-group-item'>Entertainment</li>
                            <li className='list-group-item'>Product</li>
                          </ul>
                      </div>
                      <div className='col-4 float-end'>
                      <ul className='list-group-flush float-end'>
                              This Month
                            <li className='list-group-item mt-4'>1,194.58</li>
                            <li className='list-group-item'>6,879.02</li>
                            <li className='list-group-item'>4,692.26</li>
                            <li className='list-group-item'>0.00</li>
                            <li className='list-group-item'>4,652.10</li>
                          </ul>

                      </div>
                      <div className='col-3 float-end'>
                      <ul className='list-group-flush float-end'>
                                YTD
                            <li className='list-group-item mt-4'>11,418.2</li>
                            <li className='list-group-item'>9,271.36</li>
                            <li className='list-group-item'>9,768.09</li>
                            <li className='list-group-item'>0.00</li>
                            <li className='list-group-item'>2,529.90</li>
                          </ul>

                      </div>

                    </div>
                   
                    
                </div> */}
            </div>
        </div>  
        
    </div>
    
        
    </>
  );
}


