import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Header/>
          <Route path="/aboutUs" exact component={AboutUs}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
