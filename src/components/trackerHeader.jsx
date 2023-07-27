import React from "react";
import { Link } from "react-router-dom";

import "../styles/tracker.css";

const TrackerHeader = ({ addExpense }) => {
  return (
    <div className="tracker-header">
      <Link className="tracker-header-button" to="/add-expense">
        Add new expense
      </Link>
    </div>
  );
};

export default TrackerHeader;
