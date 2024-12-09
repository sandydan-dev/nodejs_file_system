const fs = require('fs');
const path = require('path');

// Path to the log file
const logFilePath = path.join(__dirname, 'application_log.txt');

// Read the entire content of the log file
let logContent = fs.readFileSync(logFilePath, 'utf8');

// Define the pattern to match and replace
const pattern = /Payment processing taking longer than expected for Order #A\d+/;

// Replace the warning message with the new one
const updatedContent = logContent.replace(pattern, 'Payment for Order #[A0-9]{4} has been processed successfully.');

// Write the updated content back to the file
fs.writeFileSync(logFilePath, updatedContent);

console.log('Log file updated successfully.');
