// // // src/pages/AddCropResidue.jsx
// // import React, { useState, useEffect } from "react";
// // import { useNavigate } from "react-router-dom";
// // import "../styles/AddCropResidue.css";

// // import { useLanguage } from "../context/LanguageContext"; // added for translations

// // function AddCropResidue() {
// //   const navigate = useNavigate();
// //   const { t } = useLanguage(); // added for translations

// //   const [form, setForm] = useState({
// //     cropName: "",
// //     residueType: "",
// //     quantity: "",
// //     location: "",
// //     uploaderName: "",
// //     uploaderContact: "",
// //     images: [],
// //   });

// //   const [previewImages, setPreviewImages] = useState([]);
// //   const [history, setHistory] = useState([]);

// //   // Load history from localStorage
// //   useEffect(() => {
// //     const stored = JSON.parse(localStorage.getItem("cropResidues") || "[]");
// //     setHistory(stored);
// //   }, []);

// //   const handleChange = (e) => {
// //     const { id, value } = e.target;
// //     setForm((prev) => ({ ...prev, [id]: value }));
// //   };

// //   const handleFileChange = (e) => {
// //     const files = Array.from(e.target.files);

// //     if (files.length > 5) {
// //       alert(t("max5Images") ?? "❌ Max 5 images allowed");
// //       e.target.value = "";
// //       setPreviewImages([]);
// //       return;
// //     }

// //     const validFiles = files.filter(
// //       (file) => file.type.startsWith("image/") && file.size <= 2 * 1024 * 1024
// //     );

// //     if (validFiles.length !== files.length) {
// //       alert(
// //         t("imageLimitMsg") ?? "❌ Each image must be <2MB and an image file."
// //       );
// //       e.target.value = "";
// //       setPreviewImages([]);
// //       return;
// //     }

// //     setForm((prev) => ({ ...prev, images: validFiles }));

// //     const previews = validFiles.map((file) => URL.createObjectURL(file));
// //     setPreviewImages(previews);
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     if (
// //       !form.cropName ||
// //       !form.residueType ||
// //       !form.quantity ||
// //       !form.location ||
// //       form.images.length === 0
// //     ) {
// //       alert(
// //         t("fillRequiredFields") ??
// //           "❌ Please fill all required fields and upload at least 1 image."
// //       );
// //       return;
// //     }

// //     // Convert images to Base64
// //     const imagePromises = form.images.map(
// //       (file) =>
// //         new Promise((resolve) => {
// //           const reader = new FileReader();
// //           reader.onload = () => resolve(reader.result);
// //           reader.readAsDataURL(file);
// //         })
// //     );

// //     const imagesBase64 = await Promise.all(imagePromises);

// //     const residueData = {
// //       ...form,
// //       uploaderName: form.uploaderName || (t("anonymous") ?? "Anonymous"),
// //       uploaderContact: form.uploaderContact || (t("notProvided") ?? "Not Provided"),
// //       images: imagesBase64,
// //     };

// //     const existing = JSON.parse(localStorage.getItem("cropResidues") || "[]");
// //     existing.push(residueData);
// //     localStorage.setItem("cropResidues", JSON.stringify(existing));

// //     alert(t("uploadSuccess") ?? "✅ Crop residue uploaded successfully!");
// //     setForm({
// //       cropName: "",
// //       residueType: "",
// //       quantity: "",
// //       location: "",
// //       uploaderName: "",
// //       uploaderContact: "",
// //       images: [],
// //     });
// //     setPreviewImages([]);
// //     setHistory(existing);
// //   };

// //   const deleteEntry = (index) => {
// //     const updated = [...history];
// //     updated.splice(index, 1);
// //     localStorage.setItem("cropResidues", JSON.stringify(updated));
// //     setHistory(updated);
// //   };

// //   return (
// //     <div className="add-residue-container">
// //       <h1 className="add-title">{t("addCropResidue") ?? "Add Crop Residue"}</h1>

// //       <div className="add-residue-flex">
// //         {/* Left: Form */}
// //         <div className="residue-card form-card">
// //           <form onSubmit={handleSubmit}>
// //             <label>{t("cropName") ?? "Crop Name"}</label>
// //             <select id="cropName" value={form.cropName} onChange={handleChange} required>
// //               <option value="">{t("selectCrop") ?? "Select Crop"}</option>
// //               <option value="Paddy">{t("paddy") ?? "Paddy"}</option>
// //               <option value="Wheat">{t("wheat") ?? "Wheat"}</option>
// //               <option value="Rice">{t("rice") ?? "Rice"}</option>
// //               <option value="Maize">{t("maize") ?? "Maize"}</option>
// //               <option value="Coconut">{t("coconut") ?? "Coconut"}</option>
// //               <option value="Arecanut">{t("arecanut") ?? "Arecanut"}</option>
// //               <option value="Other">{t("other") ?? "Other"}</option>
// //             </select>

// //             <label>{t("residueType") ?? "Residue Type"}</label>
// //             <select id="residueType" value={form.residueType} onChange={handleChange} required>
// //               <option value="">{t("selectType") ?? "Select Type"}</option>
// //               <option value="Straw">{t("straw") ?? "Straw"}</option>
// //               <option value="Husk">{t("husk") ?? "Husk"}</option>
// //               <option value="Leaf">{t("leaf") ?? "Leaf"}</option>
// //               <option value="Shell">{t("shell") ?? "Shell"}</option>
// //               <option value="Other">{t("other") ?? "Other"}</option>
// //             </select>

// //             <label>{t("quantityKg") ?? "Quantity (kg)"}</label>
// //             <input
// //               type="number"
// //               id="quantity"
// //               placeholder={t("enterQuantity") ?? "e.g. 50"}
// //               value={form.quantity}
// //               onChange={handleChange}
// //               required
// //             />

// //             <label>{t("location") ?? "Location"}</label>
// //             <input
// //               type="text"
// //               id="location"
// //               placeholder={t("enterLocation") ?? "Village / Town"}
// //               value={form.location}
// //               onChange={handleChange}
// //               required
// //             />

// //             <label>{t("uploaderName") ?? "Uploader Name"}</label>
// //             <input
// //               type="text"
// //               id="uploaderName"
// //               placeholder={t("enterName") ?? "Your Name"}
// //               value={form.uploaderName}
// //               onChange={handleChange}
// //             />

// //             <label>{t("uploaderContact") ?? "Uploader Contact"}</label>
// //             <input
// //               type="text"
// //               id="uploaderContact"
// //               placeholder={t("enterContact") ?? "Phone / Email"}
// //               value={form.uploaderContact}
// //               onChange={handleChange}
// //             />

// //             <label>{t("uploadPhotos") ?? "Upload Crop Residue Photos"}</label>
// //             <input type="file" id="residueImage" accept="image/*" multiple onChange={handleFileChange} />

// //             <div id="previewContainer" className="preview-container">
// //               {previewImages.map((src, i) => (
// //                 <img key={i} src={src} alt={`${t("preview") ?? "Preview"} ${i}`} className="preview-image" />
// //               ))}
// //             </div>

// //             <button type="submit" className="btn-submit">
// //               {t("submit") ?? "Submit"}
// //             </button>
// //             <button type="button" className="btn-back" onClick={() => navigate("/farmer-dashboard")}>
// //               {t("backToDashboard") ?? "Back to Dashboard"}
// //             </button>
// //           </form>
// //         </div>

// //         {/* Right: History */}
// //         <div className="history-panel">
// //           <h2>{t("uploadHistory") ?? "Upload History"}</h2>
// //           <div id="historyContainer">
// //             {history.length === 0 && <p>{t("noUploads") ?? "No uploads yet."}</p>}
// //             {history.map((item, index) => (
// //               <div key={index} className="history-card">
// //                 <div className="history-images">
// //                   {item.images.map((img, i) => (
// //                     <img key={i} src={img} alt={t("cropImage") ?? "Crop"} />
// //                   ))}
// //                 </div>
// //                 <div className="history-info">
// //                   <p>
// //                     <strong>{t("crop") ?? "Crop:"}</strong> {item.cropName}
// //                   </p>
// //                   <p>
// //                     <strong>{t("residue") ?? "Residue:"}</strong> {item.residueType}
// //                   </p>
// //                   <p>
// //                     <strong>{t("quantity") ?? "Quantity:"}</strong> {item.quantity} kg
// //                   </p>
// //                   <p>
// //                     <strong>{t("location") ?? "Location:"}</strong> {item.location}
// //                   </p>
// //                   <p>
// //                     <strong>{t("uploader") ?? "Uploader:"}</strong> {item.uploaderName}
// //                   </p>
// //                   <p>
// //                     <strong>{t("contact") ?? "Contact:"}</strong> {item.uploaderContact}
// //                   </p>
// //                   <button className="btn-delete" onClick={() => deleteEntry(index)}>
// //                     {t("delete") ?? "Delete"}
// //                   </button>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default AddCropResidue;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function AddCropResidue() {
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

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.id]: e.target.value });
//   };

//   const handleFileChange = (e) => {
//     setImages([...e.target.files]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const data = new FormData();

//     Object.keys(form).forEach((key) => {
//       data.append(key, form[key]);
//     });

//     images.forEach((img) => {
//       data.append("images", img);
//     });

//     const res = await fetch("http://localhost:5000/api/residue/upload", {
//       method: "POST",
//       body: data,
//     });

//     const result = await res.json();
//     alert(result.message || "Uploaded!");

//     navigate("/farmer-dashboard");
//   };

//   return (
//     <div>
//       <h1>Add Crop Residue</h1>

//       <form onSubmit={handleSubmit}>
//         <input id="cropName" type="text" placeholder="Crop Name" required onChange={handleChange} />
//         <input id="residueType" type="text" placeholder="Residue Type" required onChange={handleChange} />
//         <input id="quantity" type="number" placeholder="Quantity (kg)" required onChange={handleChange} />
//         <input id="location" type="text" placeholder="Location" required onChange={handleChange} />
//         <input id="uploaderName" type="text" placeholder="Uploader Name" onChange={handleChange} />
//         <input id="uploaderContact" type="text" placeholder="Uploader Contact" onChange={handleChange} />

//         <input type="file" multiple accept="image/*" onChange={handleFileChange} />

//         <button type="submit">Upload</button>
//       </form>
//     </div>
//   );
// }

// export default AddCropResidue;


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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.keys(form).forEach((key) => data.append(key, form[key]));
    images.forEach((img) => data.append("images", img));

    const res = await fetch("http://localhost:5000/api/residue/upload", {
      method: "POST",
      body: data,
    });

    const result = await res.json();
    alert(result.message);

    navigate("/search-residue");
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
