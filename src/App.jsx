import "./App.css";
import NavBar from "./component/NavBar";
import Banner from "./component/Banner";
import Skills from "./component/Skills";
import Projects from "./component/Projects";
import Contact from "./component/Contact";
import MailchimpForm from "./component/MailchimpForm";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <MailchimpForm />
    </div>
  );
}

export default App;
