import React, { useState } from "react";
import "./formstyle.css";

const ImageUploader = ({ onImageChange }) => {
  const [image, setImage] = useState(
    "https://images.unsplash.com/photo-1566669572994-16c2e3548d74?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  );

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
      onImageChange(file); // Pass the image file to the parent component
    }
  };

  return (
    <div className="image-section">
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="cursor-pointer p-2 border border-gray-300 rounded-md" style={{position:"absolute",top:"300px",right:"1000px"}}
      />
      {image && (
        <img
          src={image}
          alt="Uploaded Preview"
          style={{ width: "400px", height: "600px" }}
        />
      )}
    </div>
  );
};

export default ImageUploader;
