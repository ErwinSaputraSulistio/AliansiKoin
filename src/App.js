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
        <Route path="/home" component={Home}/>
        <Route path="/auth" component={Auth}/>
        <Route path="/admin" component={Admin}/>
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
  );
}
