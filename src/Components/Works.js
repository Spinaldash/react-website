import React from 'react'
import { Image as ImageComponent, Item } from 'semantic-ui-react'

const paragraph = <ImageComponent src='/assets/images/wireframe/short-paragraph.png' />

const Works = () => (

  <Item.Group>
    <Item>

      <Item.Image size='tiny' src='https://c1.staticflickr.com/5/4251/34965091716_29fb270b1c.jpg' />
      <Item.Content >
        <Item.Header as='a'>Brew</Item.Header>
        <Item.Meta>
          <span className='price'>$1200</span>
        </Item.Meta>
      </Item.Content>

    </Item>
    <Item>
      <Item.Image size='tiny' src='https://c1.staticflickr.com/5/4251/34965091716_29fb270b1c.jpg' />

      <Item.Content>
        <Item.Header>Brew</Item.Header>
        <Item.Meta>
          <span>The Planeswalker's Compendium</span>
        </Item.Meta>
      </Item.Content>
    </Item>

    <Item>
      <Item.Image size='tiny' src='/assets/images/avatar/large/veronika.jpg' />

      <Item.Content>
        <Item.Header>Veronika Ossi</Item.Header>
        <Item.Description>{paragraph}</Item.Description>
      </Item.Content>
    </Item>

    <Item>
      <Item.Image size='tiny' src='/assets/images/avatar/large/jenny.jpg' />

      <Item.Content>
        <Item.Header>Jenny Hess</Item.Header>
        <Item.Description>{paragraph}</Item.Description>
      </Item.Content>
    </Item>
  </Item.Group>
)

export default Works
