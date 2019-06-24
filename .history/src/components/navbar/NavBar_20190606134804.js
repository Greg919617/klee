// import React from 'react'
import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import LoginModal from '../modals/LoginModal.js';
import CouponModal from '../modals/CouponModal.js';
import DiscountModal from '../modals/DiscountModal.js';
import LoginSignup from '../modals/Login-Signup.js';
import Instructions from '../instructions/Instructions.js';
import { Input, Menu, Modal, Segment, Image, Header, Button, Grid, Container, Message, Form } from 'semantic-ui-react'

class Navbar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div> 
       <Segment inverted>
       <Image src={'images/trial.png'} size='medium' centered="true" />  
        </Segment>    
      </div>
    )
  }
}


export default Navbar;


