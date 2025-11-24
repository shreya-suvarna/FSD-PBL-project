import React, { useEffect, useState } from "react";

export default function Uploadedlist() {
  const farmerId = localStorage.getItem("farmerId");
  const [residues, setResidues] = useState([]);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/api/residue/farmer/${farmerId}`)
      .then(res => res.json())
      .then(data => setResidues(data));

    fetch(`http://localhost:5000/api/notifications/${farmerId}`)
      .then(res => res.json())
      .then(data => setNotifications(data));
  }, []);

  const deleteResidue = async (id) => {
    if (!window.confirm("Delete this residue?")) return;

    await fetch(`http://localhost:5000/api/residue/${id}`, { method: "DELETE" });
    setResidues(residues.filter(r => r._id !== id));
  };

  return (
    <div className="dashboard">
      <h1>Farmer Dashboard</h1>

      <h2>Your Uploaded Residues</h2>
      {residues.length === 0 ? <p>No residues uploaded yet.</p> : null}

      <div className="residue-list">
        {residues.map((r) => (
          <div key={r._id} className="residue-card">
            <h3>{r.cropName}</h3>
            <p>Type: {r.residueType}</p>
            <p>Quantity: {r.quantity} kg</p>
            <button onClick={() => deleteResidue(r._id)}>Delete</button>
          </div>
        ))}
      </div>

      <h2>Notifications</h2>
      <ul>
        {notifications.map((n) => (
          <li key={n._id}>{n.message}</li>
        ))}
      </ul>
    </div>
  );
}


// // import React, { useEffect, useState } from "react";

// // export default function Uploadedlist({ token }) {
// //   const [residues, setResidues] = useState([]);
// //   const [notifications, setNotifications] = useState([]);

// //   // Fetch residues
// //   const loadResidues = async () => {
// //     try {
// //       const res = await fetch("http://localhost:5000/api/residue/all", {
// //         headers: { Authorization: `Bearer ${token}` },
// //       });
// //       const data = await res.json();
// //       setResidues(data);
// //     } catch (err) {
// //       console.error("Failed to fetch residues:", err);
// //     }
// //   };

// //   // Fetch notifications
// //   const loadNotifications = async () => {
// //     try {
// //       const res = await fetch("http://localhost:5000/api/notifications/me", {
// //         headers: { Authorization: `Bearer ${token}` },
// //       });
// //       const data = await res.json();
// //       setNotifications(data);
// //     } catch (err) {
// //       console.error("Failed to fetch notifications:", err);
// //     }
// //   };

// //   useEffect(() => {
// //     loadResidues();
// //     loadNotifications();
// //   }, [token]);

// //   const deleteResidue = async (id) => {
// //     if (!window.confirm("Delete this residue?")) return;

// //     try {
// //       await fetch(`http://localhost:5000/api/residue/${id}`, {
// //         method: "DELETE",
// //         headers: { Authorization: `Bearer ${token}` },
// //       });
// //       setResidues(residues.filter((r) => r._id !== id));
// //     } catch (err) {
// //       console.error("Failed to delete residue:", err);
// //     }
// //   };

// //   return (
// //     <div className="dashboard">
// //       <h1>Farmer Dashboard</h1>

// //       <h2>Your Uploaded Residues</h2>
// //       {residues.length === 0 && <p>No residues uploaded yet.</p>}

// //       <div className="residue-list">
// //         {residues.map((r) => (
// //           <div key={r._id} className="residue-card">
// //             <h3>{r.cropName}</h3>
// //             <p>Type: {r.residueType}</p>
// //             <p>Quantity: {r.quantity} kg</p>
// //             <button onClick={() => deleteResidue(r._id)}>Delete</button>
// //           </div>
// //         ))}
// //       </div>

// //       <h2>Notifications</h2>
// //       <ul>
// //         {notifications.map((n) => (
// //           <li key={n._id}>{n.message}</li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // }
// import React, { useEffect, useState } from "react";

// export default function Uploadedlist({ token }) {
//   const [residues, setResidues] = useState([]);
//   const [notifications, setNotifications] = useState([]);

//   useEffect(() => {
//     // Fetch farmer's residues
//     const fetchResidues = async () => {
//       try {
//         const res = await fetch("http://localhost:5000/api/residue/all", {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         const data = await res.json();
//         setResidues(data);
//       } catch (err) {
//         console.error("Failed to fetch residues:", err);
//       }
//     };

//     // Fetch notifications (your notifications route should return logged-in user's notifications)
//     const fetchNotifications = async () => {
//       try {
//         const res = await fetch("http://localhost:5000/api/notifications/me", {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         const data = await res.json();
//         setNotifications(data);
//       } catch (err) {
//         console.error("Failed to fetch notifications:", err);
//       }
//     };

//     fetchResidues();
//     fetchNotifications();
//   }, [token]);

//   const deleteResidue = async (id) => {
//     if (!window.confirm("Delete this residue?")) return;
//     try {
//       await fetch(`http://localhost:5000/api/residue/${id}`, {
//         method: "DELETE",
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setResidues(residues.filter((r) => r._id !== id));
//     } catch (err) {
//       console.error("Failed to delete residue:", err);
//     }
//   };

//   return (
//     <div className="dashboard">
//       <h1>Farmer Dashboard</h1>

//       <h2>Your Uploaded Residues</h2>
//       {residues.length === 0 && <p>No residues uploaded yet.</p>}

//       <div className="residue-list">
//         {residues.map((r) => (
//           <div key={r._id} className="residue-card">
//             <h3>{r.cropName}</h3>
//             <p>Type: {r.residueType}</p>
//             <p>Quantity: {r.quantity} kg</p>
//             <button onClick={() => deleteResidue(r._id)}>Delete</button>
//           </div>
//         ))}
//       </div>

//       <h2>Notifications</h2>
//       <ul>
//         {notifications.map((n) => (
//           <li key={n._id}>{n.message}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }
