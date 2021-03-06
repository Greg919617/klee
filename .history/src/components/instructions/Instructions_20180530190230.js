import React from 'react'
import { Card, Icon, List } from 'semantic-ui-react'


  
 
  


const Instructions = () => (
  <Card inverted>
    <Card.Content header='Instructions' />
    
      <Card.Content extra>
    <Icon name='plus'/>
    Click + ADD next to the beat(s) you wish to order
   </Card.Content>
    
    <Card.Content extra>
    <Icon name='shopping cart'/>
        When you are ready to order, click shopping cart in the Cart section to redirect to make payment
   </Card.Content>
  
    <Card.Content extra>
   
      <Icon name='user' />
      After payment you will receive the download links to your beats to your PayPal email address (please check your junk mail)
    </Card.Content>
  </Card>
)

export default Instructions;


