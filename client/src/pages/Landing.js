import main from "../assets/images/main-alternative.svg"
import Wrapper from '../assets/wrappers/LandingPage'
import { Logo } from "../components"
import {Link} from 'react-router-dom'

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo/>
      </nav>
      <div className="container page">
        <div className="info">
          <h1>Job <span>Tracking</span> app</h1>
          <p>I'm baby flexitarian DIY kinfolk cronut VHS meggings adaptogen iceland hell of letterpress retro 90's cloud bread
            normcore snackwave. Enamel pin keytar williamsburg subway tile, shabby chic before they sold out taiyaki hammock 
            slow-carb franzen. Fashion axe literally flannel food truck plaid. Adaptogen shaman literally la croix intelligentsia tacos, 
            coloring book synth kinfolk locavore paleo humblebrag. Meditation YOLO gluten-free tilde twee.
          </p>
          <Link to="/register" className="btn btn-hero">Login/Register</Link>
        </div>
        <img src={main} alt="main" className="img main-img"/>
      </div>
    </Wrapper>
  )
}


export default Landing