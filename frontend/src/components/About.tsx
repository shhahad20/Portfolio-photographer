import "../styles/about.scss";

const About: React.FC = () => {


  return (
    <section id="about-me">
      <div className="about-container">
        <div className="about-content-container">
          <div className="about-header">
            <h1>About</h1>
          </div>
          <div className="about-content">
            <p>
              Hello, I’m Your Name, a professional photographer based in Saudi
              Arabia. Photography isn’t just my profession—it’s my way of
              expressing emotions and storytelling through images. With over 7
              years of experience, I’ve dedicated myself to capturing the beauty
              in every detail, whether it’s the spontaneous smile of a loved one
              or the breathtaking colors of a sunset.
            </p>
            <div className="about-extra">
              <div className="location-info">
                <p>
                  SAUDI ARABIA <br />
                  PORTRA 4000
                </p>
              </div>
              <div className="slogan">
                <p>EVERY MOMENT IS WORTH CAPTURING</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
