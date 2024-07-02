const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 3000


app.set('view engine', 'html'); // Set View engine to html for the Express app
app.use(express.static('public')); // Use public folder to hold static web resources

// Middleware to parse JSON and urlencoded form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Route to serve the index.html
app.get('/', (req, res) => {
    res.sendFile(__dirname + 'public/index.html');
})

// Route to serve the waitlist.html
app.get('/company/waitlist', (req, res) => {
    res.sendFile(__dirname + '/public/views/company/waitlist.html');
})

// Route to serve the comingsoon.html
app.get('/company/comingsoon', (req, res) => {
    res.sendFile(__dirname + '/public/views/company/comingsoon.html');
})

// Route to serve the login.html
app.get('/login/login', (req, res) => {
    res.sendFile(__dirname + '/public/views/login/login.html');
})

// Route to serve the reset.html
app.get('/login/reset', (req, res) => {
    res.sendFile(__dirname + '/public/views/login/reset.html');
})

// Route to serve the signup.html
app.get('/login/signup', (req, res) => {
    res.sendFile(__dirname + '/public/views/login/signup.html');
})

// Route to serve the request.html
app.get('/products/request', (req, res) => {
    res.sendFile(__dirname + '/public/views/products/request.html');
})

// Route to serve the contact.html
app.get('/miscellaneous/contact', (req, res) => {
    res.sendFile(__dirname + '/public/views/miscellaneous/contact.html');
})

















app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
