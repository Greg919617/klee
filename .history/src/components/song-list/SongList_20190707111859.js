import React, { Component } from 'react';
import {Card, Container, List} from 'semantic-ui-react';
import SongItem from '../song-item/SongItem.js';


const songs = [
  {url: '/album1/A-10-wanted.ogg', title: 'Wanted'},
  {url: '/album1/on-rough.ogg', title: 'More music to come'},
  {url: '/album1/raw-120.ogg', title: 'Migrating more tracks soon'},
  {url: '/wanted.mp3', title: 'Placeholders'},
  {url: '/wanted.mp3', title: 'React Track'},
  {url: '/wanted.mp3', title: 'NPM Track'},
  {url: '/wanted.mp3', title: 'Stay tuned'},
];



class SongList extends Component {
  render() {
      return (
          <Container>
                 
              <Card fluid color='teal'>
                  <Card.Content>
                      <Card.Header>
                          
                      {/* <Segment>
       <Image src={'images/trial.png'} avatar circular/>  
        </Segment> */}
          
                          Beats
                      </Card.Header>
                      <Card.Description style={{height: 200}}>
                          <List divided relaxed style={{height: '100%',
                              overflow: 'scroll'}}>
                              {songs.map(song => <SongItem playsong={this.props.playsong} key={song.title} title={song.title} url={song.url}
                                                                />)}
                          </List>
                      </Card.Description>
                  </Card.Content>
              </Card>
        </Container>
      );
  };
}

export default SongList;