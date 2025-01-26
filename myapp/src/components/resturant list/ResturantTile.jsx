import React from "react";
import "./tilestyle.css";

export default function ResturantTile({ restaurant }) {
  return (
    <div className="tile-container">
      <div className="tile-image">
        {/* Replace with actual image URL if available */}
        <img
          src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Restaurant"
        />
      </div>
      <div className="tile-data">
        <div className="tile-column">
          <h3>{restaurant.name}</h3>
          <p>{restaurant.description}</p>
        </div>
        <div className="tile-operation">
          <div className="tile-time-rating">
            <div className="tile-time">
              {/* Format opening hours or add custom logic for time display */}
              <p id="timing">{restaurant.openingHours}</p>
            </div>
            <div className="tile-rating">
              {/* Display rating (e.g., as stars) */}
              <p>{restaurant.rating} ⭐</p>
            </div>
          </div>
          <div className="operation-button">
            <div className="tile-button" style={{ backgroundColor: "green" }}>
              <button>Location</button>
            </div>
            <div className="tile-button" style={{ backgroundColor: "blue" }}>
              <button>Edit</button>
            </div>
            <div className="tile-button" style={{ backgroundColor: "red" }}>
              <button>Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
