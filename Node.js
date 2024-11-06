const express = require('express'); //express framework to handle http request
const path = require('path'); //path module for handling file and directory paths

const app = express();
const PORT = 3000;

//array to temporarily store emails (like ArrayList in Java)
const emails = [];

//middleware to parse JSON data
app.use(express.json());

//serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname)));

//route to handle form submission from contact page
app.post('/submit-form', (req, res) => {
    const email = req.body.email;
    console.log(`Received form submission: ${email}`);

    //add the email to the emails array
    emails.push(email);  //store the submitted email in the array

    //send a confirmation response back to the client
    res.send(`Thank you, ${email}! Your form has been submitted.`);
});

//route to retrieve stored emails 
app.get('/emails', (req, res) => {
    res.json(emails);  //respond with the array of stored emails
});

//starts the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

