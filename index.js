import express from "express";
import routes from "./src/routes/crmRoutes";
import mongoose from "mongoose";
import bodyParser from "body-parser";

const app = express();
const PORT = 3000;

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/lynda-crm", {
  useMongoClient: true
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

// serve static files like images from public directory
// app.use(express.static("public"));

app.get("/", (req, res) =>
  res.send(`Node and Express server is running on port ${PORT}`)
);

app.listen(PORT, () => console.log(`Your server is running on port ${PORT}`));
