import React, { FC } from 'react';
import "./Singles.scss";
import "bootstrap/dist/css/bootstrap.min.css";
// interface SinglesProps  {}

export const Singles: React.FC = () => {
  return (
    <div className="pieChart">
        <div className="boxInfo">
            <div className="title">
                <img src="./../../icons/user.png" alt="user icon" />
                <span>Total Users</span>
            </div>
            <h1>11.234</h1>
        </div>
    </div>
  );
};




export default Singles;
