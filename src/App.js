import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUp from './pages/Signup.jsx';
import Signin from './pages/Signin.jsx';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import SinglePost from './pages/SinglePost';
import PrivateRoute from './components/HOC/privateRoute';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/signin">
            <Signin />
          </Route>
          <PrivateRoute
            path="/createpost"
            component={CreatePost}
          ></PrivateRoute>
          <Route path="/singlepost/:id">
            <SinglePost />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
