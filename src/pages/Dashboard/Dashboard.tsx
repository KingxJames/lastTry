import * as React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import PersonIcon from '@mui/icons-material/Person';
import './Dashboard.scss';
import PieChart from '../../components/PieCharts/PieCharts';

export const Dashboard: React.FC = () => {
  return (
    <div className="container row justify-content-center p-4">
    <div className="col border py-4 px-4 m-2" id='dashboardBox'>
      <div className="card-body">
        <PersonIcon />
        <h5 className="card-title">12,123</h5>
        <p className="card-text">Email Sent</p>
        <PieChart />
      </div>
    </div>
  
    <div className="col border py-4 px-4 m-2" id='dashboardBox'>
      <div className="card-body">
        <h5 className="card-title">Reports</h5>
        <p className="card-text">See reports</p>
      </div>
    </div>
  
    <div className="col border py-4 px-4 m-2" id='dashboardBox'>
      <div className="card-body">
        <h5 className="card-title">Messages</h5>
        <p className="card-text">See Message</p>
      </div>
    </div>
  
    <div className="col border py-4 px-4 m-2" id='dashboardBox'>
      <div className="card-body">
        <h5 className="card-title">Users</h5>
        <p className="card-text">Add or manage users</p>
      </div>
    </div>
  </div>  
  );
};

export default Dashboard;
