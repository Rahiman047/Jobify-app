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