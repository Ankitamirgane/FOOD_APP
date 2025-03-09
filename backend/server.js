import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

// ✅ Load environment variables
dotenv.config();

const app = express();
app.use(express.json()); // ✅ Middleware for JSON parsing
app.use(cors()); // ✅ Allows cross-origin requests

// **✅ Connect to MongoDB**
mongoose
  .connect(process.env.MONGODB_URI || "mongodb+srv://mirganeankita:ankita%4031@cluster0.dfa8a.mongodb.net/foodie?retryWrites=true&w=majority")
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.log("❌ MongoDB connection error:", err));

// ✅ User Schema & Model
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String, // ⚠️ Encrypt this in a real app!
});
const User = mongoose.model("User", userSchema);

// **🔹 Signup Route**
app.post("/api/auth/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ msg: "All fields are required" });
    }

    // ✅ Save user to MongoDB
    const newUser = new User({ name, email, password });
    await newUser.save();

    console.log("✅ User registered:", newUser);
    res.status(201).json({ msg: "User registered successfully!" });
  } catch (error) {
    console.error("❌ Signup error:", error);
    res.status(500).json({ error: error.message });
  }
});

// **🚀 Start the server**
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
