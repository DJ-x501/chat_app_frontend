async function apiFunction({url, payload, id, type}) {
  const useUrl = id ? `${url}/${id}` : url;  
  const token = localStorage.getItem("token");
  const reqType = (type || 'GET').toUpperCase();
  
  const headers = {
    'Content-Type': 'application/json'
  };
  if (token) headers['Authorization'] = `Bearer ${token}`; 
  
  const config = { method: reqType, headers };
  if (reqType !== 'GET' && payload) {
    config.body = JSON.stringify(payload);  
  }
  
  try {
    const response = await fetch(useUrl, config);
    const data = await response.json();
    return data;
  } catch(err) {
    console.error('API Error:', err);  // Better logging
    throw err;
  }
}


export default apiFunction