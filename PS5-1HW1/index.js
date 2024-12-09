const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "application_log.txt");

try {
  const data = fs.readFileSync(filePath, "utf-8");
  const dataLength = data.trim().split("\n").length;
  console.log(data);
  console.log(`Number of log entries: ${dataLength}`);
} catch (error) {
  console.log("Error : File not found", error);
}
