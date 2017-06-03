import React from 'react'
import { Image, Header, Divider } from 'semantic-ui-react'

const brewSub = `The Planeswalker's Compendium`
const gameSub = `Trade your games`
const brew2Sub = `The Planeswalker's Compendium (Rebuilt with React)`

const Projects = () => (
  <div>
  <Header as='h2'>Selected Work</Header>
  <Divider horizontal></Divider>
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
      <Image src='https://c1.staticflickr.com/5/4268/34162321114_fc24b1b3ba.jpg' />
      <Header.Content>
        Gameswap
        <Header.Subheader>
          {gameSub}
        </Header.Subheader>
      </Header.Content>
    </Header>
    <Header as='h2'>
      <Image src='https://c1.staticflickr.com/5/4251/34965091716_29fb270b1c.jpg' />
      <Header.Content>
        Brew 2
        <Header.Subheader>
          {brew2Sub}
        </Header.Subheader>
      </Header.Content>
    </Header>
    <Divider></Divider>
  </div>
)

export default Projects
