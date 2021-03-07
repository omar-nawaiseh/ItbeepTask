import express from "express";
import mongoose from "mongoose";
import nodemailer from "nodemailer";
import cors from "cors";
const app = express();
app.use(express.json());

app.use(cors());

app.get("/info", (req, res) => {
  res.send("we are on home");
});
app.post("/info", (req, res) => {
  if (req) {
    console.log(req.body);
    const { email, name, phoneNumber, offer, time } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "raudyboy99@gmail.com",
        pass: "qwqw1212qwqw",
      },
    });
    //abject destructuring the body request values
    const mailOptions = {
      from: "raudyboy99@gmail.com",
      to: email,
      subject: "Your offer is subbmitted",
      text: `Thank you for chosing us this is your information
    Name: ${name}
    Phone Number: ${phoneNumber}
    offer: ${offer} time: ${time}
     
      `,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });

    res.json("data sent");
  }
});

mongoose.connect(
  "mongodb+srv://osama:asas1212@cluster0.p7zpz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("connected")
);
app.listen(3500);
