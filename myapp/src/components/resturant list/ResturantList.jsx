import React, { useState, useEffect } from 'react';
import ResturantTile from './ResturantTile';

export default function ResturantList() {
  const [restaurantData, setRestaurantData] = useState([]);  // Store fetched restaurant data
  const [loading, setLoading] = useState(true);  // Loading state

  // Fetch restaurant data from API
  useEffect(() => {
    async function fetchRestaurantData() {
      try {
        const response = await fetch('https://your-api-endpoint.com/restaurants');  // Replace with your API endpoint
        const data = await response.json();
        setRestaurantData(data);  // Store the fetched data
        setLoading(false);  // Set loading to false when data is fetched
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);  // Stop loading in case of error
      }
    }

    fetchRestaurantData();
  }, []);  // Empty dependency array to run this effect once when the component mounts

  return (
    <div className="resturant-tile-container" style={{ width: "60%", display: "block", alignItems: "center", justifyContent: "center" }}>
      {loading ? (
        <p>Loading...</p>  // Show loading message while fetching data
      ) : (
        restaurantData.map((restaurant, index) => (
          <ResturantTile key={index} restaurant={restaurant} />
        ))
      )}
    </div>
  );
}
