import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MoviesList } from './movies/MoviesList.js';
import { MovieDetail } from './movies/MovieDetail.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/movie/:id">
            <MovieDetail />
          </Route>
          <Route path="/">
            <MoviesList />
          </Route>
        </Switch>
      </Router>
      {/* TODO: Need to look into lazy loading more results when the user gets
      to the bottom of the currently fetched items. */}
    </div>
  );
}

export default App;
