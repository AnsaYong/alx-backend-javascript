export default function getResponseFromAPI() {
  return new Promise((resolve) => {
    // Simulating an API call that resolves after 1 second
    setTimeout(() => {
      resolve('Response from API');
    }, 1000);
  });
}
