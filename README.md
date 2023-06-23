# Wiki-Api
This is a simple RESTful API for managing articles in a wiki. It provides endpoints for creating, reading, updating, and deleting articles.

## Prerequisites

Before running the application, make sure you have the following installed:

- Node.js
- MongoDB

## Installation

1. Clone the repository:
   git clone <repository_url>

2. Navigate to the project directory:
   cd wiki-api
   
3.Install the dependencies:
  npm install
  
4.Start the server:

5.The server will start running on http://localhost:3000.

Usage
GET /article

Returns all articles stored in the database.

POST /article

Creates a new article. Requires the title and content parameters in the request body.

DELETE /article

Deletes all articles from the database.

GET /articles/:articleTitle

Retrieves a specific article by its title. Returns the article if found, or a corresponding error message if not found.

PUT /articles/:articleTitle

Updates a specific article by its title. Requires the title and content parameters in the request body. The existing article will be overwritten with the new values.

PATCH /articles/:articleTitle

Updates a specific article by its title. Allows updating specific fields of the article. Requires the fields to be updated in the request body.

DELETE /articles/:articleTitle

Deletes a specific article by its title.

Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

License
This project is licensed under the MIT License.

Make sure to replace `<repository_url>` with the actual URL of your GitHub repository. You can customize the content and sections based on your project's specific needs.




