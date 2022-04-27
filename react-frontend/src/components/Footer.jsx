import { Facebook, GitHub, Instagram, MailOutline, Phone, Room } from '@material-ui/icons'
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

// const Logo = styled.img`
//           width : 100px;
//           display : flex;
// `
const Logotext = styled.h1`
          display : flex;
          font-weight : 600;

`
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
          margin-bottom : 30px;

`

const List = styled.ul`
          margin : 0:
          padding : 0;
          list-style : none;
          display : flex;
          flex-wrap : wrap;
`

const ListItem = styled.li`
          width : 50%;
          margin-bottom : 10px;
`

const Right = styled.div`
          flex : 1;
          padding : 20px;
          justify-content : flex-end;

`
const ContactItem = styled.div`
          display : flex;
          margin-bottom : 20px;
          align-items : center;

`



const Footer = () => {
  return (
    <Container>
          <Left>
                    {/* <Logo src="https://ik.imagekit.io/slanda/Slanda-removebg-preview__cTXvfHzl.png?ik-sdk-version=javascript-1.4.3&updatedAt=1650824039455"/> */}
                    <Logotext>SLANDA.</Logotext>
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
                    <Title>Useful Links</Title>
                    <List>
                              <ListItem>Home</ListItem>
                              <ListItem>Cart</ListItem>
                              <ListItem>My Account</ListItem>
                              <ListItem>Terms</ListItem>
                              <ListItem>Wishlist</ListItem>
                              <ListItem>Man Fashion</ListItem>
                              <ListItem>Accessories</ListItem>
                              <ListItem>About</ListItem>
                    </List>
          </Center>
          
          <Right>
                    <Title>Contact Us</Title>
                    <ContactItem><Room style={{marginRight:"10px"}}/>Malang 65154, Indonesia </ContactItem>
                    <ContactItem><Phone style={{marginRight:"10px"}}/>+62 555 782 422</ContactItem>
                    <ContactItem><MailOutline style={{marginRight:"10px"}}/> mail@slanda.co</ContactItem>
          </Right> 
    </Container>
  )
}

export default Footer