const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs-extra");
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
const { fsyncSync } = require("fs-extra");
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
      const date = req.body.date ;
      const email = req.body.user.email ;
      const doctorsEmail = await doctorCollection.find({email}).toArray();
      if (doctorsEmail.length) {
        const allAppointment = await appointmentCollection.find({date:date}).toArray();
        res.send(allAppointment);
      } else {
        const usersAppointment = await appointmentCollection.find({date:date,email}).toArray();
        res.send(usersAppointment);
      }
    });

    app.post("/add-doctors", (req, res) => {
      const name = req.body.name;
      const email = req.body.email;
      const phone = req.body.phone;
      const photo = req.files.photo;
      const filePath = `${__dirname}/doctors/${photo.name}`;
      photo.mv(filePath, async (error) => {
        if (error) {
          res.status(500).send(error);
        }
        const newImg = fs.readFileSync(filePath).toString("base64");
        const img = Buffer.from(newImg,"base64");
        
        const image = {contentType: photo.mimetype, size: photo.size, img:`data:${photo.mimetype};base64,`+img }
        // the photo can get through link (/photo) and also with binary data (img)
        const doctorData = { name, email, phone, photo: `/${photo.name}`, image };
        // remove is essential for save as binary
        //fs.remove(filePath);
        const result = await doctorCollection.insertOne(doctorData);
        res.status(200).send(doctorData);
      });
    });

    app.get("/doctors", async (req, res) => {
      const result = await doctorCollection.find().toArray();
      res.send(result);
    });

    app.post('/isDoctor', async (req, res) => {
      const email = req.body.email;
      const isDoctor = await doctorCollection.find({email}).toArray();
      res.send(!!isDoctor.length);
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
