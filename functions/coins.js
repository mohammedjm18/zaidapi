const axios = require('axios');
const FormData = require('form-data');

const url = 'https://etisalrx.com/panel/include/modules/coins.php';

// Create form data
const formData = new FormData();
formData.append('coins', -84);
formData.append('profile_id', 28);
formData.append('action', 'add');

// Make the POST request
axios.post(url, formData)
  .then(response => {
    console.log('Response:', response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
