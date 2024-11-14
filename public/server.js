const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const emailService = require('./src/services/emailService');
const app = express();
const port = 3000;

// Middleware para parsear o corpo da requisição
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Servir arquivos estáticos (HTML, CSS, JS) para o frontend
app.use(express.static('public'));

// Rota para enviar e-mail
app.post('/send-email', async (req, res) => {
    try {
        const { name, email, phone, subject, message } = req.body;
        await emailService.sendEmail(name, email, phone, subject, message);
        res.status(200).send('Mensagem enviada com sucesso!');
    } catch (error) {
        res.status(500).send('Erro ao enviar mensagem: ' + error.message);
    }
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
