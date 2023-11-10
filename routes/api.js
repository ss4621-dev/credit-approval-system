const express = require("express");
const router = express.Router();
const Customer = require("../models/customerModel");

// Register a new Customer
router.post("/register", async (req, res) => {
  try {
    const { first_name, last_name, age, monthly_income, phone_number } =
      req.body;

    // Here we are calculating approved credit limit based on the salary
    const approved_limit = Math.round((36 * monthly_income) / 100000) * 100000;

    // After that we are creating a new customer
    const newCustomer = new Customer({
      first_name,
      last_name,
      age,
      monthly_income,
      phone_number,
    });

    // Here we save the customer that was created
    const registeredCustomer = await newCustomer.save();

    res.status(201).json(registeredCustomer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
