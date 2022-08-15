import React,{useReducer, useContext} from 'react'
import reducer from './reducer'
import { DISPLAY_ALERT, CLEAR_ALERT } from './actions'

const initialState = {
    isLoading:false,
    showAlert:false,
    alertText:"",
    alertType:""
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


    return(
        <AppContext.Provider value={{...state,DisplayAlert}}>
            {children}
        </AppContext.Provider>
    )
}

const useAppContext = () =>{
    return useContext(AppContext)
}

export {useAppContext,AppProvider,initialState}