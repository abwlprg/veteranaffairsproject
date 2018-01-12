import React, { Component } from 'react';
import Search from './Search';
import classNames from 'classNames';

class DataForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);

  }

  handleInputChange(event) {
    this.setState({city: event.target.value});
  }


// for value inputs
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('You choose:' + '' + this.state.city + '' + '' + this.state.value);
    event.preventDefault();
    console.log('UPDATING FROM HANDLESUBMIT')
    console.log('CITY: ' + this.state.city)
    // this.props.selectData(this.state.city, this.state.value)
   // console.log(this.props.selectData, this.state.city + this.state.value)
  this.props.getAxiosStuff(this.state.city, this.state.value);


  }



  render() {
    return (
<form onSubmit={this.handleSubmit}>


          <select value={this.state.city} onChange={this.handleInputChange} >

          <option value="A" disabled>A</option>
          <option value="Alabama" disabled>Alabama</option>
          <option value="montgomery">Montgomery Regional Benefit Office</option>

          <option value="Alaska" disabled>Alaska</option>
          <option value="anchorage">Anchorage Regional Benefit Office</option>

          <option value="Arizona" disabled>Arizona</option>
          <option value="phoenix">Phoenix Regional Benefit Office</option>

          <option value="Arkansas" disabled>Arkansas</option>
          <option value="little-rock">Little Rock Regional Benefit Office</option>

          <option value="C" disabled>C</option>
          <option value="California" disabled>California</option>
          <option value="los-angeles">Los Angeles Regional Benefit Office</option>
          <option value="oakland">Oakland Regional Benefit Office</option>
          <option value="san-diego">San Diego Regional Benefit Office</option>

          <option value="Colorado" disabled>Colordao</option>
          <option value="denver">Denver Regional Benefit Office</option>

          <option value="Connecticut" disabled>Connecticut</option>
          <option value="hartford">Hartford Regional Benefit Office</option>

          <option value="D" disabled>D</option>
          <option value="Delaware" disabled>Delaware</option>
          <option value="wilmington">Wilmington Regional Benefit Office</option>

          <option value="District of Columbia" disabled>District of Columbia</option>
          <option value="nation">National Capital Regional Benefit Office</option>

          <option value="F" disabled>F</option>
          <option value="Florida" disabled>Florida</option>
          <option value="st-petersburg">St. Petersburg Regional Benefit Office</option>

          <option value="G" disabled>G</option>
          <option value="Georgia" disabled>Georgia</option>
          <option value="atlanta"> Atlanta Regional Benefit Office</option>

          <option value="H" disabled>H</option>
          <option value="Hawaii" disabled>Hawaii</option>
          <option value="honolulu"> Honolulu Regional Benefit Office</option>

          <option value="I" disabled>I</option>
          <option value="Idaho" disabled>Idaho</option>
          <option value="boise">Boise Regional Benefit Office</option>

          <option value="Illinois" disabled>Illinois</option>
          <option value="chicago">Chicago Regional Benefit Office</option>

          <option value="Indiana" disabled>Indiana</option>
          <option value="indianapolis ">Indianapolis Regional Benefit Office</option>

          <option value="Iowa" disabled>Iowa</option>
          <option value="des-moines">Des Moines Regional Benefit Office</option>

          <option value="K" disabled>K</option>
          <option value="Kansas" disabled>Kansas</option>
          <option value="wichita">Wichita Regional Benefit Office</option>

          <option value="Kentucky" disabled>Kentucky</option>
          <option value="louisville">Louisville Regional Benefit Office</option>

          <option value="L" disabled>L</option>
          <option value="Louisiana" disabled>Louisiana</option>
          <option value="new-orleans">New Orleans Regional Benefit Office</option>

          <option value="M" disabled>M</option>
          <option value="Maine" disabled>Maine</option>
          <option value="togus">Togus Regional Benefit Office</option>

          <option value="Maryland" disabled>Maryland</option>
          <option value="baltimore">Baltimore Regional Benefit Office</option>

          <option value="Massachusetts" disabled>Massachusetts</option>
          <option value="boston">Boston Regional Benefit Office</option>

          <option value="Michigan" disabled>Michigan</option>
          <option value="detroit">Detroit Regional Benefit Office</option>

          <option value="Minnesota" disabled>Minnesota</option>
          <option value="st-paul">St. Paul Regional Benefit Office</option>

          <option value="Mississippi" disabled>Mississippi</option>
          <option value="jackson">Jackson Regional Benefit Office</option>

          <option value="Missouri" disabled>Missouri</option>
          <option value="st-louis">St. Louis Regional Benefit Office</option>

          <option value="Montana" disabled>Montana</option>
          <option value="fort-harrison">Fort Harrison Regional Benefit Office</option>

          <option value="N" disabled>N</option>
          <option value="Nebraska" disabled>Nebraska</option>
          <option value="lincoln">Lincoln Regional Benefit Office</option>

          <option value="Nevada" disabled>Nevada</option>
          <option value="reno">Reno Regional Benefit Office</option>

          <option value="New Hampshire" disabled>New Hampshire</option>
          <option value="manchester">Manchester Regional Benefit Office</option>

          <option value="New Jersey" disabled>New Jersey</option>
          <option value="newark">Newark Regional Benefit Office</option>

          <option value="New Mexico" disabled>New Mexico</option>
          <option value="albuquerque">Albuquerque Regional Benefit Office</option>

          <option value="New York" disabled>New York</option>
          <option value="buffalo">Buffalo Regional Benefit Office</option>

          <option value="new-york">New York Regional Benefit Office</option>

          <option value="North Carolina" disabled>North Carolina</option>
          <option value="winston-salem">Winston-Salem Regional Benefit Office</option>

          <option value="North Dakota" disabled>North Dakota</option>
          <option value="fargo">Fargo Regional Benefit Office</option>

          <option value="O" disabled>O</option>
          <option value="Ohio" disabled>Ohio</option>
          <option value="cleveland">Cleveland Regional Benefit Office</option>

          <option value="Oklahoma" disabled>Oklahoma</option>
          <option value="muskogee">Muskogee Regional Benefit Office</option>

          <option value="Oregon" disabled>Oregon</option>
          <option value="portland">Portland Regional Benefit Office</option>

          <option value="P" disabled>P</option>
          <option value="Pennsylvania" disabled>Pennsylvania</option>
          <option value="philadelphia">Philadelphia Regional Benefit Office</option>
          <option value="pittsburgh">Pittsburgh Regional Benefit Office</option>

          <option value="Philippines" disabled>Philippines</option>
          <option value="manila">Manila Regional Benefit Office</option>


          <option value="Puerto Rico" disabled>Puerto Rico</option>
          <option value="san-juan">San Juan Regional Benefit Office</option>


          <option value="R" disabled>R</option>
          <option value="Rhode Island" disabled>Rhode Island</option>
          <option value="providence">Providence Regional Benefit Office</option>

          <option value="S" disabled>S</option>
          <option value="South Carolina" disabled>South Carolina</option>
          <option value="columbia">Columbia Regional Benefit Office</option>

          <option value="South Dakota" disabled>South Dakota</option>
          <option value="sioux-falls">Sioux Falls Regional Benefit Office</option>

          <option value="T" disabled>T</option>
          <option value="Tennessee" disabled>Tennessee</option>
          <option value="nashville">Nashville Regional Benefit Office</option>

          <option value="Texas" disabled>Texas</option>
          <option value="houston">Houston Regional Benefit Office</option>
          <option value="waco">Waco Regional Benefit Office</option>


          <option value="U" disabled>U</option>
          <option value="Utah" disabled>Utah</option>
          <option value="salt-lake-city">Salt Lake City Regional Benefit Office</option>

          <option value="V" disabled>V</option>
          <option value="Vermont" disabled>Vermont</option>
          <option value="white-river-j">White River Junction Regional Benefit Office</option>

          <option value="Virginia" disabled>Virginia</option>
          <option value="roanoke">Roanoke Regional Benefit Office</option>

          <option value="W" disabled>W</option>
          <option value="Washington" disabled>Washington</option>
          <option value="seattle">Seattle Regional Benefit Office</option>

          <option value="West Virginia" disabled>West Virginia</option>
          <option value="huntington">Huntington Regional Benefit Office</option>

          <option value="Wisconsin" disabled>Wisconsin</option>
          <option value="milwaukee">Milwaukee Regional Benefit Office</option>

          <option value="Wyoming" disabled>Wyoming</option>
          <option value="cheyenne">Cheyenne Regional Benefit Office</option>
          </select>



              <select value={this.state.value} onChange={this.handleChange} >
                  <option value="pending-claim">Veterans waiting on a disability claim</option>
                  <option value="average-processing-time">Average wait time</option>
                  <option value="average-days-pending">Average days pending</option>
                  <option value="claims-received-average-wait">Average wait for new claims</option>
                  <option value="appealed-claims">Average time to decide an appeal</option>
                  <option value="completed-claims">Completed claims</option>
                  <option value="claims-received">Claims received</option>
                  <option value="claims-completed-per-fte">Claims completed per FTE</option>
                  <option value="employees-on-duty">Employees on duty</option>
                  <option value="claims-pending-125-days">Claims pending at least 125 days old</option>
                  <option value="claims-pending-at-least-one-year">Claims pending at least one year old</option>
                </select>






        <input type="submit" value="Submit" />
      </form>

    );
  }
}

export default DataForm;



