## Q3 data access project for wellington group

### Team Members

- Dwain
- John
- Leone
- Juami
- Brayden

### How to run:

Before starting the app for the first time, open a terminal and enter into the project.
- Enter into the client folder
- run "npm install"
- Enter into the server folder
- run "npm install"

- While inside the client folder "npm start" will start the front end server with the application.
- While inside the server folder "npm run devStart" will start the back-end server.

(using a split terminal to see client and server command lines at once helps here.)

Please note if cloning repo from github. The project will need a '.env' file created holding the secret keys and strings for this project. <br />
The file path used will be /server/environment/.env. <br />
Inside this file you will need to add... <br />
- API_PORT = 'Desired port number'
- MONGO_URI = 'Specific connection string for mongo atlas account'
- TOKEN_KEY = 'Any random generated token as a string'

