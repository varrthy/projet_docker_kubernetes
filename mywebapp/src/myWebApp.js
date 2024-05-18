//myWebApp.js 
// A single service that display a profil with a name, last name, course, university name.
// The display of this web page was configured in an htlm file named myWebApp.html
/***************************************************************************************************************/
// Import required modules
var express = require('express');
var path = require('path');
var app = express();

/***************************************************************************************************************/
// Define port number
var port = process.env.PORT || 3000;

/***************************************************************************************************************/
// Serve the 'myWebApp.html' file when a GET request is made to the root URL ('/').
app.get('/', function (req, res){
    res.sendFile(path.join(__dirname, "myWebApp.html"));
});

/***************************************************************************************************************/
// Start server and listen on defined port
app.listen(port, () => {
    console.log(`First service listening on port ${port}`);
});



