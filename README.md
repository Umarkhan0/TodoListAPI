# Todo list API

Create a Node.js script that sets up a basic API for a todo list using Express. The API should have the following routes:

-   `GET /api/todos/?key=123`: Return a JSON array of todo objects.
-   `POST /api/todos/?key=123`: Create a new todo item. The request body should contain a JSON object with the todo's title and description.
-   `PUT /api/todos/:id/?key=123`: Update an existing todo item by its ID. The request body should contain a JSON object with the updated todo's title and description.
-   `DELETE /api/todos/:id/?key=123`: Delete a todo item by its ID.

Use an in-memory data structure (e.g., an array) to store the todo items.

Handle errors and implement error middleware

Enhance your Express server to handle errors gracefully. Implement error middleware that catches any unhandled errors and returns appropriate error responses to clients.

Implement input validation

Add input validation to your todo list API. Validate the request body for the `POST /todos` and `PUT /todos/:id` routes to ensure that the required fields are present and have the correct data types. Return appropriate error responses if the input is invalid.
