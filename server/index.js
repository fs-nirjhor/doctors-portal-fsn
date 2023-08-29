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

    const doctorCollection = client.db("doctorsPortal").collection("doctors");

    // post
    app.post("/add-appointment", async (req, res) => {
      const appointment = req.body;
      const result = await appointmentCollection.insertOne(appointment);
      console.log(req.body.service + " appointment successful!");
      res.send(!!result.insertedId);
    });

    app.post("/appointment-by-date", async (req, res) => {
      const date = { date: req.body.date };
      const email = { email: req.body.user.email };
      const doctorsEmail = await doctorCollection.find(email).toArray();
      if (doctorsEmail.length) {
        const allAppointment = await appointmentCollection.find(date).toArray();
        res.send(allAppointment);
      } else {
        const usersAppointment = await appointmentCollection.find(email).toArray();
        const currentAppointment = usersAppointment.filter(appointment => appointment.date === req.body.date);
        res.send(currentAppointment);
      }
    });

    app.post("/add-doctors", (req, res) => {
      const name = req.body.name;
      const email = req.body.email;
      const phone = req.body.phone;
      const photo = req.files.photo;
      photo.mv(`${__dirname}/doctors/${photo.name}`, async (error) => {
        if (error) {
          res.status(500).send(error);
        }
        const doctorData = { name, email, phone, photo: `/${photo.name}` };
        const result = await doctorCollection.insertOne(doctorData);
        res.status(200).send(doctorData);
      });
    });

    app.get("/doctors", async (req, res) => {
      const result = await doctorCollection.find().toArray();
      res.send(result);
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
