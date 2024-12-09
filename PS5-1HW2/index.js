const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "task_log.txt");

try {
  const data = fs.readFileSync(filePath, "utf-8");
    console.log(data);

  // Initialize counters for each severity level
  let infoCount = 0;
  let errorCount = 0;
  let debugCount = 0;
  let warningCount = 0;
  let fatalCount = 0;
  const logEntries = data.split("\n");

  logEntries.forEach((entry) => {
    if (entry.includes("[INFO]")) infoCount++;
    else if (entry.includes("[ERROR]")) errorCount++;
    else if (entry.includes("[DEBUG]")) debugCount++;
    else if (entry.includes("[WARNING]")) warningCount++;
    else if (entry.includes("[FATAL]")) fatalCount++;
  });

  console.log("Log Entry Counts:");
  console.log(`INFO: ${infoCount}`);
  console.log(`ERROR: ${errorCount}`);
  console.log(`DEBUG: ${debugCount}`);
  console.log(`WARNING: ${warningCount}`);
  console.log(`FATAL: ${fatalCount}`);
} catch (error) {
  console.log("Error  : File not found", error);
}
