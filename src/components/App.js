import React, { Component } from 'react';

import Search from './Search';
import Dataform from './Dataform';
import Contactform from './Contactform';
import '../../styles/App.css';


class App extends Component {

  render() {
    return(
      <div>
      <h1> Veterans Data App </h1>
        <h3> Veterans Pending Claim Compensation </h3>


      <Search />
      <Contactform />
      </div>
   );
  }
}

export default App;
