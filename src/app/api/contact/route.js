// import nodemailer from "nodemailer";
import dbConnect from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import Contact from "@/models/Contact";
import nodemailer from "nodemailer";

export async function POST(request) {
  await dbConnect();
  const data = await request.json();

  // Save to MongoDB
  const savedContact = await Contact.create(data);

  // Send email with Nodemailer
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // Your Gmail address
      pass: process.env.EMAIL_PASS, // App password (not your regular Gmail password)
    },
  });

  await transporter.sendMail({
    from: data.email,
    to: process.env.EMAIL_USER,
    subject: `Portfolio Contact: ${data.name}`,
    text: data.message,
    html: `
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Message:</strong> ${data.message}</p>
    `,
  });

  return NextResponse.json({ message: "Message sent and saved!", data: savedContact });
}
