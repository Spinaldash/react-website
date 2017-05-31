import React from 'react'
import { Image, Header } from 'semantic-ui-react'

const brewSub = `The Planeswalker's Compendium`

const Projects = () => (
  <div>
    <Header as='h2'>
      <Image src='https://c1.staticflickr.com/5/4251/34965091716_29fb270b1c.jpg' />
      <Header.Content>
        Brew
        <Header.Subheader>
          {brewSub}
        </Header.Subheader>
      </Header.Content>
    </Header>
    <Header as='h2'>
      <Image src='https://c1.staticflickr.com/5/4251/34965091716_29fb270b1c.jpg' />
      <Header.Content>
        Brew
        <Header.Subheader>
          {brewSub}
        </Header.Subheader>
      </Header.Content>
    </Header>
  </div>
)

export default Projects
