import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'


const Container = styled.div``

const Title = styled.h1`
          margin: 20px;
          text-weight: bold;
          
`
const FilterContainer = styled.div`
          display: flex;
          justify-content: space-between;
          
`
const Filter = styled.div`
          margin: 20px;
`
const FilterText = styled.span`
          font-size: 20px;
          font-weight: 600;
          margin-right: 20px;

`
const Select = styled.select`
          padding: 10px;
          margin-right: 20px;
`
const Option = styled.option``


const ProductList = () => {
  return (
    <Container>
              <Navbar/>
              <Announcement/>
              <Title>PRODUCTS.</Title>
              <FilterContainer>
                        <Filter>
                              <FilterText> Filter Products :</FilterText> 
                        <Select>
                              <Option disabled selected>Color</Option>

                              <Option>Black</Option>
                              <Option>Tan</Option>
                              <Option>White</Option>
                              <Option>Blue</Option>
                              <Option>Dark Gray</Option>
                              <Option>Brown</Option>
                        </Select>
                        <Select>
                              <Option disabled selected>Size</Option>
                              <Option>XS</Option>
                              <Option>S</Option>
                              <Option>M</Option>
                              <Option>L</Option>
                              <Option>XL</Option>
                        </Select>
                        </Filter>
                        

                        <Filter>
                              <FilterText> Sort Products :</FilterText> 
                        <Select>
                              <Option>Newest</Option>
                              <Option>Price (High)</Option>
                              <Option>Price (Low)</Option>
                        </Select>
                        </Filter>

              </FilterContainer>
              
              <Products/>
              <Newsletter/>
              <Footer/>
    </Container>
  )
}

export default ProductList