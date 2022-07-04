const {
  activationEmail,
  passwordResetEmail,
  orderInvoice,
} = require("./emailTemplates");

module.exports = (data) => {
  if (data.type === "accountActivation") {
    return {
      from: process.env.EMAIL_FROM,
      to: data.email,
      subject: "Account activation",
      html: activationEmail(data.name, data.activationId),
    };
  }

  if (data.type === "passwordReset") {
    return {
      from: process.env.EMAIL_FROM,
      to: data.email,
      subject: "Password reset",
      html: passwordResetEmail(data.name, data.resetLink),
    };
  }

  if (data.type === "orderInvoice") {
    return {
      from: process.env.EMAIL_FROM,
      to: data.email,
      subject: "Order invoice",
      html: orderInvoice(data.order, data.user),
    };
  }
};
