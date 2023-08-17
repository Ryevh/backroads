// SETUP REFERENCE TO THE STATIC IMAGE FILE TO ACCESS/USE IT HERE
import aboutImg from "../assets/images/about.jpeg";

// SETUP REFERENCE TO THE FUNCTION DECLARATION STATEMENT OBJECT OF THE CUSTOM REUSABLE APPLICATION COMPONENT TO ACCESS/USE IT HERE
import Title from "./Title";

// DEFINE FUNCTION DECLARATION STATEMENT OBJECT OF THE MAIN CUSTOM REUSABLE APPLICATION COMPONENT
function About() {
  return (
    <section className="section" id="about">
      {/* <div className="section-title">
        <h2>
          about <span>us</span>
        </h2>
      </div> */}
      
      {/* TARGET IMPORTED FUNCTION DECLARATION OBJECT TO RENDER IT WITH <></> HTML TAGS OPERATOR TO MAKE IT AS ELEMENT & DEFINE ATTRIBUTES OF PROPS DATA TO PASS IT DOWN TO ACCESS/USE IT THERE */}
      <Title title="about" subTitle="us" />

      <div className="section-center about-center">
        <div className="about-img">
          <img src={aboutImg} className="about-photo" alt="awesome beach" />
        </div>
        <article className="about-info">
          <h3>explore the difference</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <a href="#" className="btn">
            read more
          </a>
        </article>
      </div>
    </section>
  );
}

// EXPORT BY DEFAULT THE FUNCTION DECLARATION STATEMENT OBJECT OF THE CUSTOM REUSABLE APPLICATION COMPONENT TO ACCESS/USE IT FROM OUTSIDE OF THIS SEPARATE MODULE JSX FILE
export default About;
