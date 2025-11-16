import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/IndustryAlerts.css";

function IndustryAlerts() {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    // Example: Load alerts from localStorage or API
    const storedAlerts = JSON.parse(localStorage.getItem("industryAlerts") || "[]");
    setAlerts(storedAlerts);
  }, []);

  return (
    <div className="alerts-container">
      <h1 className="alerts-title">Industry Alerts</h1>

      {alerts.length === 0 ? (
        <p className="no-alerts">No alerts available.</p>
      ) : (
        <div className="alerts-grid">
          {alerts.map((alert, index) => (
            <div key={index} className="alert-card">
              <h2>{alert.title}</h2>
              <p>{alert.message}</p>
              <span className="alert-date">{alert.date}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default IndustryAlerts;
