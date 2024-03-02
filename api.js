const express = require("express");
const app = express();

require("dotenv").config();
const port = process.env.PORT || 5151;

const routes = require('./src/Routes/routes');

app.use(express.json());
app.use('/', routes);

app.listen(port, () => {
    console.log(`Api is running in url: http://localhost:${port}`);
});