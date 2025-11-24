export const addAlert = (title, message) => {
  const existing = JSON.parse(localStorage.getItem("alerts") || "[]");

  const newAlert = {
    title,
    message,
    date: new Date().toLocaleString(),
    read: false,
  };

  const updated = [newAlert, ...existing];
  localStorage.setItem("alerts", JSON.stringify(updated));
};
