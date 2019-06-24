import React, { Component } from 'react';
import { Card, Icon, List } from 'semantic-ui-react'


  
 
  
class Instructions extends Component {
  render = () => (


  <Message fluid color='grey'>
   
    
 
    
   <Card.Content extra>
        <Icon name='exclamation' />
         
          *Before sending please attach in the cashapps memo which beats you want
    </Card.Content>
  
<Card.Content extra>
        <Icon name='payment' />
          Cashapps:$Korenlee93
         
    </Card.Content>
   
    <Card.Content extra> 
        <Icon name='user' />
        Email:klee93@gmail.com
    </Card.Content>
</Message>
)
}

export default Instructions;


