import React, { useState } from 'react';

const FetchDataById = () => {
  const [inputId, setInputId] = useState('');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFetchData = async () => {
    if (!inputId) {
      setError('Please provide a valid ID.');
      return;
    }

    setLoading(true);
    setError(null); // Reset error
    setData(null);  // Reset previous data

    try {
      const response = await fetch(`https://localhost:7037/api/Restaurant/GetItemById?id=${inputId}`); // Replace with your API URL
      if (!response.ok) {
        throw new Error(`Error fetching data! Status: ${response.status}`);
      }
      const result = await response.json();
      setData(result); // Update the state with the fetched data
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h1>Fetch Data by ID</h1>
      <div style={styles.inputContainer}>
        <input
          type="text"
          placeholder="Enter ID"
          value={inputId}
          onChange={(e) => setInputId(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleFetchData} style={styles.button}>
          Fetch Data
        </button>
      </div>
      {loading && <p>Loading...</p>}
      {error && <p style={styles.error}>Error: {error}</p>}
      {data && (
        <div style={styles.resultContainer}>
          <h3>Fetched Data:</h3>
          <pre style={styles.data}>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    margin: '20px',
  },
  inputContainer: {
    marginBottom: '20px',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    marginRight: '10px',
    width: '250px',
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
  resultContainer: {
    marginTop: '20px',
    textAlign: 'left',
    display: 'inline-block',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    backgroundColor: '#f9f9f9',
  },
  data: {
    textAlign: 'left',
    whiteSpace: 'pre-wrap',
    wordWrap: 'break-word',
    fontSize: '14px',
  },
};

export default FetchDataById;
