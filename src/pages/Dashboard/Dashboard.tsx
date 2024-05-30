import * as React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './Dashboard.scss';
import { LineChart, Line, Tooltip, ResponsiveContainer } from 'recharts';
import User from "./../../icons/user.png"



const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];



export const Dashboard: React.FC = () => {
  return (
  //   <div className="container row justify-content-center p-4">
  //   <div className="col border py-4 px-4 m-2" id='dashboardBox'>
  //     <div className="card-body">
  //       <PersonIcon />
  //       <h5 className="card-title">12,123</h5>
  //       <p className="card-text">Email Sent</p>
  //       <PieChart />
  //     </div>
  //   </div>
  
  //   <div className="col border py-4 px-4 m-2" id='dashboardBox'>
  //     <div className="card-body">
  //       <h5 className="card-title">Reports</h5>
  //       <p className="card-text">See reports</p>
  //     </div>
  //   </div>
  
  //   <div className="col border py-4 px-4 m-2" id='dashboardBox'>
  //     <div className="card-body">
  //       <h5 className="card-title">Messages</h5>
  //       <p className="card-text">See Message</p>
  //     </div>
  //   </div>
  
  //   <div className="col border py-4 px-4 m-2" id='dashboardBox'>
  //     <div className="card-body">
  //       <h5 className="card-title">Users</h5>
  //       <p className="card-text">Add or manage users</p>
  //     </div>
  //   </div>
  // </div>  


  <div className="container row justify-content-center p-4">
    <div className="col border py-4 px-4 m-2 chartBox" >
      <div className='boxInfo'>
        <div className='title'>
          <img src={User} alt="user icon" width="20px" height="20px" />
        </div>
        <h1>11.223</h1>
        <a href="">view all</a>
      </div>
      <div className='chartInfo'>
        <div className='chart'>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart width={300} height={100} data={data}>
            <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} dot/>
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="texts">
          <span className="percentage">45%</span>
          <span className="duration">Total Users</span>
        </div>
      </div>
    </div>
  
    <div className="col border py-4 px-4 m-2 chartBox" >
      <div className='boxInfo'>
        <div className='title'>
          <img src="./../../icons/user.png" alt="user icon" />
        </div>
        <h1>11.223</h1>
        <a href="">view all</a>
      </div>
      <div className='chartInfo'>
        <div className='chart'>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart width={300} height={100} data={data}>
            <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="texts">
          <span className="percentage">22%</span>
          <span className="duration">Message Sent</span>
        </div>
      </div>
    </div>
  
    <div className="col border py-4 px-4 m-2 chartBox" >
      <div className='boxInfo'>
        <div className='title'>
          <img src="./../../icons/user.png" alt="user icon" />
        </div>
        <h1>11</h1>
        <a href="">view all</a>
      </div>
      <div className='chartInfo'>
        <div className='chart'>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart width={300} height={100} data={data}>
            <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="texts">
          <span className="percentage">35%</span>
          <span className="duration">Total Reports</span>
        </div>
      </div>
    </div>
  
    <div className="col border py-4 px-4 m-2 chartBox" >
      <div className='boxInfo'>
        <div className='title'>
          <img src="./../../icons/user.png" alt="user icon" />
        </div>
        <h1>11.223</h1>
        <a href="">view all</a>
      </div>
      <div className='chartInfo'>
        <div className='chart'>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart width={300} height={100} data={data}>
            <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} dot={false}/>
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="texts">
          <span className="percentage">25%</span>
          <span className="duration">total</span>
        </div>
      </div>
    </div>

    <div className="row py-4 px-4 m-2">
    <div className="col-sm border">
        1 of 3
    </div>
    <div className="col-md-auto border">
        Variable width content
    </div>
    <div className="col-sm border">
        3 of 3
    </div>
</div>
  </div>  



  );
};

export default Dashboard;
