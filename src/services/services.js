const nodemailer = require('nodemailer');

// Configurar o transporte do Nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'seu-email@gmail.com',
        pass: 'sua-senha-ou-token'
    }
});

// Função para enviar o e-mail
const sendEmail = async (name, email, phone, subject, message) => {
    const mailOptions = {
        from: email,
        to: 'seu-email@dominio.com',
        subject: `Mensagem de ${name} - ${subject}`,
        text: `
            Nome: ${name}
            E-mail: ${email}
            Telefone: ${phone}
            Assunto: ${subject}
            Mensagem:
            ${message}
        `
    };

    await transporter.sendMail(mailOptions);
};

module.exports = { sendEmail };
