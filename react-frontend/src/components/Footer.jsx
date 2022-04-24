import { Facebook, GitHub, Instagram } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
          display : flex;
`
const Left = styled.div`
          flex : 1;
          display : flex;
          flex-direction : column;
          padding : 20px;
`

const Logo = styled.h1``
const Desc = styled.p`
          margin : 20px 0px;
`
const SocialContainer = styled.div`
          display : flex;  
`
const SocialIcon = styled.div`
          width : 40px;
          height : 40px;
          display : flex;
          align-items : center;
          justify-content : center;
          margin-right : 20px;
          
`

const Center = styled.div`
          flex : 1;
          padding : 20px;          
`

const Title = styled.h3`

`

const List = styled.ul`
          
`

const ListItem = styled.li`
          
`

const Right = styled.div`
          flex : 1;
          padding : 20px;

`


const Footer = () => {
  return (
    <Container>
          <Left>
                    <Logo>SLANDA.</Logo>
                    <Desc>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid eaque fuga laboriosam quia corporis dolor, magni autem nam ratione debitis quas modi nihil, numquam sint ipsum, atque ut at delectus!</Desc>
                    <SocialContainer>
                              <SocialIcon>
                                        <Instagram/>
                              </SocialIcon>
                              <SocialIcon>
                                        <Facebook/>
                              </SocialIcon>
                              <SocialIcon>
                                        <GitHub/>
                              </SocialIcon>
                    </SocialContainer>
          </Left>

          <Center>
                    <Title>Useful Jumper</Title>
                    <List>
                              <ListItem>Home</ListItem>
                              <ListItem>Cart</ListItem>
                              <ListItem>My Account</ListItem>
                              <ListItem>Terms</ListItem>
                              <ListItem>Wishlist</ListItem>
                              <ListItem>Man Fashion</ListItem>
                              <ListItem></ListItem>
                    </List>
          </Center>
          <Right></Right>
    </Container>
  )
}

export default Footer