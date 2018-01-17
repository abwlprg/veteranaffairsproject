import React, { Component } from 'react';
import '../../styles/App.css';


class Contactform extends Component {

  render() {
    return(
        <div className="bg-contact2">

        <div className="container-contact2">
        <div className="wrap-contact2">
            <form className="contact2-form validate-form">
                <span className="contact2-form-title">
                    Contact Us
                </span>

                <div className="wrap-input2 validate-input">
                    <input className="input2" type="text" name="name"/>
                    <span className="focus-input2" data-placeholder="NAME"> </span>
                </div>

                <div className="wrap-input2 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                    <input className="input2" type="text" name="email"/>
                    <span className="focus-input2" data-placeholder="EMAIL"></span>
                </div>

                <div className="wrap-input2 validate-input" data-validate = "Message is required">
                    <textarea className="input2" name="message"></textarea>
                    <span className="focus-input2" data-placeholder="MESSAGE"></span>
                </div>

                <div className="container-contact2-form-btn">
                    <div className="wrap-contact2-form-btn">
                        <div className="contact2-form-bgbtn"></div>
                        <button className="contact2-form-btn">
                            Send Your Message
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
		
	</div>
   );
  }
}

export default Contactform;
