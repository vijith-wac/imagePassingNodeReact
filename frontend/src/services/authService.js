// src/services/authService.js

const API_URL = 'https://api.escuelajs.co/api/v1/auth';

export const login = async (email, password) => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error('Login failed: ' + (await response.text())); // Get error message from response
    }

    const data = await response.json();
    return data.access_token; // Return the token
  } catch (error) {
    console.error('Error during login:', error);
    throw error; // Rethrow the error to be handled by the caller
  }
};
