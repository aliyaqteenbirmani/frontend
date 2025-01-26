import React, { useState } from "react";
import ImageUploader from "./UploadImage";
import Rating from "./Rating";
import "./formstyle.css";

const RestaurantForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    openingHours: "",
    contactNo: "",
    address: "",
    cuisineTypes: "",
    specialOffer: "",
    seatingCapacity: "",
    popularityIndex: "",
    rating: "",
  });

  const [image, setImage] = useState(null); // Store the selected image file

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Transform the form data to match API format
    const transformedData = {
      ...formData,
      contactInfo: formData.contactNo,
      ratings: parseInt(formData.rating, 10) || 0,
      seatingCapacity: parseInt(formData.seatingCapacity, 10) || 0,
      popularityIndex: parseInt(formData.popularityIndex, 10) || 0,
      cuisineTypes: formData.cuisineTypes ? [formData.cuisineTypes] : [],
      latitude: 0, // Placeholder, update with real value if needed
      longitude: 0, // Placeholder, update with real value if needed
      healthRating: 0, // Placeholder, update with real value if needed
    };
    delete transformedData.contactNo;
    delete transformedData.rating;

    console.log("Transformed Data:", transformedData);

    try {
      const response = await fetch(
        "https://localhost:7037/api/Restaurant/AddNewItem",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(transformedData),
        }
      );

      if (response.ok) {
        console.log("Form submitted successfully");
      } else {
        console.error("Error submitting the form");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mainContainer">
        <div className="image-section">
          <ImageUploader onImageChange={setImage} />
        </div>
        <div className="form-section">
          <div className="input-spacing">
            <label htmlFor="name">Name</label>
            <div className="input-form">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Restaurant Name"
              />
            </div>
          </div>
          <div className="input-spacing">
            <label htmlFor="description">Description</label>
            <div className="input-form">
              <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Description"
              />
            </div>
          </div>
          <div className="first-row">
            <div className="input-spacing">
              <label htmlFor="openingHours">Opening Hours</label>
              <div className="input-form">
                <input
                  type="time"
                  name="openingHours"
                  value={formData.openingHours}
                  onChange={handleChange}
                  placeholder="Opening Hours"
                />
              </div>
            </div>
            <div className="input-spacing">
              <label htmlFor="contactNo">Contact No.</label>
              <div className="input-form">
                <input
                  type="text"
                  name="contactNo"
                  value={formData.contactNo}
                  onChange={handleChange}
                  placeholder="Contact No."
                />
              </div>
            </div>
          </div>

          <div className="input-spacing">
            <label htmlFor="address">Address</label>
            <div className="input-form">
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Address"
              />
            </div>
          </div>

          <div className="first-row">
            <div className="input-spacing">
              <label htmlFor="cuisineTypes">Cuisine Types</label>
              <div className="input-form">
                <select
                  name="cuisineTypes"
                  value={formData.cuisineTypes}
                  onChange={handleChange}
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    outline: "none",
                    padding: "6px",
                  }}
                >
                  <option value="">Select Cuisine Type</option>
                  <option value="Italian">Italian</option>
                  <option value="Chinese">Chinese</option>
                  <option value="Indian">Indian</option>
                  <option value="Mexican">Mexican</option>
                  <option value="French">French</option>
                  <option value="Japanese">Japanese</option>
                  <option value="American">American</option>
                  <option value="Thai">Thai</option>
                  <option value="Mediterranean">Mediterranean</option>
                  <option value="Middle Eastern">Middle Eastern</option>
                </select>
              </div>
            </div>

            <div className="input-spacing">
              <label htmlFor="specialOffer">Special Offer</label>
              <div className="input-form">
                <input
                  type="text"
                  name="specialOffer"
                  value={formData.specialOffer}
                  onChange={handleChange}
                  placeholder="Special Offer"
                />
              </div>
            </div>
          </div>
          <div className="first-row">
            <div className="input-spacing">
              <label htmlFor="seatingCapacity">Seating Capacity</label>
              <div className="input-form">
                <input
                  type="text"
                  name="seatingCapacity"
                  value={formData.seatingCapacity}
                  onChange={handleChange}
                  placeholder="Seating Capacity"
                />
              </div>
            </div>
            <div className="input-spacing">
              <label htmlFor="popularityIndex">Popularity Index</label>
              <div className="input-form">
                <input
                  type="text"
                  name="popularityIndex"
                  value={formData.popularityIndex}
                  onChange={handleChange}
                  placeholder="Popularity Index"
                />
              </div>
            </div>
          </div>
          <Rating
            name="rating"
            value={formData.rating}
            onChange={handleChange}
          />
          <button type="submit" className="submitButton">
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

export default RestaurantForm;
