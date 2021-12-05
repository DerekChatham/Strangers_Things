const API_URL = 'https://strangers-things.herokuapp.com/api/2108-LSU-RM-WEB-PT';
 const API_POST = '/posts'
 const API_REGISTER = '/users/register'
 /**
  * This will make a call to the API for a single term and value (e.g. "person", and "unknown"), and return the result
  */
  export const callApi = async ({ url, method, token, body }) => {
    //console.log('callApi: ', { url, method, token, body });
    try {
      const options = {
        method: method ? method.toUpperCase() : 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      };
      if (token) {
        options.headers['Authorization'] = Bearer ${token};
      }
      console.log('Call API Request URL: ', API_URL + url);
      console.log('Call API Options: ', options);
      const response = await fetch(API_URL + url, options);
      const data = await response.json();
      console.log('data: ', data);
      if (data.error) throw data.error;
      return data;
    } catch (error) {
      console.error('ERROR: ', error);
      return error
    }
  };
 /**
  * This will make a call to the API for a preformed url (useful for previous and next buttons), and return the result
  */
 export async function registerUser(user) {
    const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user),
    };
    console.log(options)
   try {
     const response = await fetch(${ BASE_URL }${API_REGISTER}, options);
     const data = await response.json();
     return data;
   } catch (error) {
     throw error;
   }
 }