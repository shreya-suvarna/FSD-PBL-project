import React, { useState, useEffect } from "react";
import "../styles/Alerts.css";

function Alerts() {
  const [alerts, setAlerts] = useState([]);

  // Load alerts from localStorage or mock data
  useEffect(() => {
    const storedAlerts = JSON.parse(localStorage.getItem("alerts") || "[]");
    setAlerts(storedAlerts);
  }, []);

  const markAsRead = (index) => {
    const updated = [...alerts];
    updated[index].read = true;
    setAlerts(updated);
    localStorage.setItem("alerts", JSON.stringify(updated));
  };

  const markAllAsRead = () => {
    const updated = alerts.map((alert) => ({ ...alert, read: true }));
    setAlerts(updated);
    localStorage.setItem("alerts", JSON.stringify(updated));
  };

  return (
    <div className="alerts-container">
      <h1 className="alerts-title">Alerts</h1>
      <button className="btn-mark-all" onClick={markAllAsRead}>
        Mark all as read
      </button>

      <div className="alerts-list">
        {alerts.length === 0 ? (
          <p>No alerts yet.</p>
        ) : (
          alerts.map((alert, index) => (
            <div
              key={index}
              className={`alert-card ${alert.read ? "read" : "unread"}`}
              onClick={() => markAsRead(index)}
            >
              <strong>{alert.title}</strong>
              <p>{alert.message}</p>
              <span className="alert-date">{alert.date}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Alerts;
