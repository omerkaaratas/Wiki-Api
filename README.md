# Wiki API

This is a RESTful API for managing articles in a wiki.

## Prerequisites

- Node.js
- MongoDB

## Installation

1. Clone the repository:
git clone <repository_url>

2. Navigate to the project directory:
cd wiki-api

4. Install the dependencies:
npm install

6. Start the server:
node app.js

8. The server will start running on `http://localhost:3000`.

## Usage

- **GET /article**
Returns all articles stored in the database.

- **POST /article**
Creates a new article.

- **DELETE /article**
Deletes all articles from the database.

- **GET /articles/:articleTitle**
Retrieves a specific article by its title.

- **PUT /articles/:articleTitle**
Updates a specific article by its title.

- **PATCH /articles/:articleTitle**
Updates a specific article by its title.

- **DELETE /articles/:articleTitle**
Deletes a specific article by its title.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

Remember to replace <repository_url> with the actual URL of your GitHub repository. Simply copy the entire block and modify it to suit your project's needs.
