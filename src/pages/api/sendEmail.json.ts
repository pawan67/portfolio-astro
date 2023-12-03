import { mailOptions, transporter } from "@/config/nodemailer";

export const POST = async ({ params, request }) => {
  const body = await request.json();

  const { name, email, message } = body;

  const htmlData = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Form Submission from portfolio site</title>
  </head>
  <body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 0; padding: 20px; background-color: #f8f8f8;">
    <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
      <h2 style="color: #333333; margin-bottom: 20px;">Contact Form Submission</h2>
      <p style="margin-bottom: 10px; color: #555555;"><strong>Name:</strong> ${name}</p>
      <p style="margin-bottom: 10px; color: #555555;"><strong>Email:</strong> ${email}</p>
      <p style="margin-bottom: 10px; color: #555555;"><strong>Message:</strong> ${message}</p>
    </div>
  </body>
  </html>
  `;

  try {
    await transporter.sendMail({
      ...mailOptions(email),
      subject: `New message `,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: htmlData,
    });

    return new Response(
      JSON.stringify({
        message: "Message sent successfully",
      })
    );
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({
        message: "Message failed to send",
      })
    );
  }
};
