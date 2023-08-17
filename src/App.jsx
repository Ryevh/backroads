// SETUP REFERENCE TO THE EXPORTED FUNCTION DECLARATION OBJECTS OF THE CUSTOM REUSABLE APPLICATION COMPONENT/S TO ACCESS/USE IT CONTENT DATA HERE
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Tours from "./components/Tours";
import Footer from "./components/Footer";

// DEFINE FUNCTION DECLARATION STATEMENT OBJECT OF THE MAIN CUSTOM REUSABLE APPLICATION COMPONENT
function App() {
  return (
    <>
      {/* TARGET IMPORTED FUNCTION DECLARATION OBJECT TO RENDER IT WITH <></> HTML TAGS OPERATOR TO MAKE IT AS HTML ELEMENT */}
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Tours />
      <Footer />
    </>
  );
}

// EXPORT BY DEFAULT THE FUNCTION DECLARATION STATEMENT OBJECT OF THE MAIN CUSTOM REUSABLE APPLICATION COMPONENT TO ACCESS/USE IT FROM OUTSIDE OF THIS SEPARATE MODULE JSX FILE
export default App;
