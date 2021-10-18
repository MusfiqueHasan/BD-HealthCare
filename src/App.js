import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Error from "./components/PageNotFound/Error";
import Services from "./components/Services/Services";
import SingleService from "./components/Services/SingleService";
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute'

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path="/home"><Home /></Route>
            <Route path="/about"><About /></Route>
            <PrivateRoute path="/services"><Services /></PrivateRoute>
            <Route path="/single-service/:id"><SingleService /></Route>
            <Route path="/appointment"><Home /></Route>
            <Route path="/doctors"><Home /></Route>
            <Route path="/login"><Login /></Route>
            <Route path="*"><Error /></Route>
          </Switch>
        </Router>

      </AuthProvider>
    </>
  );
}

export default App;
