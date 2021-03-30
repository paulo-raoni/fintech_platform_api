
# Fintech Platform API

This is project is a basic simulation of a fintech platform API.

# General Information

### Authentication
- The auth was developed using ***passport*** with **Local Strategy**.
- **bcryptjs** was used for password encryption.

### Project Structure and Architecture
- The project is REST API architecture based. 
- There are layers for routes, controllers, services and models.
- The entry point is server.js file

### Technology and Tools Used
- ``NodeJS`` with Express.
- ``NoSQL`` database with MongoDB.
- ``Visual`` Studio Code as the IDE.
- ``Postman`` for requests simulation

# Intructions

## Requirements for local tests
- To make database analysis download and install [MongoDB Compass](https://www.mongodb.com/try/download/compass) and configure it as local.
- Download and install [NodeJS](https://nodejs.org/en/download/) globally. Any issue with installation refer to this [article](https://phoenixnap.com/kb/install-node-js-npm-on-windows).
- For best experience, use Visual Studio Code for debugging and edit
- For HTTP requests use a RESTful API tool such as [POSTMAN](https://www.postman.com/downloads/) or [INSOMNIA](https://insomnia.rest/download)


## Installation


- After downloading (by clone or zip)

- Inside the application directory open a terminal

- Install all dependencies using 'npm i'
  

## To run application
````bash
Just type 'npm run dev' via terminal and the server will start listening on port 3000
````
Tip: Use vscode ``launch.json`` to run the application on ``debug mode``.  See this [article](https://code.visualstudio.com/docs/nodejs/nodejs-debugging) for more info

# Requests and payloads (examples)
**apiBaseUrl** is *'localhost:3000'* or *'https://...'* (if deployed)

### USER SCHEMA

#### User Register

````javascript
ENDPOINT: POST <apiBaseUrl>/register
````

````javascript
REQUEST_PAYLOAD:
{
	"username":  "paulo-raoni",
	"password":  "1234",
	"cpf":  12345678910,
	"name":  "Paulo Raoni"
}
 ````

````javascript
RESPONSE_PAYLOAD:
{
    "message": "User has been registered!"
}
````

#### Login with a existent user
````javascript
ENDPOINT: POST <apiBaseUrl>/login
````


````javascript
REQUEST_PAYLOAD:
{
	"username":  "paulo_raoni",
	"password":  "1234"
}
````

````javascript
RESPONSE_PAYLOAD:
{
    "user": {
        "checkingAccountAmount": 0,
        "_id": "60638454f4a7b140e83bf19d",
        "username": "paulo-raoni",
        "passwordHash": "$2a$10$8ob3N4CMEBE3xK6PWip1lOVcd//tQEynP5KdjewNgtb0sysXkco2K",
        "name": "Paulo Raoni",
        "cpf": 12345678910,
        "createdAt": "2021-03-30T20:04:36.452Z",
        "updatedAt": "2021-03-30T20:04:36.452Z",
        "__v": 0
    }
}
````



#### Logout from platform
````javascript
ENDPOIN: GET <apiBaseUrl>/logout
````

````javascript
RESPONSE_PAYLOAD:
{
    "message": "Logged Out successfully!"
}
````


### POSITION SCHEMA

#### Create positions list for user. 
###### *Here the 'id' field represents the user. To find out the user id, you can use the MongoDB Compass or simply grab from the login endpoint's response.*

````javascript
ENDPOINT: POST <apiBaseUrl>/position
````

````javascript
REQUEST_PAYLOAD:
{
	"id": "6060e02e698aca3fd0a57c61",
	"positions": [
		{	
			"symbol": "PETR4",
			"amount": 2,
			"currentPrice": 28.44
		},
		{
			"symbol": "SANB11",
			"amount": 3,
			"currentPrice": 40.77
		}
	]
}
````

````javascript
RESPONSE_PAYLOAD:
{
    "positions": [
        {
            "symbol": "PETR4",
            "amount": 2,
            "currentPrice": 28.44
        },
        {
            "symbol": "SANB11",
            "amount": 3,
            "currentPrice": 40.77
        }
    ],
    "_id": "6060ed466818ae3c64a8dd2a",
    "owner": "6060e02e698aca3fd0a57c61",
    "createdAt": "2021-03-28T20:55:34.063Z",
    "updatedAt": "2021-03-28T20:55:34.063Z",
    "__v": 0
}
````

#### Retrieve positions list from specific user. 

````javascript
ENDPOINT: GET <apiBaseUrl>/position/6060e02e698aca3fd0a57c61
````

````javascript
RESPONSE_PAYLOAD:
{
    "positions": [
        {
            "symbol": "PETR4",
            "amount": 2,
            "currentPrice": 28.44
        },
        {
            "symbol": "SANB11",
            "amount": 3,
            "currentPrice": 40.77
        }
    ],
    "_id": "6060ed466818ae3c64a8dd2a",
    "owner": "6060e02e698aca3fd0a57c61",
    "createdAt": "2021-03-28T20:55:34.063Z",
    "updatedAt": "2021-03-28T20:55:34.063Z",
    "__v": 0
}

````

