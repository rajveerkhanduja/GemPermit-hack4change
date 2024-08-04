import './App.css';
import About from './components/About';
import Companies from './components/Companies';
import Home from './components/Home';
import MyFooter from './components/MyFooter';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Testimonial from './components/Testimonial';

function App() {
  return (
    <>
      <Navbar />
      <div id="home"><Home /></div>
      <div id="services"><Services /></div>
      <div id="about"><About /></div>
      <div id="testimonial"><Testimonial /></div>
      <div id="companies"><Companies /></div>
      <div id="contact"><MyFooter /></div>
    </>
  );
}

export default App;