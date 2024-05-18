// mysecondapp.js (Second Service)
/***************************************************************************************************************/
// Import required modules
const express = require('express');
const app = express();

/***************************************************************************************************************/
// Define port number
const port = process.env.PORT || 3001;

/***************************************************************************************************************/
// Define route for the root path
app.get('/', (req,res)=>{
     res.send("Hello ! From Second service. "); 
 });

// Start server and listen on defined port
app.listen(port, () => {
    console.log(`Second service listening on port ${port}`);
});
