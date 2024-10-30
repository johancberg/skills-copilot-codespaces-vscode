// Create web server
// Create comments array
// Create GET /comments route
// Create POST /comments route

const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 3000;

// Create comments array
const comments = [];

// Create GET /comments route
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Create POST /comments route
app.post('/comments', (req, res) => {
  const comment = req.body.comment;
  comments.push(comment);

  res.json({
    message: 'Comment added',
    comment
  });
});

app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Run the server
// Open Postman
// Make a POST request to http://localhost:3000/comments with a JSON body
// Make a GET request to http://localhost:3000/comments

// 4. Middleware
// Middleware is a function that runs between the request and the response of an HTTP request. Middleware functions can execute any code, make changes to the request and response objects, end the request-response cycle, and call the next middleware function in the stack.

// Middleware functions can be used for:
// 1. Logging
// 2. Authentication
// 3. Error handling
// 4. Parsing request data
// 5. Performance monitoring
// 6. Caching
// 7. Compression
// 8. Routing
// 9. And much more

// Middleware functions can be used:
// 1. Application-level middleware: It is used to load the main application and is used to set up the application-wide settings and configurations.
// 2. Router-level middleware: It is used to load the router and is used to perform actions on the router level.
// 3. Error-handling middleware: It is used to handle errors in the application.
// 4. Built-in middleware: It is already included in Express and can be used without installing any additional packages.
// 5. Third-party middleware: It is not included in Express and must be installed separately.

// To use middleware in Express, we use the app.use() method. The app.use() method takes a middleware function as an argument.