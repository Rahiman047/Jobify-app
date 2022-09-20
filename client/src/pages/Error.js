import { Link } from "react-router-dom";
import img from "../assets/images/not-found.svg";
import Wrapper from "../assets/wrappers/ErrorPage";

const Error = () => {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={img} alt="err-img" />
        <h3>Page not Found!</h3>
        <p>It seems that we cannot find the page you are looking for....</p>
        <Link to="/">BackHome</Link>
      </div>
    </Wrapper>
  );
};
export default Error;
