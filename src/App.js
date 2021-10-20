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
import Doctors from "./components/Doctors/Doctors";
import Footer from "./components/Footer/Footer";
import './App.css'
import Appointment from "./components/Appointment/Appointment";
import Register from "./components/Register/Register";
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path="/home"><Home /></Route>
            <Route path="/about"><About /></Route>
            <PrivateRoute path="/services"><Services /></PrivateRoute>
            <PrivateRoute path="/single-service/:id"><SingleService /></PrivateRoute>
            <PrivateRoute path="/appointment"><Appointment /></PrivateRoute>
            <PrivateRoute path="/doctors"><Doctors /></PrivateRoute>
            <Route path="/login"><Login /></Route>
            <Route path="/register"><Register /></Route>
            <Route path="*"><Error /></Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
