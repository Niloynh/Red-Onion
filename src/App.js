import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './AuthProvider/AuthProvider';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import NotFound from './components/NotFound/NotFound';
import Details from './components/Pages/Detail/Details';
import Home from './components/Pages/Home/Home';
import Login from './components/Pages/Login/Login';
import Register from './components/Pages/Register/Register';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  return (
    <div>
        <AuthProvider>
        <BrowserRouter>
        <Header></Header>
          <Switch>
            <Route path="/" exact>
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
                <Register></Register>
            </Route>
            <PrivateRoute path="/details/:foodId">
              <Details></Details>
            </PrivateRoute>
            <Route path="*">
                <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
        </AuthProvider>
    </div>
  );
}

export default App;
