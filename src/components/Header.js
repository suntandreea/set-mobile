import { useEffect, useState } from 'react';
import './Header.scss';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [clicked, setClicked] = useState('');

  const handleScroll = () => {
    const offset = window.scrollY;
    const height = window.innerHeight;
    if (offset > height) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  let navbarClasses = ['menu f-f f-jsb f-aic f-dr'];
  if (scrolled) {
    navbarClasses.push('accent');
  }

  function handleMobileMenu() {
    clicked ? setClicked('') : setClicked('f-f f-jc f-aic f-dr visible');
  }

  return (
    <div>
      <div className="banner"></div>
      <header className={navbarClasses.join(' ')}>
        <img
          src="https://aqmeter.com/images/aqmeterLogoWhite.png"
          alt="Aqmeter logo"
        />
        <nav className={clicked || 'f-f f-jc f-aic f-dr'}>
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
        <div className="burger f-f f-dr f-jc f-aic" onClick={handleMobileMenu}>
          <i className="fas fa-bars"></i>
          <i className="fa-solid fa-xmark"></i>
        </div>
      </header>
    </div>
  );
}

export default Header;
