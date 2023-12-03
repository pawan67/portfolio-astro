import nodemailer from "nodemailer";

const email = import.meta.env.EMAIL;
const password = import.meta.env.PASSWORD;

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass: password,
  },
  host: "smtp.gmail.com",
  secure: true,
});

export const mailOptions = (to: string) => ({
  from: email,
  to: "pawantamada8@gmail.com",
});

