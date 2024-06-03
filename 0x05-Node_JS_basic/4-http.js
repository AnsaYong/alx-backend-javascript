const http = require('http');

// Create a server object
const app = http.createServer((req, res) => {
  // Set the response HTTP header with HTTP status and Content type
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send the response body "Hello Holberton School!"
  res.end('Hello Holberton School!');
});

// The server object listens on port 1245
app.listen(1245);

// Export the app object
module.exports = app;
