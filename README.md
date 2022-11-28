
# MERN Stack with JWT Auth Boilerplate

- A full stack MERN boilerplate built for web apps which includes authentication/authorization via JWT.
- Users are able to register with a full name, e-mail, username, and password.
- Logins are made by either a username or an e-mail as well as a password.

With Linux/MacOS systems, the Makefile included in the boilerplate can be of use.

For Windows systems, the built-in package manager (npm) would suffice.

Separation of the backend and the frontend will be available.




## Setup

Before starting, make sure that the environment variables are setup in the server side. (~/server/src/config/.env)


For Linux/MacOS systems:
```bash
  make install
  make start
```

For Windows systems:
(On client directory and server directory)
```bash
  npm install
  npm start
```
With yarn:
```bash
  yarn
  yarn start
```


## API Reference

#### Register account

```http
  POST /api/user/register
  @ACCESS: Public
```

| Parameter | Type     | Description                | 
| :-------- | :------- | :------------------------- | 
| `name` | `string` | **Required**. Your full name | 
| `username` | `string` | **Required**. Your username | 
| `email` | `string` | **Required**. Your email | 
| `password` | `string` | **Required**. Your password |
| `password2` | `string` | **Required**. Confirm your password | 

#### Login

```http
  POST /api/user/login
  @ACCESS: Public
```

| Parameter | Type     | Description                | 
| :-------- | :------- | :------------------------- | 
| `email` | `string` | **Required**. Use this in place of a username | 
| `username` | `string` | Use this in place of an email| 
| `password` | `string` | **Required**. Your password | 


#### Delete account

```http
  DELETE /api/user/
  @ACCESS: Private
```

| Parameter | Type     | Description                | 
| :-------- | :------- | :------------------------- | 
| `email` | `string` | **Required**. Your email | 
| `password` | `string` | **Required**. Your password |



#### Change password

```http
  POST /api/user/change
  @ACCESS: Private
```

| Parameter | Type     | Description                | 
| :-------- | :------- | :------------------------- | 
| `email` | `string` | **Required**. Your email | 
| `password` | `string` | **Required**. Your password |
| `newPassword` | `string` | **Required**. Your new password | 





## Authors

- [@ardey26](https://www.github.com/ardey26)

