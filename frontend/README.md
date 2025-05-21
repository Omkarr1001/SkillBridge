# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


 1. What it Does
SkillBridge is a full-stack web application designed to connect learners with curated skill development resources. The application allows users to:

Browse courses or resources

View front-end content (static or dynamic UI)

Eventually support backend APIs for handling data (like user info, course details, etc.)

✅ 2. How to Run Frontend and Backend Locally
To run the app locally on your machine, follow these steps:

🖥 Backend (Spring Boot)
📁 Directory: backend/demo (1)/demo

➤ Prerequisites:
Java JDK (17 or higher)

Gradle (wrapper is already included)

➤ Steps:
Open terminal (cmd or Git Bash):

Navigate to the Spring Boot project directory:

bash
Copy

Edit
cd "backend/demo (1)/demo"
Run the Spring Boot application using Gradle wrapper:

bash
Copy

Edit
gradlew.bat bootRun
If everything is set up correctly, Spring Boot will start the server at:

arduino
Copy

Edit
http://localhost:8080
🌐 Frontend (React)
📁 Directory: frontend/

➤ Prerequisites:
Node.js and npm installed

➤ Steps:
Open a new terminal window (do not close backend one).

Navigate to the frontend directory:

bash
Copy

Edit
cd frontend
Install dependencies:

bash
Copy

Edit
npm install
Start the React app:

bash
Copy

Edit
npm start
Your frontend will open in the browser at:

arduino
Copy

Edit
http://localhost:3000
✅ 3. Technologies Used
Layer	Technology
Frontend	React (JavaScript, JSX)
Backend	Java Spring Boot (REST API)
Build Tool (Backend)	Gradle
Project Structure	Separated frontend and backend folders
Package Manager (Frontend)	npm
