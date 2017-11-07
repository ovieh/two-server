// Require/import the HTTP module
const http = require("http");

// Define a port to listen for incoming requests
const PORTGOOD = 7000,
    PORTBAD = 7500;

// Create a generic function to handle requests and responses
const goodRequest = (request, response) => {

    // Send the below string to the client when the user visits the PORT URL
    response.end("You smell great!! Path Hit: " + request.url);
}
// Create a generic function to handle requests and responses
const badRequest = (request, response) => {
    
        // Send the below string to the client when the user visits the PORT URL
        response.end("You smell bad!! Path Hit: " + request.url);
    }
    

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
const server1 = http.createServer(goodRequest);

const server2 = http.createServer(badRequest);


// Start our server so that it can begin listening to client requests.
server1.listen(PORTGOOD, () => {

    // Log (server-side) when our server has started
    console.log("You smell nice!: http://localhost:" + PORTGOOD);
});

// Start our server so that it can begin listening to client requests.
server2.listen(PORTBAD, () => {

    // Log (server-side) when our server has started
    console.log("You smell bad! on: http://localhost:" + PORTBAD);
});