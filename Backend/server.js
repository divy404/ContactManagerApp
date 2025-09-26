const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json()); // middleware
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use(errorHandler); // middleware

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    
});