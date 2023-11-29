export default function handleResponseFromAPI (promise) {
  const newPromise = new Promise((resolve, reject) => {
    if (promise) {
      resolve({ status: 200, body: 'success' });
      console.log('Got a response from the API');
    } else {
      reject({ error: 'error' });
    }
  });
  return newPromise;
}
