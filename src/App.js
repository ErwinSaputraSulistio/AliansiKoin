import './CiwinFramework.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// ROUTES
import Home from './components/templates/Home';
import Auth from './components/templates/Auth';
import Admin from './components/templates/Admin';
import NotFound from './components/templates/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/auth" component={Auth}/>
        <Route exact path="/admin" component={Admin}/>
        <Route exact path="/" component={Home}/>
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
  );
}
