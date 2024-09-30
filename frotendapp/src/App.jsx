import Nav from './components/nav.jsx';
import About from './components/about.jsx';
import Contact from './components/contact.jsx';
import Home from './components/home.jsx';
import Skills from './components/skills.jsx';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Footer from './components/footer.jsx';
import Props from './components/props.jsx';
function App() {
  return (
    <>
    <Nav/> 

    <Router>
      <Routes>
      <Route path="" element={<Home/>}/>
        <Route path="/About Me" element={<About/>}/>
        <Route path="/Contact Me" element={<Contact/>}/>
        <Route path="/Skills" element={<Skills/>}/>
        <Route path="/Props" element={<Props day="is hot"/>}/>
        <Route path="/Propss" element={<Props day="is cold"/>}/>
      </Routes>
    </Router>
    <Footer/>
    
    </>
  );
}

export default App;