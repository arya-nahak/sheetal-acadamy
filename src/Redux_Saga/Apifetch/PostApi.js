export const PostApi = (data) => {
    return fetch('https://real-pear-fly-kilt.cyclic.app/accounts/register', {
      method: 'post',
      headers : {
        'Content-Type' : "application/json"
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((json) => json)
      .catch((error) => Promise.reject(error));
  };