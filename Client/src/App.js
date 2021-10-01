import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Home/Home';
import Resume from './Resume/Resume';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="main-container">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/resume">
              <Resume />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
