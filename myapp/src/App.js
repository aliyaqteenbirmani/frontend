import React, { useState } from 'react';
import FetchDataById from './FetchDataById';
import RestaurantsContainer from './DeleteRestaurant';
import RestaurantCard from './RestaurantCard'; // Assuming the card component is in the same folder

const App = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchRestaurantData = async () => {
    setLoading(true);
    setError(null); // Reset error state
    try {
      const response = await fetch('https://localhost:7037/api/Restaurant/GetAllItems'); // Replace with your API URL
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
      setRestaurantData(data); // Set the list of restaurants
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h1>Restaurant Information</h1>
      {/* <FetchDataById/> */}
      <RestaurantsContainer/>
      {/* <button style={styles.button} onClick={fetchRestaurantData}>
        Fetch Restaurant Data
      </button>
      {loading && <p>Loading...</p>}
      {error && <p style={styles.error}>Error: {error}</p>}
      <div style={styles.cardContainer}>
        {restaurantData.map((restaurant, index) => (
          <RestaurantCard key={index} data={restaurant} />
        ))}
      </div> */}
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    margin: '20px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  error: {
    color: 'red',
  },
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '20px',
  },
};

export default App;
