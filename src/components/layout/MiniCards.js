function MiniCards() {
  return (
    <section className="mini-wrapper f-f f-jsb f-ais f-dr f-w">
        <div className="card mini f-f f-jsb f-aic f-dc">
          <img
            src="./img/pic02.jpg"
            alt="An image with wind turbines and a forest, in fog"
          />
          <div className="card-content f-f f-dc f-aic">
            <h3>Quam elementum pulvinar</h3>
            <p>
              Non arcu risus quis varius quam quisque id diam. Fermentum odio eu
              feugiat pretium nibh. Tortor vitae purus faucibus ornare
              suspendisse sed nisi.
            </p>
            <button><a href="#">Learn More</a></button>
          </div>
        </div>

        <div className="card mini f-f f-jsb f-aic f-dc">
          <img src="./img/pic03.jpg" alt="An image with solar panels" />
          <div className="card-content f-f f-dc f-aic">
            <h3>Etiam non quam lacus</h3>
            <p>
              Volutpat est velit egestas dui id ornare. Ultrices mi tempus
              imperdiet nulla malesuada. Facilisis gravida neque convallis a
              cras semper.
            </p>
            <button><a href="#">Learn More</a></button>
          </div>
        </div>
      </section>
  );
}

export default MiniCards;