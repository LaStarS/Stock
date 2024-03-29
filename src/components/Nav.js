import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <div className="nav">
      <Link to="/">
        <div>Home</div>
      </Link>
      <Link to="/about">
        <div>About</div>
      </Link>
      <Link to="/stocks">
        <div>Dashboard</div>
      </Link>
      <Link to="/stocks/:symbol">
        <div>Stocks</div>
      </Link>
    </div>
  );

}

export default Nav;
