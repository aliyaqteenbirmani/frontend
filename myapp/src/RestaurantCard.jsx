import React from 'react';

const RestaurantCard = ({ data }) => {
  return (
    <div style={styles.card}>
      <h2 style={styles.title}>{data.name}</h2>
      <p style={styles.description}>{data.description}</p>
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
        <strong>Cuisine Types:</strong> {data.cuisineTypes.join(', ')}
      </p>
      <p>
        <strong>Ratings:</strong> ⭐ {data.ratings} / 5
      </p>
      <p>
        <strong>Health Rating:</strong> {data.healthRating}%
      </p>
      <p>
        <strong>Seating Capacity:</strong> {data.seatingCapacity} people
      </p>
      <p>
        <strong>Special Offers:</strong> {data.specialOffers}
      </p>
      <p>
        <strong>Popularity Index:</strong> {data.popularityIndex}
      </p>
      <p>
        <strong>Location:</strong> Lat: {data.latitude}, Long: {data.longitude}
      </p>
    </div>
  );
};

// Inline styles for the card
const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    maxWidth: '400px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    margin: '20px auto',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f9f9f9',
  },
  title: {
    margin: '0 0 10px',
    fontSize: '24px',
    color: '#333',
  },
  description: {
    fontStyle: 'italic',
    marginBottom: '10px',
    color: '#666',
  },
};

export default RestaurantCard;
