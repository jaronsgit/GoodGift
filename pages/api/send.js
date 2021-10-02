const nodemailer = require("nodemailer");

//Asynchronous function to create nodemailer email transporter
const createTransporter = async () => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USERNAME,
      pass: process.env.GMAIL_PASSWORD,
    },
    // host: "smtp.ethereal.email",
    // port: 587,
    // auth: {
    //   user: "zion64@ethereal.email",
    //   pass: "99mJ74dn5GXstgyuE1",
    // },
  });

  return transporter;
};

//emailOptions - who sends what to whom
const sendEmail = async (emailOptions) => {
  let emailTransporter = await createTransporter();
  await emailTransporter.sendMail(emailOptions);
};

export default async (req, res) => {
  if (req.method === "POST") {
    // Process a POST request
    const {
      sender,
      sender_email,
      message,
      receiver,
      receiver_email,
      transactionID,
    } = req.body;

    const from = `"${sender}" | <goodgiftdelivery@gmail.com>`;
    const subject = `You have received a gift on GoodGift!`;
    const text = `Name: ${sender}, Email: ${receiver_email}, Message: ${message}`;
    const html = `<div><h1>${sender}</h1><h2>${`https://goodgift.vercel.app/receive/${transactionID}`}</h2><p>${message}</p></div>`;

    await sendEmail({
      from: from, // sender address
      to: receiver_email, // list of receivers
      subject: subject, // Subject line
      text: text, // plain text body
      html: html, // html body
    })
      .then((info) => {
        console.log({ info });
        res.status(200).send("Success!");
      })
      .catch((error) => {
        res.status(500).send("Failure :( | " + error);
      });
  } else {
    // Handle any other HTTP method
    res.status(418).send("I'm a teapot.");
  }
};
