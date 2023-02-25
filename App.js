import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Exprience from './Components/Exprience/Exprience';
import Nav from './Components/Nav/Nav';
import Services from './Components/Services/Services';
import Portfolio from './Components/Portfolio/Portfolio';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
    <Header />
    <Nav />
    <About />
    <Exprience />
    <Services />
    <Portfolio />
    {/* <Testimonials /> */}
    <Contact />
    <Footer />
    </>
  );
}

export default App;
