import './GridCard.scss';

function GridCard() {
  return (
    <section className="card grid">
        <div className="grid-cell f-f f-jc f-aic f-dc">
          <div className="icon f-f f-jc f-aic">
            <i className="fas fa-bolt"></i>
          </div>
          <h3>Elit ullamcorper</h3>
          <p>
            Aliquam malesuada bibendum arcu vitae elementum curabitur vitae.
            Semper eget duis at tellus at urna condimentum mattis.
          </p>
        </div>
        <div className="grid-cell f-f f-jc f-aic f-dc">
          <div className="icon f-f f-jc f-aic">
            <i className="fas fa-chart-area"></i>
          </div>
          <h3>Dignissim tincidunt</h3>
          <p>
            Sit amet dictum sit amet justo donec enim. Ut venenatis tellus in
            metus vulputate eu scelerisque. Sed libero enim sed faucibus.
          </p>
        </div>
        <div className="grid-cell f-f f-jc f-aic f-dc">
          <div className="icon f-f f-jc f-aic"><i className="fas fa-cloud"></i></div>
          <h3>Vitae elementum</h3>
          <p>
            Turpis nunc eget lorem dolor sed viverra. Nunc aliquet bibendum enim
            facilisis gravida neque convallis laoreet non curabitur.
          </p>
        </div>
        <div className="grid-cell f-f f-jc f-aic f-dc">
          <div className="icon f-f f-jc f-aic"><i className="fas fa-lock"></i></div>
          <h3>Lobortis feugiat</h3>
          <p>
            Turpis massa sed elementum tempus. Tincidunt lobortis feugiat
            vivamus at. Dignissim convallis aenean et tortor aliquet porttitor
            lacus.
          </p>
        </div>
      </section>
  );
}

export default GridCard;