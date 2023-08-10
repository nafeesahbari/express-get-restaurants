const express = require("express");
const app = express();
const Restaurant = require("../models/index")
const db = require("../db/connection");

//TODO: Create your GET Request Route Below:
// Restaurants & GET method
app.get("/restaurants", async (req, res) => {
  try {
    // Get all restaurants params from the database
    const restaurants = await Restaurant.findAll();
    // Send the restaurants as a JSON response
    res.json(restaurants);
  } catch (error) {
    // Error response
    res.status(500).json({ error: "Internal server error" });
  }
});


module.exports = app;