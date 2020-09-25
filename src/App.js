import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import Home from './Home'
import Contact from './Contact'
import About from './About'
import Navbar from './components/Navbar'
import Footer from './Footer'
import Dashboard from './Dashboard'
import Docs from './Docs'
import Reports from './Reports'
import 'bulma';


function App() {
  return (
    <div className='container'>
    <Navbar/>
    <Main />
    <Footer/>
  </div>
  );
}




// const Dashboard = () => (
//   <div className='about'>
//     <h1>About Me</h1>
//     <p>Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum molestias?</p>
//     <p>Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum molestias?</p>
//   </div>
// );



const Main = () => (
  <Switch>
    <Route exact path='/' component={Home}></Route>
    <Route exact path='/about' component={About}></Route>
    <Route exact path='/contact' component={Contact}></Route>
    <Route exact path='/dashboard' component={Dashboard}></Route>
    <Route exact path='/reports' component={Reports}></Route>
    <Route exact path='/docs' component={Docs}></Route>
  </Switch>
);

export default App;
