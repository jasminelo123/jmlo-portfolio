
import './css/design.css';
import MainPage from './jmloportfolio';
import Header from './header';
import AboutMe from './aboutme';
import WhatIDo from './whatido';
import Coding from './coding';
import Editing from './editing';
import ContactMe from './contact.js';
import Shares from './shares';
import { BrowserRouter as Router,
  Switch,
  Route} from 'react-router-dom';

function App() {
  return (
    <Router>

   <div className="App">
    <div className="App-nav-header">
        <Header/>
    </div>
   
   <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/jmloportfolio" exact component={MainPage} />
        <Route path="/aboutme" exact component={AboutMe} />
        <Route path="/contact" exact component={ContactMe} />
        <Route path="/WhatIDo" exact component={WhatIDo} />
        <Route path="/coding" exact component={Coding} />
        <Route path="/editing" exact component={Editing} />
        <Route path="/shares" exact component={Shares} />
        
    </Switch>
   </div>  

   </Router>
  );
}

export default App;
