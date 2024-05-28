import React, { FC } from 'react';
import "./DashboardBox.scss";
import "bootstrap/dist/css/bootstrap.min.css";

interface DashboardBoxProps  {
    icon: string;
    title: string;
    description: string;
}

export const DashboardBox: FC<DashboardBoxProps> = ({ icon, title, description }) => {
  return (
    <div className="dashboard-box">
      <div className="card-body d-flex align-items-center">
        <div className="icon-container me-3">
          <img src={icon} alt={`${title} icon`} className="icon" width="25px" />
        </div>
        <div>
          <h5 className="card-title mb-1">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};




export default DashboardBox;
