import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Error from "./components/PageNotFound/Error";
import AuthProvider from './Context/AuthProvider'

function App() {
  return (
    <>
    <AuthProvider>
     <Router>
       <Header/>
       <Switch>
         <Route exact path="/"><Home/></Route>
         <Route path="/home"><Home/></Route>
         <Route path="*"><Error/></Route>
       </Switch>
     </Router>

    </AuthProvider>
    </>
  );
}

export default App;
