import './App.css';
import { Route ,Switch } from 'react-router-dom';
import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupsPage from './pages/NewMeetup';
import FavouritesPage from './pages/Favourites';
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <AllMeetupsPage />
        </Route>
        <Route path='/new-meetup'>
          <NewMeetupsPage />
        </Route> 
        <Route path='/favorites'>
          <FavouritesPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;