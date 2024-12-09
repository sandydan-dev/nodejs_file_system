const fs = require("fs");

const currDate = new Date();

// get date
const year = currDate.getFullYear();
const month = currDate.getMonth();
const day = currDate.getDay();
const fullYearFormat = `${year}:${month}:${day}`;

// get time
const hour = currDate.getHours();
const minute = currDate.getMinutes();
const second = currDate.getSeconds();
const fullTimeFormat = `${hour}:${minute}:${second}`;

// random number
const order = Math.floor(Math.random() * 10000).toString();

try {
  fs.appendFileSync(
    "application_log.txt",
    `\n[${fullYearFormat}] [${fullTimeFormat}] [info] [shippingmodule] Order #A${order} has been shipped`
  );

  console.log("New Data added successfully");
} catch (error) {
  console.log("Error : File not found");
}
