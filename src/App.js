import React from 'react';
import {Route} from 'react-router-dom'
import home from './Components/home/home.jsx'
function App() {
  return (
    <React.Fragment>

  
    <Route  exact path={"/"} component={home}/>
 
    
    
    </React.Fragment>
  );
}

export default App;
