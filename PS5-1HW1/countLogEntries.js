const fs = require("fs");

try {
  const data = fs.readFileSync("application_log.txt", "utf-8");
  const logEntryLength =  data.trim().split("\n").length;

//   console.log(data);
  console.log(`\nLog Entry length is ${logEntryLength}`);
} catch (error) {
  console.log("Error : file not found");
}
