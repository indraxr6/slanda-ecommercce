import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { Add, Remove } from '@material-ui/icons'
import {useLocation} from "react-router-dom";
import { publicRequest } from '../requestMethods'

const Container = styled.div``
const Wrapper = styled.div`padding: 50px; display: flex;`
const ImgContainer = styled.div`flex: 1;`
const Image = styled.img`width: 85%; height: 90vh; object-fit: cover;` 
const InfoContainer = styled.div`flex: 1; padding: 0px 50px;` 
const Title = styled.h1`font-weight: bold;`
const Desc = styled.div`margin:20px 0px`
const Price = styled.span`font-size: 40px;`

const FilterContainer = styled.div`width: 50%; display: flex; justify-content: space-between; margin: 30px 0px;`
const Filter = styled.div`display: flex; align-items: center;`
const FilterTitle = styled.span`fz: 20px; font-weight: 200;`
const FilterColor = styled.div`width: 20px; height: 20px; border-radius: 50%; background-color: ${props => props.color}; margin: 0px 5px; cursor: pointer;`
const FilterSize = styled.select` margin-left: 10px; padding: 5px;`

const FilterSizeOption = styled.option``
const AddContainer = styled.div`display: flex; align-items: center; width: 50%; justify-content: space-between;`
const AmountContainer = styled.div`display: flex; align-items: center; font-weight: bold;`
const Amount = styled.span`width: 30px; height: 30px; border-radius:10px; border: 1px solid gray; display: flex; justify-content: center; align-items: center; margin: 0px 5px;`
const Button = styled.button`padding: 15px; border: 1px solid gray; background-color: white; cursor: pointer; font-weight: bold; 
&:hover{
  background-color: #f8f4f4;
}`

const Product = () => {
  // const location = useLocation();
  // const id = location.pathname.split("/")[2]
  // const [product, setProduct] = useState({})
  // useEffect(() => {
  //   const getProduct = async ()=> {
  //     try {
  //       const res = await publicRequest.get("/products/find/" + id)
  //       setProduct(res.data)
  //     } catch {}
  //   }
  //   getProduct()
  // }, [id])

  return (
    <Container>
              <Navbar/>
              <Announcement/>
              <Wrapper>
                <ImgContainer>
                  <Image src="https://ik.imagekit.io/slanda/254762598_313236176993118_2258664993415028563_n_KLdmvSHFQ.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1650822506759"/>
                  {/* <Image src={product.img}/> */}

                </ImgContainer>
                <InfoContainer>
                  <Title>Denim Blacko</Title>
                  {/* <Title>{product.title}</Title> */}
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
                  <AddContainer>
                    <AmountContainer>
                      <Remove/>
                      <Amount>1</Amount>
                      <Add/>
                    </AmountContainer>
                    <Button>ADD TO CART</Button>
                  </AddContainer>
                </InfoContainer>
              </Wrapper>
              <Newsletter/>
              <Footer/>
    </Container>
  )
}

export default Product