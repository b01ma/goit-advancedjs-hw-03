// Pixabay API configuration
const API_KEY = '53028647-447da87338472664aa918ac68'; // Your actual API key
const BASE_URL = 'https://pixabay.com/api/';

/**
 * Fetches images from Pixabay API
 * @param {string} query - Search query
 * @param {number} page - Page number (default: 1)
 * @param {number} perPage - Images per page (default: 12)
 * @returns {Promise} - Promise that resolves to the API response
 */
export default function fetchImages(query, page = 1, perPage = 12) {
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    page: page,
    per_page: perPage,
  });

  const url = `${BASE_URL}?${searchParams}`;

  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      if (data.hits.length === 0) {
        throw new Error('No images found for your search query.');
      }
      return data;
    });
}
