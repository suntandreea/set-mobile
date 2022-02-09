import './Footer.scss';

function Footer() {
  return (
    <footer>
      <div className="social">
        <ul className="f-f f-dr f-jc">
          <li>
            <a href="" target="_blank"><i className="fab fa-twitter"></i></a>
          </li>
          <li>
            <a href="" target="_blank"><i className="fab fa-facebook-f"></i></a>
          </li>
          <li>
            <a href="" target="_blank"><i className="fab fa-instagram"></i></a>
          </li>
          <li>
            <a href="" target="_blank"><i className="fab fa-github"></i></a>
          </li>
          <li>
            <a href="" target="_blank"><i className="fab fa-dribbble"></i></a>
          </li>
          <li>
            <a href="" target="_blank"><i className="fab fa-google-plus"></i></a>
          </li>
        </ul>
      </div>
      <div className="copyright">
        <ul className="f-f f-dr f-jc f-w">
          <li><span>&copy; Setmobile SRL. All rights reserved.</span></li>
          <li>
            <span
              >Development:
              <a href="https://itsmeandreea.com/" target="_blank"
                >Andreea Cozariuc</a
              ></span
            >
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;