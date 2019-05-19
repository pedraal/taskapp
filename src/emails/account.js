const sgMail = require("@sendgrid/mail")

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "pgolfier.pro@gmail.com",
    subject: "Welcome to the task app!",
    text: `Welcome to the app ${name}. Let me know how you get along with the app`,
    html: `Welcome to the app <strong>${name}</strong>. Let me know how you get along with the app`
  })
}

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "pgolfier.pro@gmail.com",
    subject: "Good bye from the task app!",
    text: `Good bye dear ${name}. Let me know why you left the app.`,
    html: `Welcome to the app <strong>${name}</strong>. Let me know why you left the app.`
  })
}

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail
}
