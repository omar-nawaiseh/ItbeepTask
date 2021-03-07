

const sendingEmail = async (req, res) => {
  if (req) {
    console.log(req.body);
    const { email, name, phoneNumber, offer, time } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'raudyboy99@gmail.com',
        pass: 'qwqw1212qwqw',
      },
    });
    //abject destructuring the body request values
    const mailOptions = {
      from: 'raudyboy99@gmail.com',
      to: email,
      subject: 'Your offer is subbmitted',
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
        console.log('Email sent: ' + info.response);
      }
    });

    res.json('data sent');
  }
};

exports {sendingEmail}