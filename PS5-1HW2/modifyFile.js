const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "task_log.txt");

const readFile = fs.readFileSync(filePath, "utf-8");

// append file

let dataAppend =
  "\n[2024-10-24 10:30:00] [INFO] [TaskModule] Task #T006 completed by User #U125.";

try {
  fs.appendFileSync(filePath, dataAppend);
  console.log(dataAppend);
} catch (error) {
  console.log("Error : File not appended ", error);
}

// update data log entry [ERROR]
try {
  const logEntry = `Failed to update task status for Task #T002.`;

  const logEntryUpdate = readFile.replace(
    logEntry,
    "Task #T002 status successfully updated after retry."
  );

  fs.writeFileSync(filePath, logEntryUpdate);
  console.log("File updated successfully");
} catch (error) {
  console.log("Error : While updating data");
}
