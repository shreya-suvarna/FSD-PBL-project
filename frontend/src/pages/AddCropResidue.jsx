// // //frontend/ src/pages/AddCropResidue.jsx



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AddCropResidue.css";

export default function AddCropResidue() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    cropName: "",
    residueType: "",
    quantity: "",
    location: "",
    uploaderName: "",
    uploaderContact: "",
  });

  const [images, setImages] = useState([]);
  const [preview, setPreview] = useState([]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleFileChange = (e) => {
    const files = [...e.target.files];
    setImages(files);

    const urls = files.map((file) => URL.createObjectURL(file));
    setPreview(urls);
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const data = new FormData();
  //   Object.keys(form).forEach((key) => data.append(key, form[key]));
  //   images.forEach((img) => data.append("images", img));


  //    const farmerId = localStorage.getItem("farmerId");
  //   if (!farmerId) {
  //     alert("You must be logged in as a farmer to upload residue.");
  //     return;
  //   }
  //   data.append("farmerId", farmerId);

  //   const res = await fetch("http://localhost:5000/api/residue/upload", {
  //     method: "POST",
  //     body: data,
  //   });

  //   const result = await res.json();
  //   alert(result.message);

  //   navigate("/search-residue");
  // };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const data = new FormData();

  // Append normal form fields
  Object.keys(form).forEach((key) => data.append(key, form[key]));

  // Append images
  images.forEach((img) => data.append("images", img));

  // ⭐ Fetch farmerId from localStorage
  const farmerId = localStorage.getItem("farmerId");
  if (!farmerId) {
    alert("You must be logged in as a farmer to upload residue.");
    return;
  }

  // ⭐ Add farmerId to form-data
  data.append("farmerId", farmerId);

  // Send to backend
  const res = await fetch("http://localhost:5000/api/residue/upload", {
    method: "POST",
    body: data,
  });

  const result = await res.json();
  alert(result.message);

  navigate("/farmer-dashboard");
};


  return (
    <div className="add-container">
      <h1>Add Crop Residue</h1>

      <form className="form-card" onSubmit={handleSubmit}>

        <label>Crop Name</label>
        <select id="cropName" onChange={handleChange} required>
          <option value="">Select</option>
          <option value="Paddy">Paddy</option>
          <option value="Wheat">Wheat</option>
          <option value="Rice">Rice</option>
          <option value="Maize">Maize</option>
          <option value="Coconut">Coconut</option>
          <option value="Arecanut">Arecanut</option>
        </select>

        <label>Residue Type</label>
        <select id="residueType" onChange={handleChange} required>
          <option value="">Select</option>
          <option value="Straw">Straw</option>
          <option value="Husk">Husk</option>
          <option value="Shell">Shell</option>
          <option value="Leaf">Leaf</option>
        </select>

        <label>Quantity (kg)</label>
        <input id="quantity" type="number" required onChange={handleChange} />

        <label>Location</label>
        <input id="location" type="text" required onChange={handleChange} />

        <label>Uploader Name</label>
        <input id="uploaderName" type="text" onChange={handleChange} />

        <label>Uploader Contact</label>
        <input id="uploaderContact" type="text" onChange={handleChange} />

        <label>Upload Images</label>
        <input type="file" multiple accept="image/*" onChange={handleFileChange} />

        <div className="preview-row">
          {preview.map((p, i) => (
            <img key={i} src={p} alt="preview" className="preview-img" />
          ))}
        </div>

        <button type="submit" className="upload-btn">Upload</button>
      </form>
    </div>
  );
}


// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import "../styles/AddCropResidue.css";

// // export default function AddCropResidue({ token }) {
// //   const navigate = useNavigate();

// //   const [form, setForm] = useState({
// //     cropName: "",
// //     residueType: "",
// //     quantity: "",
// //     location: "",
// //     uploaderName: "",
// //     uploaderContact: "",
// //   });

// //   const [images, setImages] = useState([]);
// //   const [preview, setPreview] = useState([]);

// //   const handleChange = (e) => {
// //     setForm({ ...form, [e.target.id]: e.target.value });
// //   };

// //   const handleFileChange = (e) => {
// //     const files = [...e.target.files];
// //     setImages(files);

// //     const urls = files.map((file) => URL.createObjectURL(file));
// //     setPreview(urls);
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     const data = new FormData();
// //     Object.keys(form).forEach((key) => data.append(key, form[key]));
// //     images.forEach((img) => data.append("images", img));

// //     try {
// //       const res = await fetch("http://localhost:5000/api/residue/upload", {
// //         method: "POST",
// //         headers: { Authorization: `Bearer ${token}` },
// //         body: data,
// //       });

// //       const result = await res.json();
// //       alert(result.message);

// //       navigate("/search-residue"); // or wherever you want after upload
// //     } catch (err) {
// //       console.error("Failed to upload residue:", err);
// //       alert("Upload failed. Try again.");
// //     }
// //   };

// //   return (
// //     <div className="add-container">
// //       <h1>Add Crop Residue</h1>
// //       <form className="form-card" onSubmit={handleSubmit}>
// //         <label>Crop Name</label>
// //         <select id="cropName" onChange={handleChange} required>
// //           <option value="">Select</option>
// //           <option value="Paddy">Paddy</option>
// //           <option value="Wheat">Wheat</option>
// //           <option value="Rice">Rice</option>
// //           <option value="Maize">Maize</option>
// //           <option value="Coconut">Coconut</option>
// //           <option value="Arecanut">Arecanut</option>
// //         </select>

// //         <label>Residue Type</label>
// //         <select id="residueType" onChange={handleChange} required>
// //           <option value="">Select</option>
// //           <option value="Straw">Straw</option>
// //           <option value="Husk">Husk</option>
// //           <option value="Shell">Shell</option>
// //           <option value="Leaf">Leaf</option>
// //         </select>

// //         <label>Quantity (kg)</label>
// //         <input id="quantity" type="number" required onChange={handleChange} />

// //         <label>Location</label>
// //         <input id="location" type="text" required onChange={handleChange} />

// //         <label>Uploader Name</label>
// //         <input id="uploaderName" type="text" onChange={handleChange} />

// //         <label>Uploader Contact</label>
// //         <input id="uploaderContact" type="text" onChange={handleChange} />

// //         <label>Upload Images</label>
// //         <input type="file" multiple accept="image/*" onChange={handleFileChange} />

// //         <div className="preview-row">
// //           {preview.map((p, i) => (
// //             <img key={i} src={p} alt="preview" className="preview-img" />
// //           ))}
// //         </div>

// //         <button type="submit" className="upload-btn">Upload</button>
// //       </form>
// //     </div>
// //   );
// // }


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "../styles/AddCropResidue.css";

// export default function AddCropResidue({ token }) {
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     cropName: "",
//     residueType: "",
//     quantity: "",
//     location: "",
//     uploaderName: "",
//     uploaderContact: "",
//   });

//   const [images, setImages] = useState([]);
//   const [preview, setPreview] = useState([]);

//   const handleChange = (e) => setForm({ ...form, [e.target.id]: e.target.value });

//   const handleFileChange = (e) => {
//     const files = [...e.target.files];
//     setImages(files);
//     setPreview(files.map((file) => URL.createObjectURL(file)));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const data = new FormData();
//     Object.keys(form).forEach((key) => data.append(key, form[key]));
//     images.forEach((img) => data.append("images", img));

//     try {
//       const res = await fetch("http://localhost:5000/api/residue/upload", {
//         method: "POST",
//         headers: { Authorization: `Bearer ${token}` },
//         body: data,
//       });
//       const result = await res.json();
//       alert(result.message);
//       navigate("/farmer-dashboard"); // Redirect to dashboard after upload
//     } catch (err) {
//       console.error("Upload failed:", err);
//       alert("Upload failed. Try again.");
//     }
//   };

//   return (
//     <div className="add-container">
//       <h1>Add Crop Residue</h1>
//       <form className="form-card" onSubmit={handleSubmit}>
//         <label>Crop Name</label>
//         <select id="cropName" onChange={handleChange} required>
//           <option value="">Select</option>
//           <option value="Paddy">Paddy</option>
//           <option value="Wheat">Wheat</option>
//           <option value="Rice">Rice</option>
//           <option value="Maize">Maize</option>
//           <option value="Coconut">Coconut</option>
//           <option value="Arecanut">Arecanut</option>
//         </select>

//         <label>Residue Type</label>
//         <select id="residueType" onChange={handleChange} required>
//           <option value="">Select</option>
//           <option value="Straw">Straw</option>
//           <option value="Husk">Husk</option>
//           <option value="Shell">Shell</option>
//           <option value="Leaf">Leaf</option>
//         </select>

//         <label>Quantity (kg)</label>
//         <input id="quantity" type="number" required onChange={handleChange} />

//         <label>Location</label>
//         <input id="location" type="text" required onChange={handleChange} />

//         <label>Uploader Name</label>
//         <input id="uploaderName" type="text" onChange={handleChange} />

//         <label>Uploader Contact</label>
//         <input id="uploaderContact" type="text" onChange={handleChange} />

//         <label>Upload Images</label>
//         <input type="file" multiple accept="image/*" onChange={handleFileChange} />

//         <div className="preview-row">
//           {preview.map((p, i) => (
//             <img key={i} src={p} alt="preview" className="preview-img" />
//           ))}
//         </div>

//         <button type="submit" className="upload-btn">Upload</button>
//       </form>
//     </div>
//   );
// }
