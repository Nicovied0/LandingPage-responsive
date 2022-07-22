import './Css/App.css';
import Navbar from './Components/Navbar';
import Cards from './Components/Cards';
import Home from './Components/Home';
import AboutMe from './Components/AboutMe';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Cards/>
      <AboutMe/>
    </div>
  );
}

export default App;
