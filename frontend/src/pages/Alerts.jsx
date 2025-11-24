//frontend/src/pages/Alerts.jsx

import React, { useState, useEffect } from "react";
import "../styles/Alerts.css";
  import { addAlert } from "../utils/alertHelper";


import { useLanguage } from "../context/LanguageContext"; // ✅ added

function Alerts() {
  const { t } = useLanguage(); // ✅ added

  const [alerts, setAlerts] = useState([]);

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

const updateStatus = async (bookingId, status) => {
  await axios.put(`/api/bookings/${bookingId}/status`, { status });

  if (status === "Accepted") {
    addAlert(
      "Booking Accepted",
      "You have accepted a booking. The industry will be notified."
    );
  } else {
    addAlert(
      "Booking Rejected",
      "You have rejected a booking request."
    );
  }

  loadBookings();
};


  return (
    <div className="alerts-container">
      <h1 className="alerts-title">{t("alertsTitle") ?? "Alerts"}</h1>

      <button className="btn-mark-all" onClick={markAllAsRead}>
        {t("markAllRead") ?? "Mark all as read"}
      </button>

      <div className="alerts-list">
        {alerts.length === 0 ? (
          <p>{t("noAlerts") ?? "No alerts yet."}</p>
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
