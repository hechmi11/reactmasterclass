const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const cors = require("cors");
const app = express();
const compression = require("dotenv");
const colors = require("colors");
const path = require("path");
const connectDB = require("./config/db");
connectDB();

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/autos", require("./routes/autoRoutes"));
app.use("/api/tokens", require("./routes/tokenRoutes"));
app.use("/api/role", require("./routes/roleRoutes"));

app.listen(port, () => console.log(`Server started on port ${port}`));
