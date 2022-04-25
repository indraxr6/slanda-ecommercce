import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const Container = styled.div``
const Wrapper = styled.div`padding: 50px; display: flex;`
const ImgContainer = styled.div`flex: 1;`
const Image = styled.img`width: 100%; height: 90vh; object-fit: cover;` 
const InfoContainer = styled.div`flex: 1; padding: 0px 50px;` 
const Title = styled.h1`font-weight: bold;`
const Desc = styled.div`margin:20px 0px`
const Price = styled.span`font-size: 40px;`

const FilterContainer = styled.div`width: 40%; display: flex; justify-content: space-between;`
const Filter = styled.div`display: flex; align-items: center;`
const FilterTitle = styled.span`fz: 20px; font-weight: 200;`
const FilterColor = styled.div`width: 20px; height: 20px; border-radius: 50%; background-color: ${props => props.color}; margin: 0px 5px`
const FilterSize = styled.select``
const FilterSizeOption = styled.option``




const Product = () => {
  return (
    <Container>
              <Navbar/>
              <Announcement/>
              <Wrapper>
                <ImgContainer>
                  <Image src="https://i.ibb.co/S6qMxwr/jean.jpg"/>
                </ImgContainer>
                <InfoContainer>
                  <Title>Denim Blacko</Title>
                  <Desc>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</Desc>
                  <Price>$14</Price>
                  <FilterContainer>
                     <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color="black"/>
                        <FilterColor color="darkblue"/>
                        <FilterColor color="gray"/>
                     </Filter>

                     <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>XS</FilterSizeOption>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>X</FilterSizeOption>
                        </FilterSize>           
                     </Filter>
                  </FilterContainer>
                </InfoContainer>
              </Wrapper>
              <Newsletter/>
              <Footer/>
    </Container>
  )
}

export default Product