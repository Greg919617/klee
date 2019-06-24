import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import {render} from 'react-dom';

import '../style.css';
import {Button, Card, Menu, Container, Image, Grid, Icon, Input, Loader, Modal, List} from 'semantic-ui-react';


/* Semantic Components */
import 'react-responsive-audio-player/dist/audioplayer.css';
import AudioPlayer from 'react-responsive-audio-player';

import Navbar from '../components/navbar/NavBar.js';
import CheckoutSong from '../components/checkout-song/CheckoutSong.js';
import CartItem from '../components/cart-item/CartItem.js';
import Instructions from '../components/instructions/Instructions.js';
import SongItem from '../components/song-item/SongItem.js';
import SongList from '../components/song-list/SongList.js';


import LoginModal from '../components/modals/LoginModal.js';
import CouponModal from '../components/modals/CouponModal.js';
import DiscountModal from '../components/modals/DiscountModal.js';
import LoginSignup from '../components/modals/Login-Signup.js';

// import Header from '../components/header/Header.js';
// Grid.Colum mobile={16} tablet={12} computer={11}



const methodData = [
    {
        supportedMethods: ['basic-card']
    }
];




export default class App extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name: 'React',
            cartItems: [],
            playlist: []
            
        };
        //declares audioplayer, 
        this.audio=undefined
    }

    playsong = song => {
        this.setState({
            playlist: [song]
            
        });
            setTimeout(()=>this.audio.play(), 100)
    };
    addSong = name => {
        if (this.state.cartItems.indexOf(name) >= 0) {
            return;
        }
        this.setState({cartItems: [...this.state.cartItems, name]})
    };

    removeSong = name => {
        this.setState({cartItems: this.state.cartItems.filter(e => e !== name)})
    };

    render() {
        return (
           <div>         
            <Navbar/>     
            
            <Grid celled ='internally'>        
                <Grid.Row stretched>
                    <Grid.Column width={5}>
                        <Menu fluid vertical tabular>
                        <LoginModal/>
                        <CouponModal/>
                        <DiscountModal/>
                        <LoginSignup/>
                        </Menu>
                        <Instructions/>
                    </Grid.Column>
                    <Grid.Column width={6}> 
                    <Grid.Row>
                    <Input  transparent icon={{ name: 'search', circular: true, link: true }}  iconPosition='left' placeholder='Search...'  />   
                        </Grid.Row>
                        <SongList playsong ={this.playsong} addSong={this.addSong}/>               
                        <Button color='facebook'>
                        <Icon name='facebook' /> Facebook
                    </Button>
                    <Button color='twitter'>
                        <Icon name='twitter' /> Twitter
                    </Button>
                    <Button color='instagram'>
                        <Icon name='instagram' /> Instagram
                    </Button>
                    <Button color='youtube'>
                        <Icon name='youtube' /> YouTube
                    </Button>
                    </Grid.Column>
                    <Grid.Column width={4}>  
                        <CheckoutSong playsong={this.playsong} cartItems={this.state.cartItems} removeSong={this.removeSong}/>
                    </Grid.Column>
                  
                </Grid.Row>
                
                <Grid.Row>    
                    <Grid.Column>
                    
                    </Grid.Column>
                </Grid.Row>
                </Grid>
                <AudioPlayer  audioElementRef={ (audio)=>{
                    this.audio = audio

                }} playlist={this.state.playlist} />  
        
          


                </div>
            
        );
    }
}





render(<App/>, document.getElementById('root'));
