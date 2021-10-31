import './App.css';
import { BrowserRouter,Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Services from './Pages/Services/Services';
import Header from './Pages/Header/Header';
import SingleService from './Pages/SingleService/SingleService';
import PrivateRoute from './Pages/Login/Login/PrivateRoute/PrivateRoute';
import Login from './Pages/Login/Login/Login';
import AuthProvider from './contexts/AuthProvider';
import Footer from './Pages/Footer/Footer';




function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
      <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/sevices'>
              <Services></Services>
            </Route>
            <PrivateRoute path='/service/:id'>
              <SingleService></SingleService>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>

          </Switch>
      </BrowserRouter>
      <Footer></Footer>
      </AuthProvider>
    </div>
  );
}

export default App;
