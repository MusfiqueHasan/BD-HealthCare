import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import Header from "./components/Header/Header";
import AuthProvider from './Context/AuthProvider'

function App() {
  return (
    <>
    <AuthProvider>
     <Router>
       <Header/>
       <Switch>
         <Route></Route>
       </Switch>
     </Router>

    </AuthProvider>
    </>
  );
}

export default App;
