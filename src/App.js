import './Css/App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import AboutMe from './Components/AboutMe';
import Contact from './Components/Contact';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <AboutMe/>
      <Contact/>
    </div>
  );
}

export default App;
