import React from 'react';
import {Route} from 'react-router-dom'
import home from './Components/home/home.jsx'
import Detail from './Components/Detail/Detail.jsx'
function App() {
  return (
    <React.Fragment>

  
    <Route  exact path={"/"} component={home}/>
    <Route exact path={"/Detail/:id"} component={Detail}/>
 
    
    
    </React.Fragment>
  );
}

export default App;
