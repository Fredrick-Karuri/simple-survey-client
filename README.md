# Simple Survey Client

## Project Description

This is a simple survey application where the frontend is built with React and Vite. The backend of this application is built with Django and Django REST Framework (the backend code can be found in the `simple-survey-api` repository).

## Pre-requisites

- git - v2.13 or greater
- NodeJS - v16 or greater
- npm - v6 or greater

## Installation Instructions

1. **Clone the Repository**: Clone this repository to your local machine using `git clone https://github.com/username/simple-survey-client.git`. Replace `username` with your GitHub username.
2. **Install Dependencies**: Navigate to the project directory and install the project dependencies using `npm install`.

## Running in Dev Environment

1. Navigate to your application directory: `cd YOUR_APPLICATION`
2. Install the dependencies: `npm install`
3. Start the application: `npm start`

Now, open http://localhost:5173 to view it in the browser.

## Running the Storybook

1. Install and initialize Storybook: `npx storybook init`
2. Run the Storybook: `npm run storybook`

## Available Scripts

- `npm start`: Runs the app in the development mode.
- `npm test`: Launches the test runner in the interactive watch mode.
- `npm run build`: Builds the app for production to the `build` folder.
- `npm run eject`: If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. Note: this is a one-way operation. Once you `eject`, you can’t go back!

## Installing a Dependency

You can install any dependencies (for example, React Router) with `npm`:
`npm install --save react-router`

Alternatively you may use yarn:
`yarn add react-router`

## Deployment Instructions

1. **Push Your Changes**: Make sure all your changes are committed and pushed to your GitHub repository.

2. **Create a Vercel Account**: If you haven't already, create a Vercel account and install the Vercel CLI[^3^][5].

3. **Import Your Project**: Import your project into Vercel using the `vercel` command in your terminal[^3^][5]. Vercel will automatically detect that you're using React[^3^][5].

4. **Deploy**: Vercel will build and deploy your React application, providing you with a deployment URL upon completion[^3^][5].

5. **Check Your Application**: Visit the deployment URL to ensure your React application runs correctly on Vercel[^3^][5].


## Contribution Guidelines
Contributions are open! If you have any ideas or suggestions, feel free to make a pull request or open an issue.

