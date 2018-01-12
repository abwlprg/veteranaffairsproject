import React, { Component } from 'react';
import axios from "axios";
import Chart from './Chart';
import Dataform from "./Dataform"

class Search extends Component {
 constructor() {
    super();
    this.state = {
      city: '',
      value: '',
      vetdata: []
    }
 }

 setAxiosData(data) {
  console.log('inside setAxiosData');
  this.setState({
    vetdata: data
  })
 }

  selectData(newCity, newValue) {
    console.log('inside selectData --> city: ' + newCity + ', value: ' + newValue)
    console.log('this in select data',this);
    this.setState({
      value: newValue,
      city: newCity
    });
    console.log(this.state)
    this.getAxiosStuff(newCity, newValue);
}

getAxiosStuff(city, value) {
  // console.log('inside of getAxiosStuff');
  // console.log('this.state.value', this.state.value);
  // console.log('this.state.city', this.state.city);
  console.log(`http://vetsapi.apps.cironline.org/api/data/?format=json&field_type__slug=${value}&city__slug=${city.toLowerCase()}`)
  axios.get(`http://vetsapi.apps.cironline.org/api/data/?format=json&field_type__slug=${value}&city__slug=${city.toLowerCase()}`)
      .then(response => {
        console.log('the data from axios -->', response.data.objects);
        if(response.status === 200){
          console.log(this);
          this.setState({vetdata: response.data.objects})
          console.log("THIS IS THE VETDATA", this.state.vetdata)
        } else {
          alert("Error With Database");
        }
      })
}

returnChart(){
  if(this.state.vetdata.length){
    return (<Chart city={this.state.city} value={this.state.value} />)
  }
}




render(){

    return (
      <div className="Searchstuff">
        <h1>Results </h1>
        <Dataform
          selectData={this.selectData.bind(this)}
          getAxiosStuff={this.getAxiosStuff.bind(this)}
        />
        {this.returnChart()}
      </div>
    );
  }


 //Closes the whole class
}




export default Search;
