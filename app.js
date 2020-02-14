const express = require("express");

const adminRoutes = require("./routes/admin.js");
const shopRoutes = require("./routes/shop.js");

const app = express();

app.use(express.urlencoded({ extended: false }));

app.use(adminRoutes);

app.use(shopRoutes);

app.listen(3000, "localhost");
