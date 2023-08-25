const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
require("dotenv").config();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("doctors"));
app.use(fileUpload());

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@doctors-portal-fsn.5lopyzi.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();

    const appointmentCollection = client
      .db("doctorsPortal")
      .collection("appointment");

    // post
    app.post("/add-appointment", async (req, res) => {
      const appointment = req.body;
      const result = await appointmentCollection.insertOne(appointment);
      console.log(req.body.service + " appointment successful!");
      res.send(!!result.insertedId);
    });

    app.get("/appointment-by-date", async (req, res) => {
      //  const date = req.body ;
      const date = { date: req.query.date };
      console.log("date", date);
      const result = await appointmentCollection.find(date).toArray();
      console.log(result);
      // res.send(result[0]);
      res.send(result);
    });

    app.post("/add-doctors", (req, res) => {
      const name = req.body.name;
      const email = req.body.email;
      const photo = req.files.photo;
      console.log(name, email, photo);
    });

    // pinged to mongodb
    await client.db("doctorsPortal").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Backend Server of DOCTORS PORTAL FSN");
});

app.listen(port, () => {
  console.log(`Doctors Portal Server is running on port http://localhost:5000`);
});
