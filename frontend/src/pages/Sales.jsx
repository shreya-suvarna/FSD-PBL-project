import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Sales.css";

import { useLanguage } from "../context/LanguageContext"; // ✅ added

function Sales() {
  const navigate = useNavigate();
  const { t } = useLanguage(); // ✅ added

  const [sales, setSales] = useState([]);
  const [form, setForm] = useState({
    cropName: "",
    residueType: "",
    quantity: "",
    price: "",
    images: [],
  });
  const [previewImages, setPreviewImages] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("sales") || "[]");
    setSales(stored);
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files).slice(0, 5);
    setForm((prev) => ({ ...prev, images: files }));
    setPreviewImages(files.map((file) => URL.createObjectURL(file)));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.cropName || !form.residueType || !form.quantity || !form.price) {
      alert(t("fillAllFields") ?? "Please fill all required fields!");
      return;
    }

    const newSale = {
      ...form,
      images: previewImages,
      id: Date.now(),
    };

    const updatedSales = [...sales, newSale];
    localStorage.setItem("sales", JSON.stringify(updatedSales));
    setSales(updatedSales);

    setForm({ cropName: "", residueType: "", quantity: "", price: "", images: [] });
    setPreviewImages([]);
  };

  const deleteSale = (id) => {
    const updated = sales.filter((s) => s.id !== id);
    setSales(updated);
    localStorage.setItem("sales", JSON.stringify(updated));
  };

  return (
    <div className="sales-container">
      <h1>{t("cropResidueSales") ?? "Crop Residue Sales"}</h1>

      {/* Form */}
      <div className="sale-form-card">
        <h2>{t("postSale") ?? "Post a Sale"}</h2>
        <form onSubmit={handleSubmit}>
          <label>{t("cropName") ?? "Crop Name"}</label>
          <input id="cropName" value={form.cropName} onChange={handleChange} required />

          <label>{t("residueType") ?? "Residue Type"}</label>
          <input id="residueType" value={form.residueType} onChange={handleChange} required />

          <label>{t("quantityKg") ?? "Quantity (kg)"}</label>
          <input type="number" id="quantity" value={form.quantity} onChange={handleChange} required />

          <label>{t("pricePerKg") ?? "Price per kg"}</label>
          <input type="number" id="price" value={form.price} onChange={handleChange} required />

          <label>{t("images") ?? "Images"}</label>
          <input type="file" multiple accept="image/*" onChange={handleFileChange} />

          <div className="preview-images">
            {previewImages.map((src, i) => (
              <img key={i} src={src} alt={`preview-${i}`} />
            ))}
          </div>

          <button type="submit">{t("postSaleBtn") ?? "Post Sale"}</button>
        </form>
      </div>

      {/* Sales List */}
      <div className="sales-list">
        <h2>{t("myListings") ?? "My Listings"}</h2>
        {sales.length === 0 && <p>{t("noSalesYet") ?? "No sales posted yet."}</p>}

        {sales.map((sale) => (
          <div key={sale.id} className="sale-card">
            <p>
              <strong>{sale.cropName}</strong> - {sale.residueType}
            </p>
            <p>
              {t("quantity") ?? "Quantity"}: {sale.quantity} kg |{" "}
              {t("price") ?? "Price"}: ₹{sale.price}/kg
            </p>

            <div className="sale-images">
              {sale.images.map((img, i) => (
                <img key={i} src={img} alt="sale-img" />
              ))}
            </div>

            <button onClick={() => deleteSale(sale.id)}>
              {t("delete") ?? "Delete"}
            </button>
          </div>
        ))}
      </div>

      <button onClick={() => navigate("/farmer-dashboard")}>
        {t("backToDashboard") ?? "Back to Dashboard"}
      </button>
    </div>
  );
}

export default Sales;
