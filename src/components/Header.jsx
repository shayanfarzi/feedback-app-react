import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function Header({ text }) {
  const headerStyle = {
    backgroundColor: "rgba(0,0,0,0.4)",
    color: "rgb(66, 145, 235)",
    width: "100%",
  };
  return (
    <header style={headerStyle}>
      <div
        className='container'
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Link to='/' style={{ color: "#ff6a95", textDecoration: "none" }}>
          <h2>{text}</h2>
        </Link>
        <Link to='/about' style={{ color: "#fff" }}>
          {" "}
          About{" "}
        </Link>
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: "Feedback UI",
};

Header.propTypes = {
  text: PropTypes.string,
};

export default Header;
