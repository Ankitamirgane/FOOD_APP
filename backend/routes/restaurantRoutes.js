import express from "express";
import Restaurant from "../models/Restaurant.js";
import upload from "../middleware/upload.js";

const router = express.Router();

// Get all restaurants
router.get("/", async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.json(restaurants);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a new restaurant
router.post("/", async (req, res) => {
  try {
    const { name, location, cuisine } = req.body;
    const newRestaurant = new Restaurant({ name, location, cuisine });
    await newRestaurant.save();
    res.status(201).json(newRestaurant);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Upload an image
router.post("/upload", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }
  res.json({ imageUrl: req.file.path }); // Return the Cloudinary URL
});

export default router;
