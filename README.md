
# Authentication App

This project is a simple authentication app built using **React**, **Redux**, **Jest**, and **TailwindCSS**. It integrates with the [Reqres API](https://reqres.in/) for user registration and login. The app allows users to register, log in, and access a protected dashboard page.

## Features

- **Login & Registration**: Users can register and log in using the Reqres API.
- **Redux**: Manages the app’s authentication state, including user tokens.
- **Protected Routes**: If a user is logged in, they can access the dashboard; otherwise, they are redirected to the login page.
- **Testing**: Jest is used to test the Redux reducers and actions.
- **Responsive Design**: TailwindCSS is used for styling to ensure the app looks great on all devices.

## Tech Stack

- **React** - JavaScript library for building user interfaces.
- **Redux** - State management for handling global application state.
- **Axios** - Promise-based HTTP client for making API requests.
- **Jest** - JavaScript testing framework for unit tests.
- **TailwindCSS** - Utility-first CSS framework for styling.

## Getting Started

Follow the steps below to set up the project locally.

### 1. Clone the repository

```bash
git clone https://github.com/cris-cmk/week-2.git
```

### 2. Install dependencies

In the project directory, run the following command to install the required dependencies:

```bash
npm install
```

### 3. Run the app

Start the development server:

```bash
npm start
```

This will open the app in your browser at `http://localhost:3000`.

### 4. Run the tests

To run the tests for the Redux slice and actions, use the following command:

```bash
npm test
```

This will run Jest and output the test results in the terminal.

## Usage

- **Login**: Users can log in with valid credentials.
  - Example credentials:
    - Email: `eve.holt@reqres.in`
    - Password: `cityslicka`

- **Register**: Users who don't have an account can register via the registration page.
- **Dashboard**: Once logged in, users will be directed to the dashboard page where the JWT token is displayed.

## File Structure

```
/src
  /components
    - Login.js
    - Register.js
    - Dashboard.js
  /redux
    - authSlice.js
    - authSlice.test.js
  /App.js
  /index.js
  /styles.css
  /routes.js
```

- **Login.js**: Contains the login form and logic to authenticate users.
- **Register.js**: Contains the registration form to create new users.
- **Dashboard.js**: Displays a message and the JWT token if the user is logged in.
- **authSlice.js**: Contains Redux slice for handling authentication state.
- **authSlice.test.js**: Contains Jest tests for the authentication Redux slice.


