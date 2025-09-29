import express from "express";
import multer from "multer";
import path from "path";

// Needed for __dirname with ES modules
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create Express app
const app = express();
const PORT = 8000;

// Serve basic route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Multer storage setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

// Multer middleware
const upload = multer({ storage });

// Single file upload (only .js allowed)
app.post("/upload", upload.single("file"), (req, res) => {
  if (req.file.mimetype !== "application/javascript") {
    return res.status(400).send("Only .js files allowed!");
  }
  res.json({
    message: "File uploaded successfully!",
    file: req.file,
  });
});

// Multiple file upload (max 5 files)
app.post("/uploads", upload.array("files", 5), (req, res) => {
  if (!req.files || req.files.length === 0) {
    return res.status(400).send("No files uploaded");
  }
  res.json({
    message: "Files uploaded successfully!",
    files: req.files,
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
