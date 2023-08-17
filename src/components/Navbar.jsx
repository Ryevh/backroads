// SETUP REFERENCE TO THE STATIC IMAGE LOGO FILE TO ACCESS/USE IT HERE
import logoImg from "../assets/images/logo.svg";

// SETUP REFERENCE TO THE CUSTOM ARRAY DATA OBJECT TO ACCESS/USE IT HERE
import { pageLinks, socialLinks } from "../data";

// DEFINE FUNCTION DECLARATION STATEMENT OBJECT OF THE MAIN CUSTOM REUSABLE APPLICATION COMPONENT
function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          {/* DYNAMIC IMAGE CONTENT DATA TARGET IMPORTED IMAGE FILE TO USE IT HERE */}
          <img src={logoImg} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>

        <ul className="nav-links" id="nav-links">
          {/* HARD CODED LINKS */}
          {/* <li>
            <a href="#home" className="nav-link">
              home
            </a>
          </li>

          <li>
            <a href="#about" className="nav-link">
              about
            </a>
          </li>

          <li>
            <a href="#services" className="nav-link">
              services
            </a>
          </li>

          <li>
            <a href="#tours" className="nav-link">
              tours
            </a>
          </li> */}

          {/* DYNAMIC LINKS */}
          {/* TARGET IMPORTED ARRAY DATA OBJECT 'pageLinks' TO ACCESS '.' TO THE BUILT-IN ARRAY METHOD 'map()' TO ITERATE THROUGH EACH OBJECT ITEM OF TARGETED ARRAY TO RETURN A NEW ARRAY WITH ITS OWN DATA */}
          {pageLinks.map((link) => {
            return (
              // CREATE LI ELEMENT WITH ITS UNIQUE KEY VALUE
              <li key={link.id}>
                {/* CREATE ANCHOR ELEMENT WITH ITS ATTRIBUTES OF HREF & CLASSNAME */}
                <a href={link.href} className="nav-link">
                  {/* CREATE DYNAMIC CONTENT DATA */}
                  {link.text}
                </a>
              </li>
            );
          })}
        </ul>

        <ul className="nav-icons">
          {/* HARD CODED SOCIAL LINKS CONTENT */}
          {/* <li>
            <a
              href="https://www.twitter.com"
              target="_blank"
              className="nav-icon"
            >
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.twitter.com"
              target="_blank"
              className="nav-icon"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.twitter.com"
              target="_blank"
              className="nav-icon"
            >
              <i className="fab fa-squarespace"></i>
            </a>
          </li> */}

          {/* DYNAMIC CONENT */}
          {socialLinks.map((link) => {
            // DEFINE VARIABLES THROUGH DESTRUCTURING OBJECT 'const {}' SYNTAX TO STORE DATA FROM ITERATED PARAMETER 'link'
            const { id, href, icon } = link;
            return (
              // CREATE LI ELEMENT & ATTACH ATTRIBUTE OF A UNIQUE KEY VALUE
              <li key={id}>
                {/* CREATE ANCHOR ELEMENT WITH ITS ATTRIBUTES */}
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="nav-icon"
                >
                  {/* CREATE ICON CONTENT DATA */}
                  <i className={icon}></i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

// EXPORT BY DEFAULT THE FUNCTION DECLARATION STATEMENT OBJECT OF THE CUSTOM REUSABLE APPLICATION COMPONENT TO ACCESS/USE IT FROM OUTSIDE OF THIS SEPARATE MODULE JSX FILE
export default Navbar;
