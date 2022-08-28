### setup react application

- creating a react client.
- cd client.
- npx create-react-app.
- npm start.
- copy pasted the assests required for the project into client/src/assets.

### cleaning the Boiler Plate
//removed the following
- App.css
- App.test.js
- logo.svg
- reportwebvitals.js
- setupTests.js

### Title and Favicon

- changed title in public/index.html
- replaced favicon.ico in public
- favicons [https://favicon.io/]

### Normalize.css and Global Styles

- small css files that provides cross browser consistency in the default styling of HTML elements.
- saves times on setup.
- less lines of css.
- speed up the development.
- npm install normalize.css.
- import normalize.css in index.js.
- SET before "index.css" always.

### Landing Page

- created a folder named pages in src.
- inside pages created as Landing.js.

### Styled components
- Used Styled components.
- helps in no name collisions.
- npm install styled-components.
- import styled from 'styled-components'
- there are predefined css in assets/wrappers/...
- we can import them and use it.
- import Wrapper from '../assets/wrappers/LandingPage'.
- wrappers are only used for styling.

### Logo and Images
- Logo built in figma
- Images from Undraw --- undraw.co

### React Router
- version 6
- npm install history@5 and react-router-dom@6
- import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
- Instead of Switch we use Routes.

### React Context
- import React,{useContext} from "react".
- to create a context --- const AppContext = React.createContext()
- to use the provider in an optimized way we can write as below
        const AppProvider = ({children}) =>{
            const [state,setState] = useState("") --- providing the state and function to change state as well.
            return(
                <AppContext.Provider value={{...state}}>
                    <App/>         ---- same as children 
                </AppContext.Provider>
            )
        }
        export {AppProvider}
- so now can always use AppProvider directly to wrap the App component.
        <AppProvider>
            <App/>
        </AppProvider>
- created an custom hook to pass to the context.consumer value i.e
- inorder to access the values from the context instead of writing import {useContext,AppContext} again and again we can use
        const useAppContext = () =>{
            return useContext(AppContext)
        }
- with the above custom hook we can directly import this hook and get access to useContext.consumer values.   

### Server Setup
- cd ..
- create a new file in jobify-app as server.js
- npm init -y
- we can use ES6 modules or common js
- Common Js 
        Const Express = require("express")
        const app = Express()
- ES6 Modules
        import Express from "express"
        const app = Express()
- We use ES6 modules in server a well.
- In order to Use the ES6 modules we need to go to package.json and after main
- we need to add "type":"module",
- after this we will be able to use import and export in the server.
- we need to install nodemon
        npm install nodemon --save-dev
- after this we need to update package.json as below,
        "start":"nodemon server"
- install express
- npm install express
- npm start to run server

### ENV Variables
- To Prevent data and to keep the data hidden and secure we use .env variables.
- npm install dotenv.
- import dotenv from dotenv.
- dotenv.config()
- create .env file
- .gitignore
- /node-modules
- .env

### Mongoose
- "npm install mongoose".
- create folder db.
- create connect.js in db folder.

### Auth Routes and Controllers
- create a folder controllers
- in that create authcontroller.js.
- all the controllers will be in the authcontroller.js
- using async because we are trying to connect with the database.
- export controllers from authcontrollers.js
- export {register,login,updateUser}
- create a folder routes
- in that create authroutes.js
- all the routes will be in authroutes.js
- use const router = express.Router()
- import {register,login,updateUser}

### express async errors package
- helps remove try/catch method
- npm install express-async-errors
- in server.js
- import "express-async-errors"

### status codes
- constant for status codes
- less bugs
- npm install http-status-codes.
- import in authController and error-handler

### HashPassword
- npm install bcryptjs

### JWT setup
- npm install jsonwebtoken
- import jwt from "jsonwebtoken"
- all keys generator for JWT secret.

### Concurrently
- To run both front-end and backend (server)
- npm install concurrently --save-dev
- "server": "nodemon server --ignore client",
  "client":"npm start --prefix client",
  "start":"concurrently --kill-others-on-fail \"npm run server\" \"npm run client\""
- In package.json() scripts {}, add the above lines.

### CORS Error
- when we try to fetch data from one server to other.
- we run into cors error
- cors - cross origins resource sharing
- But when we try to get data from the same server we do not get cors error
- basically for security reasons browser restricts cors between two servers
- so in order to overcome this we can use two methods
- but in this project going for proxy.
        1)CORS package -- npm install cors , after that import cors from "cors", app.use(cors())
        2)Proxy

### Proxy  
- access from anywhere.
- we don't need to use full url.
- in package.json() in client.
- add "proxy":"http://localhost:5000".

### Morgan Package
- http logger middleware for node.js.
- npm install morgan.
- import morgan from 'morgan'
- use only if the env is not in production
- if(process.env.NODE_ENV !== "production"){
        app.use(morgan("dev"))
}
