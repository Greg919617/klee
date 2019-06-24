import React, { Component } from 'react';
import { Card, Icon, List, Message } from 'semantic-ui-react'


  
 
  
class Instructions extends Component {
  render = () => (


  <Message info color='black'>
   
    
 
    
   <Message.Header>
        <Icon name='warning' /> To Checkout Beat
         
         
    </Message.Header>
    <p> Before sending please attach in the cashapps memo which beats you want</p>

    <Message.Header>
        <Icon name='payment' /> To Checkout Beat
         
         
    </Message.Header>
    <p> Before sending please attach in the cashapps memo which beats you want</p>
    <Message.Header>
        <Icon name='user' /> To Checkout Beat
         
         
    </Message.Header>
    <p> Before sending please attach in the cashapps memo which beats you want</p>
    
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


