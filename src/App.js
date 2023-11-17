
// import { Chart } from 'chart.js/dist';
import {  ChartSiderBar } from './ChartPage';
import  { ChartNavPage } from './Chart_NavPage';
import { Chart112, My_Chartpage} from './Chart_line';
import LineChart from './chart';
import {BrowserRouter, Route, Routes} from 'react-router-dom'


export function App() {
  return(
    <>
    <BrowserRouter>
    <ChartNavPage/>
    <ChartSiderBar/>
      <Routes>
        <Route path='view' exact element={<My_Chartpage/>} />
       
      </Routes>
      </BrowserRouter>
 
   
   
    </>
  );
}


