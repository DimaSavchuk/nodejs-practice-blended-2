const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp-mail.outlook.com",
  port: 587,
  secure: false,
  auth: {
    user: "sergii_goit_77@outlook.com",
    pass: "qwe123_goit",
  },
});

async function sendEmail({ userEmail, userName, userText }) {
  const output = `
<h1 style="color:green">Ви отримали листа від ${userName}</h1>
    <h2>Email для контакту: ${userEmail}</h2>
    <h2>Текст повідомлення ${userText}</h2>
    <h2 style="color:blue">Never, never send again</h2>
 `;

  const info = await transporter.sendMail({
    from: "sergii_goit_77@outlook.com",
    to: "molchanse@gmail.com",
    subject: "Лист для Директора",
    text: userText,
    html: output,
  });

  console.log("Message sent: %s", info.messageId);
}

module.exports = sendEmail;
