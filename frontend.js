const { spawn } = require("child_process");
const express = require("express");

const app = express();
const PORT = 3000;

let yoloProcess = null;

app.get("/start", (req, res) => {
  if (!yoloProcess) {
    yoloProcess = spawn("python", ["../backend/detector.py"]);
    res.send("YOLOv11 Backend Started");
  } else {
    res.send("YOLO already running");
  }
});

app.get("/stop", (req, res) => {
  if (yoloProcess) {
    yoloProcess.kill();
    yoloProcess = null;
    res.send("YOLO Backend Stopped");
  } else {
    res.send("YOLO not running");
  }
});

app.listen(PORT, () => {
  console.log(`Frontend running at http://localhost:${PORT}`);
});
