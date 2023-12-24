const express = require("express");
const colors = require("colors");
const cors = require("cors");
const compression = require("compression");
const path = require("path");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
const PORT = process.env.PORT || 5000;
connectDB();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/autos", require("./routes/autoRoutes"));
app.use("/api/tokens", require("./routes/tokenRoutes"));
app.use("/api/roles", require("./routes/roleRoutes"));

app.use(compression());
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
