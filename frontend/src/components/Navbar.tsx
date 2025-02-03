import "../styles/navbar.scss";

const Navbar = () => {
  return (
    <header>
      <nav>
        <div className="container">
          <a href="">FILM ROLL</a>
          <div className="nav-links">
            <a href="">About</a>
            <a href="">Works</a>
            <a href="">Contact</a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
