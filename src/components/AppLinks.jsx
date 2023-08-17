// SETUP REFERENCE TO THE CUSTOM ARRAY DATA OBJECT TO ACCESS/USE IT HERE
import { pageLinks, socialLinks } from "../data";

function PageLinks() {
  return (
    <>
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
            <li key={link.id}>
              <a href={link.href} className="nav-link">
                {link.text}
              </a>
            </li>
          );
        })}
      </ul>

      
    </>
  );
}

export default PageLinks;
