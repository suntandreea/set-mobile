import './Hero.scss';

function Hero() {
  return (
    <section className="hero f-f f-jc f-aic f-dr">
        <div className="f-f f-dc f-jc f-aic">
          <h1>Aqmeter</h1>
          <p>Quick online access for your utility providers.</p>
          <div className="f-f f-dr f-w f-jc">
            <button><a href="#">Register</a></button>
            <button><a href="#">Learn More</a></button>
          </div>
        </div>
      </section>
  );
}

export default Hero;