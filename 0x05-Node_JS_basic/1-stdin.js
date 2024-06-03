// Import the readline module to handle input and output
const readline = require('readline');

// Create an interface to read lines from the standard input and standard output
const value = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Display the welcome message and ask for the user's name
console.log('Welcome to Holberton School, what is your name?');

// Read the user's input
value.on('line', (input) => {
  // Display the user's input
  console.log(`Your name is: ${input}`);

  // Close the interface
  value.close();
});

// Display a message when the interface is closed
value.on('close', () => {
  console.log('This important software is now closing');
});
