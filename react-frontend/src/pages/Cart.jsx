import React from 'react'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Announcement from '../components/Announcement'
import { Add, Remove } from '@material-ui/icons'

const Container = styled.div``
const Wrapper = styled.div`padding: 20px; `
const Title = styled.h1`font-weight: 300; text-align: center;`
const Top = styled.div`display: flex; align-items: center; justify-content: space-between; padding:20px`
const TopButton = styled.button`padding: 10px; font-weight: 600; cursor: pointer; 
border: ${(props)=> props.type === "filled" && "none"};
background-color: ${(props)=> props.type === "filled" ? "black" : "transparent"} ;
color: ${(props)=> props.type === "filled" && "white"};
`
const TopTexts = styled.div``
const TopText = styled.span`text-decoration: underline; cursor: pointer; margin: 0px 10px;`
const Bottom = styled.div`display: flex; justify-content: space-between;`
const Info = styled.div`flex: 3`

const Product = styled.div`display: flex; justify-content: space-between;`
const ProductDetail = styled.div`flex: 2; display: flex;`
const Image = styled.img`width: 200px;`
const Details = styled.div`padding: 20px; display: flex; flex-direction: column; justify-content: space-around ;`
const ProductName = styled.span``
const ProductId = styled.span``
const ProductColor = styled.div`width 20px; height: 20px; border-radius: 50%; background-color: ${(props)=> props.color};`
const ProductSize = styled.span``
const PriceDetail = styled.div`flex: 1; display: flex; align-items: center; justify-content: center; flex-direction: column;`

const ProductAmountContainer = styled.div`align-items: center; display: flex; margin-bottom: 20px;`
const ProductAmount = styled.div`margin: 6px; font-size: 22px;`
const ProductPrice = styled.div`font-size: 22px;`
const Hr = styled.hr`margin: 20px 0px;`

const Summary = styled.div`flex : 1; border: 0.5px solid lightgray; border-radius: 10px; padding: 20px; height: 50vh;`

const SummaryTitle = styled.h1`font-weight: 300;`
const SummaryItem = styled.div`margin: 30px 0px; display: flex; justify-content: space-between; font-weight: ${props=>props.type === "total" && "500"}; font-size : ${props=>props.type === "total" && "24px"};`
const SummaryItemText = styled.span`;`
const SummaryItemPrice = styled.span``
const Button = styled.button`width: 100%; padding: 10px; font-weight: 600; color: white; background-color: black;`
 





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
                              <TopText>Your Wishlist(0)</TopText>
                    </TopTexts>
                    <TopButton type='filled' >CHECKOUT NOW</TopButton>
                    </Top>

                    <Bottom>
                        <Info>
                          <Product>
                            <ProductDetail>
                              <Image src="https://ik.imagekit.io/slanda/276984802_5705513039464387_3524740847466737611_n_FBv6UfSJk.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1650822502174"/>
                              <Details>
                                <ProductName><b>Product : </b>NEW BRAND DRIP</ProductName>
                                <ProductId><b>ID :</b>58429489</ProductId>
                                <ProductColor color="black"/>
                                <ProductSize><b>Size : </b>37</ProductSize>
                              </Details>
                            </ProductDetail>
                            <PriceDetail>
                              <ProductAmountContainer>
                                  <Add/>
                                  <ProductAmount>2</ProductAmount>
                                  <Remove/>
                              </ProductAmountContainer>
                              <ProductPrice>$ 30</ProductPrice>
                            </PriceDetail>
                          </Product>
                          <Hr/>
                          <Product>
                            <ProductDetail>
                              <Image src="https://ik.imagekit.io/slanda/275032319_1137187930375706_6708275428745470467_n_GEfokZfrL.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1650822513123"/>
                              <Details>
                                <ProductName><b>Product : </b>NEW BRAND DRIP</ProductName>
                                <ProductId><b>ID :</b>58429489</ProductId>
                                <ProductColor color="black"/>
                                <ProductSize><b>Size : </b>37</ProductSize>
                              </Details>
                            </ProductDetail>
                            <PriceDetail>
                              <ProductAmountContainer>
                                  <Add/>
                                  <ProductAmount>2</ProductAmount>
                                  <Remove/>
                              </ProductAmountContainer>
                              <ProductPrice>$ 30</ProductPrice>
                            </PriceDetail>
                          </Product><Product>
                            <ProductDetail>
                              <Image src="https://ik.imagekit.io/slanda/277802440_3098696853777950_4393288114939394339_n_xeNBl9dmB.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1650822471561"/>
                              <Details>
                                <ProductName><b>Product : </b>NEW BRAND DRIP</ProductName>
                                <ProductId><b>ID :</b>58429489</ProductId>
                                <ProductColor color="black"/>
                                <ProductSize><b>Size : </b>37</ProductSize>
                              </Details>
                            </ProductDetail>
                            <PriceDetail>
                              <ProductAmountContainer>
                                  <Add/>
                                  <ProductAmount>2</ProductAmount>
                                  <Remove/>
                              </ProductAmountContainer>
                              <ProductPrice>$ 30</ProductPrice>
                            </PriceDetail>
                          </Product><Product>
                            <ProductDetail>
                              <Image src="https://ik.imagekit.io/slanda/277161660_1011284916408950_2921323474536572834_n_IcWQQEtbM.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1650822486190"/>
                              <Details>
                                <ProductName><b>Product : </b>NEW BRAND DRIP</ProductName>
                                <ProductId><b>ID :</b>58429489</ProductId>
                                <ProductColor color="black"/>
                                <ProductSize><b>Size : </b>37</ProductSize>
                              </Details>
                            </ProductDetail>
                            <PriceDetail>
                              <ProductAmountContainer>
                                  <Add/>
                                  <ProductAmount>2</ProductAmount>
                                  <Remove/>
                              </ProductAmountContainer>
                              <ProductPrice>$ 30</ProductPrice>
                            </PriceDetail>
                          </Product>
                        </Info>
                        <Summary>
                          <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                          <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$ 80</SummaryItemPrice>
                          </SummaryItem><SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>$ 4.90</SummaryItemPrice>
                          </SummaryItem><SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>- no discount</SummaryItemPrice>
                          </SummaryItem>
                          <SummaryItem type="total">
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$ 85.0</SummaryItemPrice>
                          </SummaryItem>
                          <Button>CHECKOUT</Button>
                        </Summary>
                    </Bottom>
          </Wrapper>
          <Footer/>
    </Container>
  )
}

export default Cart