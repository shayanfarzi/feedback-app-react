import PropTypes from "prop-types";

function Header({ text }) {
  const headerStyle = {
    backgroundColor: "rgba(0,0,0,0.4)",
    color: "rgb(66, 145, 235)",
  };
  return (
    <header style={headerStyle}>
      <div className='container'>
        <h2>{text}</h2>
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
