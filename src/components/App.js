import React, { Component } from 'react';

import Search from './Search';
import Dataform from './Dataform';
import '../../styles/App.css';
import Axios from 'axios';

class App extends Component {

  render() {
    return(
      <div>
      <h1> Veterans Data App </h1>
        <h3> Veterans Pending Claim Compensation </h3>


      <Search />

      </div>
   );
  }
}

export default App;
