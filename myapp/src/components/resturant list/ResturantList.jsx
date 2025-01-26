import React, { useState, useEffect } from "react";
import ResturantTile from "./ResturantTile";

export default function ResturantList() {
  const [restaurantData, setRestaurantData] = useState([]); // Store fetched restaurant data
  const [loading, setLoading] = useState(true); // Loading state
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`https://localhost:7037/api/Restaurant/DeleteItem?id=${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
      
        setRestaurantData((prevData) => prevData.filter((item) => item.id !== id));
        alert("Item deleted successfully.");
      } else {
        console.error("Failed to delete the item.");
        alert("Failed to delete the item.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while deleting the item.");
    }
  };

  // Fetch restaurant data from API
  useEffect(() => {
    async function fetchRestaurantData() {
      try {
        const response = await fetch(
          "https://localhost:7037/api/Restaurant/GetAllItems"
        ); // Replace with your API endpoint
        const data = await response.json();
        setRestaurantData(data); // Store the fetched data
        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false); // Stop loading in case of error
      }
    }

    fetchRestaurantData();
  }, []); // Empty dependency array to run this effect once when the component mounts

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh", // Full viewport height for proper vertical centering
        backgroundColor: "#f9f9f9", // Optional background color for better visibility
      }}
    >
      {loading ? (
        <p style={{ fontSize: "18px", fontWeight: "bold" }}>Loading...</p> // Centered loading message
      ) : (
        restaurantData.map((restaurant, index) => (
          // <ResturantTile key={index} restaurant={restaurant} />
          <ResturantTile key={restaurant.id} restaurant={restaurant} onDelete={handleDelete} />
        ))
      )}
    </div>
  );
}
