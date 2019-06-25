// import React from 'react'
import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
// import LoginModal from '../modals/LoginModal.js';
// import CouponModal from '../modals/CouponModal.js';
// import DiscountModal from '../modals/DiscountModal.js';
// import LoginSignup from '../modals/Login-Signup.js';
// import Instructions from '../instructions/Instructions.js';
import { Segment, Image, } from 'semantic-ui-react'

class Navbar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {

    return (
      <div> 
       <Segment inverted color='teal'>
       <Image src={'images/trial.png'} size='medium' centered="true" />  
        </Segment>    
      </div>
    )
  }
}


export default Navbar;


