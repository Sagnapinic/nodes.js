
console.log("HELLO WORLD");
const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>Bonjour Node !!!!</h1>\n');
});
server.listen(3000, 'localhost', () => {
  console.log('Serveur HTTP démarré sur http://localhost:3000');
});
const fs = require('fs');
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if (err) throw err;
  console.log('Fichier welcome.txt créé avec succès.');
  fs.readFile('welcome.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('Contenu de welcome.txt :', data);
  });
});
const generatePassword = require('generate-password');
const password = generatePassword.generate({
  length: 10,
  numbers: true
});
console.log('Mot de passe généré :', password);
const nodemailer = require('nodemailer');
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'votre_adresse@gmail.com', 
    pass: 'votre_mot_de_passe' 
  }
});

let mailOptions = {
  from: 'votre_adresse@gmail.com', 
  to: 'destinataire@example.com', 
  subject: 'Test d\'envoi d\'e-mail depuis Node.js',
  html: '<p>Voici un e-mail envoyé depuis Node.js avec <b>Nodemailer</b>.</p>'
};
transporter.sendMail(mailOptions, (err, info) => {
  if (err) {
    console.error('Erreur lors de l\'envoi de l\'e-mail :', err);
  } else {
    console.log('E-mail envoyé avec succès !');
    console.log('Informations sur l\'envoi :', info);
  }
});
