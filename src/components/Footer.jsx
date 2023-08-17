// SETUP REFERENCE TO THE CUSTOM DATA TO ACCESS/USE IT HERE
import { pageLinks, socialLinks } from "../data";

// DEFINE FUNCTION DECLARATION STATEMENT OBJECT OF THE MAIN CUSTOM REUSABLE APPLICATION COMPONENT
function Footer() {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {/* HARD CODED LINKS */}
        {/* <li>
          <a href="#home" className="footer-link">
            home
          </a>
        </li>
        <li>
          <a href="#about" className="footer-link">
            about
          </a>
        </li>
        <li>
          <a href="#services" className="footer-link">
            services
          </a>
        </li>
        <li>
          <a href="#featured" className="footer-link">
            featured
          </a>
        </li> */}

        {/* DYNAMIC LINKS */}
        {pageLinks.map((link) => {
          const { id, href, text } = link;

          return (
            <li key={id}>
              <a href={href} className="footer-link">
                {text}
              </a>
            </li>
          );
        })}
      </ul>

      <ul className="footer-icons">
        {/* HARD CODED LINKS */}
        {/* <li>
          <a
            href="https://www.twitter.com"
            target="_blank"
            className="footer-icon"
          >
            <i className="fab fa-facebook"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.twitter.com"
            target="_blank"
            className="footer-icon"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.twitter.com"
            target="_blank"
            className="footer-icon"
          >
            <i className="fab fa-squarespace"></i>
          </a>
        </li> */}

        {/* DYNAMIC LINKS */}
        {socialLinks.map((link) => {
          const { id, href, icon } = link;

          return (
            <li key={id}>
              <a
                href={href}
                target="_blank"
                className="footer-icon"
                rel="noreferrer"
              >
                <i className={icon}></i>
              </a>
            </li>
          );
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
}

// EXPORT BY DEFAULT THE FUNCTION DECLARATION STATEMENT OBJECT OF THE CUSTOM REUSABLE APPLICATION COMPONENT TO ACCESS/USE IT FROM OUTSIDE OF THIS SEPARATE MODULE JSX FILE
export default Footer;
