import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import CountryList from './components/CountryList';
import CountryDetails from './components/CountryDetails';


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
          <Switch>
            <Route path="/" exact component={CountryList}/>
            <Route path="/countries/:countyId" exact component={CountryDetails}/>
            <Route path="/aboutUs" exact component={AboutUs}/>
            <Route>404 NOT FOUND!</Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
