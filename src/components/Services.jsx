// SETUP REFERENCE TO THE FUNCTION DECLARATION STATEMENT OBJECT OF THE CUSTOM REUSABLE APPLICATION COMPONENT TO ACCESS/USE IT HERE
import Title from "./Title";

// SETUP REFERENCE TO THE CUSTOM ARRAY DATA OBJECT TO ACCESS/USE IT HERE
import { services } from "../data";

// DEFINE FUNCTION DECLARATION STATEMENT OBJECT OF THE MAIN CUSTOM REUSABLE APPLICATION COMPONENT
function Services() {
  return (
    <section className="section services" id="services">
      {/* TARGET IMPORTED FUNCTION DECLARATION OBJECT TO RENDER IT WITH <></> HTML TAGS OPERATOR TO MAKE IT AS ELEMENT & DEFINE ATTRIBUTES OF PROPS DATA TO PASS IT DOWN TO ACCESS/USE IT THERE */}
      <Title title="our" subTitle="services" />

      <div className="section-center services-center">
        {/* HARD CODED CONTENT DATA */}
        {/* <article className="service">
          <span className="service-icon">
            <i className="fas fa-wallet fa-fw"></i>
          </span>
          <div className="service-info">
            <h4 className="service-title">saving money</h4>
            <p className="service-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, officia.
            </p>
          </div>
        </article> */}

        {/* <article className="service">
          <span className="service-icon">
            <i className="fas fa-tree fa-fw"></i>
          </span>
          <div className="service-info">
            <h4 className="service-title">endless hiking</h4>
            <p className="service-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, officia.
            </p>
          </div>
        </article>

        <article className="service">
          <span className="service-icon">
            <i className="fas fa-socks fa-fw"></i>
          </span>
          <div className="service-info">
            <h4 className="service-title">amazing comfort</h4>
            <p className="service-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, officia.
            </p>
          </div>
        </article> */}

        {/* DYNAMIC CONTENT DATA */}
        {/* TARGET IMPORTED ARRAY OBJECT DATA TO ACCESS '.' TO THE BUILT-IN ARRAY METHOD 'map()' TO ITERATE THROUGH IT TO RETURN A NEW ARRAY OF ITS DATA */}
        {services.map((service) => {
          const { id, icon, title, text } = service;

          return (
            <article className="service" key={id}>
              <span className="service-icon">
                <i className={icon}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{title}</h4>
                <p className="service-text">{text}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

// EXPORT BY DEFAULT THE FUNCTION DECLARATION STATEMENT OBJECT OF THE CUSTOM REUSABLE APPLICATION COMPONENT TO ACCESS/USE IT FROM OUTSIDE OF THIS SEPARATE MODULE JSX FILE
export default Services;
