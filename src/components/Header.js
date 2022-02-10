import './Header.scss';

function Header() {
  // const htmlElem = document.querySelector('html');
  // const menuElem = document.querySelector('.menu');
  // const navElem = document.querySelector('nav');
  // const menuBtn = document.querySelector('.burger');

  // window.addEventListener('scroll', () => {
  //   const scroll = htmlElem.scrollTop;
  //   const height = window.innerHeight;
  //   if (scroll > height) {
  //     menuElem.classList.add('accent');
  //   } else {
  //     menuElem.classList.remove('accent');
  //   }
  // });

  // menuBtn.addEventListener('click', () => {
  //   if (navElem.classList.contains('visible')) {
  //     navElem.classList.remove('visible');
  //     menuBtn.classList.remove('rotate');
  //   } else {
  //     navElem.classList.add('visible');
  //     menuBtn.classList.add('rotate');
  //   }
  // });

  return (
    <div>
      <div className="banner"></div>
      <header className="menu f-f f-jsb f-aic f-dr">
        <img
          src="https://aqmeter.com/images/aqmeterLogoWhite.png"
          alt="Aqmeter logo"
        />
        <nav className="f-f f-jc f-aic f-dr">
          <ul className="f-f f-jsb f-aic f-dr f-w">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Tutorials</a>
            </li>
            <li>
              <a href="#">Help</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
          </ul>
        </nav>
        <div className="burger f-f f-dr f-jc f-aic">
          <i className="fas fa-bars"></i>
        </div>
      </header>
    </div>
  );
}

export default Header;
