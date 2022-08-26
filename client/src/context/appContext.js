import React,{useReducer, useContext} from 'react'
import reducer from './reducer'
import axios from "axios"
import { DISPLAY_ALERT, CLEAR_ALERT,REGISTER_USER_BEGIN,REGISTER_USER_SUCCESS,REGISTER_USER_ERROR } from './actions'

const initialState = {
    isLoading:false,
    showAlert:false,
    alertText:"",
    alertType:"",
    user:null,
    token:null,
    userLocation:"",
    jobLocation:""
}

const AppContext = React.createContext()

const AppProvider = ({children}) =>{
    const [state,dispatch] = useReducer(reducer,initialState)

    const DisplayAlert = () =>{
        dispatch({type:DISPLAY_ALERT})
        ClearAlert()
    }

    const ClearAlert = () =>{
        setTimeout(()=>{
            dispatch({type:CLEAR_ALERT})
        },3000)
    }

    const registerUser = async(currentUser) =>{
        dispatch({type:REGISTER_USER_BEGIN})
        try {
            const response = await axios.post("/api/v1/auth/register",currentUser)
            console.log(response)
            const {user,token,location} = response.data
            dispatch({
                type:REGISTER_USER_SUCCESS,
                payload:{user,token,location}
            })
            //localStorage will be updated later
        } catch (error) {
            console.log(error.response)
            dispatch({type:REGISTER_USER_ERROR,payload:{msg:error.response.data.msg}})
        }
        ClearAlert()
    }

    return(
        <AppContext.Provider value={{...state,DisplayAlert,registerUser}}>
            {children}
        </AppContext.Provider>
    )
}

const useAppContext = () =>{
    return useContext(AppContext)
}

export {useAppContext,AppProvider,initialState}