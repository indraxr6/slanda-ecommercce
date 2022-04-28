import React from 'react'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Announcement from '../components/Announcement'

const Container = styled.div``
const Wrapper = styled.div`padding: 20px; `
const Title = styled.h1`font-weight: 300; text-align: center;`
const Top = styled.div`display: flex; align-items: center; justify-content: space-between;`
const TopButton = styled.button`padding: 10px; font-weight: 600; cursor: pointer;`
const Bottom = styled.div``
const TopTexts = styled.div``
const TopText = styled.span``






const Cart = () => {
  return (
    <Container>
          <Navbar/> 
          <Announcement/>
          <Wrapper>
                    <Title>YOUR INVENTORY</Title>
                    <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                              <TopText>Shopping Bag(2)</TopText>
                              <TopText>Your Wishlist</TopText>
                    </TopTexts>
                    <TopButton>CHECKOUT</TopButton>
                    </Top>

                    <Bottom></Bottom>
          </Wrapper>
          <Footer/>
    </Container>
  )
}

export default Cart