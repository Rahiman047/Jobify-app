import Wrapper from "../assets/wrappers/Navbar"
import {FaHome,FaAlignLeft,FaUserCircle,FaCaretDown} from "react-icons/fa"
import {useAppContext } from "../context/appContext"
import Logo from "./Logo"


const Navbar = () => {
  return (
    <Wrapper>
      <div className="nav-center">
        <button className="toggle-btn" type="button" onClick={() =>{
          console.log("Toggle Sidebar")
        }}>
          <FaAlignLeft/>
        </button>
        <div>
          <Logo/>
          <h3 className="logo-text">dashboard</h3>
        </div>
        <div className="btn-container">
          <button type="button" className="btn" onClick={() =>{
          console.log("Show/Hide/DropDown")
        }}>
          <FaUserCircle/>
            John
          <FaCaretDown/>
        </button>
        <div className="dropdown show-dropdown">
          <button type="btn" className="dropdown-btn" onClick={()=>{
            console.log("logout btn clicked")
          }}>logout</button>
        </div>
        </div>
      </div>
    </Wrapper>
  )
}
export default Navbar