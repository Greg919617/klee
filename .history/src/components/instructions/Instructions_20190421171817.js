import React, { Component } from 'react';
import { Card, Icon, List } from 'semantic-ui-react'


  
 
  
class Instructions extends Component {
  render = () => (


  <Card inverted>
   
    
      <Card.Content extra>
    <Icon name='plus'/>
    Click + ADD next to the beat(s) you wish to order
   </Card.Content>
    
    <Card.Content extra>
    <Icon name='shopping cart'/>
        When you are ready to order, click shopping cart in the Cart section to redirect to make payment
   </Card.Content>
  
 
   
      <Icon name='user' />
      After payment you will receive the download links to your beats to your PayPal email address (please check your junk mail)
 
  </Card>
)
}

export default Instructions;


