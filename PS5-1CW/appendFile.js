const fs = require("fs");

// Create a formatted date string
const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth();
const day = currentDate.getDay();
const newDateFormat = `${year}:${month}:${day}`; // get full year month day

// get time
const hour = currentDate.getHours();
const minute = currentDate.getMinutes();
const second = currentDate.getSeconds();
const newTimeFormat = `${hour}:${minute}:${second}`

const tag = Math.floor(Math.random() * 10000).toString();
const pid = Math.floor(Math.random() * 10000).toString();

const formattedDate = new Date().toDateString();

try {
  fs.appendFileSync(
    "log.txt",
    `\n${newTimeFormat} ${newDateFormat} [PID : ${pid}] [TAG : ${tag}] New log entry : Data appended at ${formattedDate}`
  );
  console.log("Data appended successfully");
} catch (error) {
  console.log("Error : File not appended properly");
}
