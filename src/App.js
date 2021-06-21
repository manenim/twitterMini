// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Auth from './pages/Auth';
import General from './pages/General';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import postDetail from './pages/postDetail';
import PostFill from './pages/PostFill';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path = '/detail' component = {postDetail}/>
        <Route path = '/post/:id' component = {PostFill}/>
        <Route path = '/auth' component = {Auth}/>
        <Route path = '/login' component = {LogIn}/>
        <Route exact path = '/' component = {Home}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
