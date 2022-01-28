import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home/Home';
import Resume from './components/Resume/Resume';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer'

const App = () => {
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
