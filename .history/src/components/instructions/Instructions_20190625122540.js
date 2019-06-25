import React, { Component } from 'react';
import {  Icon, Message } from 'semantic-ui-react'


  
 
  
class Instructions extends Component {
  render = () => (


  <Message info color='black'>
   
    
 
    
   <Message.Header>
        <Icon name='warning' /> To Checkout Beat
         
         
    </Message.Header>
    <p> Before sending please attach in the cashapps memo which beats you want and your email address</p>

    <Message.Header>
        <Icon name='payment' /> Cashapps
         
         
    </Message.Header>
    <p> Korenlee93</p>
    <Message.Header>
        <Icon name='user' /> Contact me
         
         
    </Message.Header>
    <p> llsbeats19@gmail.com</p>
    
 {/* <Card.Content extra>
        <Icon name='payment' />
          Cashapps:$Korenlee93
         
    </Card.Content>
   
    <Card.Content extra> 
        <Icon name='user' />
        Email:klee93@gmail.com
    </Card.Content>  */}
</Message>
)
}

export default Instructions;


