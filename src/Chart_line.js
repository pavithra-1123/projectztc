
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useRef} from 'react';
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
  Legend,} from 'chart.js'; 

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
    labels: ['09', '10', '11', '12', '13',14,15,16,17,18],
    datasets: [
      {
        data: [33, 53, 85, 41, 44, 65,33, 53, 85, 41, 44, 65],
        fill: false,
        borderColor:'green',
        tension: 0.4,
        pointBorderColor:'transparent',
    
      },
    ],
};

const options = {
  
  elements: {
    bar: {
      borderWidth: 20,
      
    },
  },
  plugins :{
    legend : false
  },
  scales:{
    x : {
      grid : {
        display : false
      }
    },
    y : {
      grid :{
        display:false
      },
      ticks :{
        display:false,
      }
    }
   
  }
}

const databar = {
  labels: ['Older','Jan 01-08','Jan 09-16','Jan 17-24','Jan 25-31','Future'],
  datasets: [
    {
      data: [10, 40, 80, 65, 30,50],
      fill: false,
      borderColor:'transparent',
      backgroundColor:'green',
      tension: 0.4,
      borderWidth:25
  
    },
  ],
};

const databar3 = {
  labels: ['August','September','October','November','December','Januaery'],
  datasets: [
    {
      data: [20, 30, 60, 45, 30,15],
      fill: false,
      borderColor:'transparent',
      backgroundColor:'green',
     
      borderWidth:25,
  
    },
  ]
    
};
 
const inputref = useRef(null);
const handleImageClick =()=>{
  inputref.current.click();
}
  return(
    <>
    <div className='row justify-content-end ' style={{color:'gray', backgroundColor:'lightgray'}}>
        <div className='container row justify-content-end mt-5 ms-5 '>
        <div className='col-2'>
        </div>
            <div className="card col ">
                <div className=" col-lg-8 col-md-9 col-sm-12 position-relative rounded-pill">
                    <br/>
                    <span className='mt-4 fw-bold'> Checking Account</span>
                    <Dropdown className="d-inline  float-end">
                        <Dropdown.Toggle variant="light" id="dropdown-basic" className='ms-4 '>
                          January
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">January</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">February</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">March</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">April</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">May</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">June</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">July</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">August</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">September</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">October</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">November</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">December</Dropdown.Item>
                        </Dropdown.Menu>
                        </Dropdown>
                    <Dropdown className="d-inline  float-end " style={{alignItems:'flex-end'}}>
                        <Dropdown.Toggle variant="light" id="dropdown-basic" className='ms-4 me-5'>
                          Manage
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Dashboard</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Accounts</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Payroll</Dropdown.Item>
                            <Dropdown.Item href="#/action-3"> Reports</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Advisor</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Contacts</Dropdown.Item>
                        </Dropdown.Menu>
                        </Dropdown>
                        
                    <br/>
                    {/* <Divider className='bg-success ' variant="middle"  />
                    <Divider vertical/> */}
                    <hr style={{border:'2px solid #ccc' , margin: '30px 1px',width:'700px',position:'absolute'}} />
                    <br/><br/>
                    <div style={{width:'710px' }}>
                    <Line data={data} options={options}/>
                    </div>
            </div>  
            </div >
            <div className='card col ms-5 me-5'>
                <div className='col-lg-8 col-md-9 col-sm-12'>
                    <br/>
                   
                   <div onClick={handleImageClick}>
                   <span className='mt-4 fw-bold ' >Invoices owned to you</span>
                    <button className='btn btn-outline-light text-success fw-bold ms-5 float-end' >
                     New Sales Invoice</button>
                     <input type='file' ref={inputref} className=' fw-bold float-end' style={{display:'none'}}/>
                   </div>
                    
                    <hr style={{border:'2px solid #ccc' , margin: '30px 1px',width:'700px' }} />
                    <div style={{width:'700px' }}>
                      <Bar data={databar} options={options}/>
                    </div>
                </div>
            </div>
        </div>  
        <div className='container row justify-content-end mt-5 ms-5 '>
        <div className='col-2'>
        </div>
        <div className='card col me-5'>
                <div className='col-lg-8 col-md-9 col-sm-12'>
                    <br/>
                    <span className='mt-4 fw-bold ' >Total Cash Flow <span className='float-end'>Out</span>
                    <span className='border bg-success text-success float-end'style={{border:'30px', width:'30px', color:'green',textAlign:'end'}}  >inn</span>
                    <span className='float-end me-2'>In</span>
                    <span className='border bg-success text-success float-end'style={{border:'30px', width:'30px', color:'green',textAlign:'end'}}  >inn</span>
                    </span>
                    <hr style={{border:'2px solid #ccc' , margin: '30px 1px',width:'700px' }} />
                    <div style={{width:'700px' }}>
                      <Bar data={databar3} options={options}/>
                    </div>
                </div>
            </div>
            <div className='card col  me-5'>
                <div className='col-lg-8 col-md-9 col-sm-12'>
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
                   
                    
                </div>
            </div>
        </div>  
        
    </div>
    
        
    </>
  );
}


