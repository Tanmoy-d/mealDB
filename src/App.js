
import './App.css';
import Foods from './components/Restaurant/Restaurant';
import Header from './components/Header/Header';
import Restaurant from './components/Restaurant/Restaurant';
import { BrowserRouter as Tanmoy } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Features from './components/Features/Features';

function App() {
  return (
    <div className="App">
      <Tanmoy>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Restaurant></Restaurant>
          </Route>
          <Route path='/restaurant'>
            <Restaurant></Restaurant>
          </Route>
          <Route path='/features'>
            <Features></Features>
          </Route>
        </Switch>
      </Tanmoy>

    </div>
  );
}

export default App;




