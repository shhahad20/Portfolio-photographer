import "../styles/navbar.scss";

const Navbar = () => {
  return (
    <header>
      <nav>
        <div className="container">
          <a href="/">FILM ROLL</a>
          <div className="nav-links">
            <a href="#about-me">About</a>
            <a href="#works">Works</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
