const express = require("express");
const app = express();

// Here we are using body parsing middleware
app.use(express.json);

// Now we are defining API Routes
const apiRoutes = require("./routes/api");
app.use("/api", apiRoutes);

// Start the Server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
