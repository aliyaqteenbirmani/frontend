import React, { useState } from "react";
 
const RestaurantCard = ({ data, onDelete }) => {
  return (
<div style={styles.card}>
<div>
<h2>{data.name}</h2>
<p>{data.description}</p>
<p>
<strong>Opening Hours:</strong> {data.openingHours}
</p>
<p>
<strong>Contact:</strong> {data.contactInfo}
</p>
<p>
<strong>Address:</strong> {data.address}
</p>
<p>
<strong>Cuisine Types:</strong> {data.cuisineTypes.join(", ")}
</p>
<p>
<strong>Health Rating:</strong> {data.healthRating}%
</p>
<p>
<strong>Seating Capacity:</strong> {data.seatingCapacity}
</p>
<p>
<strong>Popularity Index:</strong> {data.popularityIndex.toLocaleString()}
</p>
<p>
<strong>Special Offers:</strong> {data.specialOffers}
</p>
</div>
<div style={styles.actions}>
<button style={styles.editButton}>Edit</button>
<button style={styles.deleteButton} onClick={() => onDelete(data.id)}>
          Delete
</button>
</div>
</div>
  );
};
 
const RestaurantsContainer = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);
 
  // Fetch restaurants data using the fetch API
  const fetchRestaurants = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://localhost:7037/api/Restaurant/GetAllItems"); // Replace with your API URL
      if (!response.ok) throw new Error("Failed to fetch data");
      const data = await response.json();
      setRestaurants(data);
    } catch (error) {
      console.error("Error fetching restaurants:", error);
    }
    setLoading(false);
  };
 
  // Delete restaurant using the fetch API
  const deleteRestaurant = async (id) => {
    try {
      const response = await fetch(`https://localhost:7037/api/Restaurant/DeleteItem?id=${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Failed to delete");
      setRestaurants((prevRestaurants) =>
        prevRestaurants.filter((restaurant) => restaurant.id !== id)
      );
      alert("Restaurant deleted successfully!");
    } catch (error) {
      console.error("Error deleting restaurant:", error);
    }
  };
 
  return (
<div style={styles.container}>
<button style={styles.fetchButton} onClick={fetchRestaurants}>
        {loading ? "Loading..." : "Fetch Restaurants"}
</button>
<div style={styles.list}>
        {restaurants.map((restaurant) => (
<RestaurantCard
            key={restaurant.id}
            data={restaurant}
            onDelete={deleteRestaurant}
          />
        ))}
</div>
</div>
  );
};
 
// Inline styles
const styles = {
  container: {
    textAlign: "center",
    margin: "20px",
  },
  fetchButton: {
    backgroundColor: "#2a265f",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "14px",
    marginBottom: "20px",
  },
  list: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    width: "300px",
    textAlign: "left",
  },
  actions: {
    marginTop: "10px",
    display: "flex",
    justifyContent: "space-between",
  },
  editButton: {
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    padding: "8px 16px",
    borderRadius: "5px",
    cursor: "pointer",
  },
  deleteButton: {
    backgroundColor: "#f44336",
    color: "white",
    border: "none",
    padding: "8px 16px",
    borderRadius: "5px",
    cursor: "pointer",
  },
};
 
export default RestaurantsContainer;