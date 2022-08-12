import {useState,useEffect} from "react"
import {Logo} from "../components"
import Wrapper from '../assets/wrappers/RegisterPage'
import FormRow from "../components/FormRow"

const initialState = {
  name:"",
  email:'',
  password:'',
  isMember:true
}

const Register = () => {

  const [values,setValues] = useState(initialState)

  const handleChange = (e) =>{
    console.log(e.target)
  }

  const onSubmit = (e) =>{
    e.preventDefault()
    console.log(e.target)
  }

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo/>
        <h3>Login</h3>
        <FormRow/>
        <button type="submit" className="btn btn-block">Submit</button>
      </form>
    </Wrapper>
  )
}
export default Register