import logo from "../assets/images/logo.svg"
import main from "../assets/images/main.svg"

const Landing = () => {
  return (
    <div>
      <nav>
        <img src={logo} className="logo" alt="jobpage"/>
      </nav>
      <div className="container page">
        <div className="info">
          <h1>Job <span>Searching</span> app</h1>
          <p>I'm baby flexitarian DIY kinfolk cronut VHS meggings adaptogen iceland hell of letterpress retro 90's cloud bread
            normcore snackwave. Enamel pin keytar williamsburg subway tile, shabby chic before they sold out taiyaki hammock 
            slow-carb franzen. Fashion axe literally flannel food truck plaid. Adaptogen shaman literally la croix intelligentsia tacos, 
            coloring book synth kinfolk locavore paleo humblebrag. Meditation YOLO gluten-free tilde twee.
          </p>
          <button className="btn btn-hero">Login/Register</button>
        </div>
        <img src={main} alt="main" className="img main-img"/>
      </div>
    </div>
  )
}

export default Landing