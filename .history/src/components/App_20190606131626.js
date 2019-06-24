import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import {render} from 'react-dom';

import '../style.css';

import {Button, Card, Menu, Message, Container, Image, Grid, Segment, Icon, Input, Loader, Modal, List} from 'semantic-ui-react';


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





const songs = [
    {url: '/album1/on-rough.ogg', title: 'Own'},
    {url: '/album1/A-10-wanted.ogg', title: 'Wanted'},
    {url: '/album1/raw-120.ogg', title: 'Raw'},
    {url: '/wanted.mp3', title: 'Wanted3'},
    {url: '/wanted.mp3', title: 'Wanted4'},
    {url: '/wanted.mp3', title: 'Wanted5'},
    {url: '/wanted.mp3', title: 'Wanted6'},
    {url: '/wanted.mp3', title: 'Wanted7'},
  ];



export default class App extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name: 'React',
            playlist: [],
            
            
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
    // addSong = name => {
    //     if (this.state.cartItems.indexOf(name) >= 0) {
    //         return;
    //     }
    //     this.setState({cartItems: [...this.state.cartItems, name]})
    //};

    //removeSong = name => {
        //this.setState({cartItems: this.state.cartItems.filter(e => e !== name)})
    //};
    

    render() {
        return (
           <div>         
            <Navbar/>     
            
            <Grid celled ='internally' stackable columns={2}>        
                <Grid.Row>
                    <Grid.Column width={5}>
                        <Menu vertical stretched>
                        <LoginModal/>
                        <DiscountModal/>
                        </Menu>
                        <Instructions/>

                        {/* <Button color='facebook'>
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
                    </Button> */}
            </Grid.Column>
                <Grid.Column width={10}> 
                    <Grid.Row>
                    <Message warning color='black'>
    <Message.Header>Sale</Message.Header>
    <p>
    Special beats sale 3 for $100.
    </p>
  </Message>
                    
                    {/* <Input type='text' icon={{ name: 'search', circular: true, link: true }}  iconPosition='left' placeholder='Search...'  />    */}
                        
                        </Grid.Row>
                        <SongList color='black' playsong ={this.playsong}/>               
                       
                    </Grid.Column>
                    {/* <Grid.Column width={4}>  
                        {<CheckoutSong playsong={this.playsong} />}
                    </Grid.Column> */}
                  
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
