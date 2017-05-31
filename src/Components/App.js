import React, { Component } from 'react';
import { Button, Image, Container } from 'semantic-ui-react'
import '../assets/App.css';
import Works from './Works'
import Projects from './Projects'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Container text>
            <Image src='https://c1.staticflickr.com/5/4226/34617314040_c802197e50_z.jpg' size='medium' shape='circular' centered />
            <h2><span role="img" aria-label="Wave">👋</span> Hi, I'm MJ</h2>
            { /* <Image src='https://c1.staticflickr.com/5/4221/34616811220_849c89aac7.jpg' size='medium' shape='circular' centered/> */}
            <p>I make Web Apps in San Francisco. I specialize in Javascript and learning how to use all kinds of new technology fast.</p>
            <p>I'm avaiable for hire. Contact Me for more information.</p>
            <Projects></Projects>
          </Container>
        </div>
      </div>
    );
  }
}

export default App;
