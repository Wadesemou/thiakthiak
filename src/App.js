// import logo from './logo.svg';

import Home from './pages/home/home';
import {BrowserRouter,Switch,Route } from "react-router-dom";
import Footer from './pages/components/footer/footer';
import Navbar from './pages/components/navBar/navBar';
import  Contact from "./pages/contacts/contact";
import  About from "./pages/Apropos/Apropos";
import  SignIn from "./pages/signIn/signIn";
import  SignUP from "./pages/signUP/signUP";
import ClientProfil from "./pages/Compte/Clientscompte/clientsProfil";

function App() {
  return(
    <BrowserRouter>
      {/* <Navbar/> */}
      <Switch>
        <Route exact path="/">
          <Navbar/>
          <Home/>
          <Footer/>
        </Route>
        <Route path="/contact">
          <Navbar/>
          <Contact/>
          <Footer/>
        </Route>
        <Route path="/about">
          <Navbar/>
          <About/>
          <Footer/>
        </Route>
        <Route path="/signin">
          {/* <Navbar/> */}
          <SignIn/>
          {/* <Footer/> */}
        </Route>
        <Route path="/signup">
          {/* <Navbar/> */}
          <SignUP/>
          {/* <Footer/> */}
        </Route>
          <Route path="/clientProfil"> 
            <ClientProfil/>
              <Switch> 
                <Route path="/abou " component={Footer  } />

               
              </Switch>
          {/* </ClientProfil>        */}
          </Route>
      </Switch>
    </BrowserRouter>
     
  )
}

export default App;
