import React, { useState } from 'react'
import styled from 'styled-components'
import { useLocation  } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'


const Container = styled.div``

const Title = styled.h1`margin: 20px; text-weight: bold;
          
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
      const location = useLocation();
      const cat = location.pathname.split("/")[2]
      const [filters,setFilters] = useState({})
      const [sort, setSort] = useState("newest")

      const handleFilters = (e) => {
            const value = e.target.value
            setFilters ({
                  ...filters,
                  [e.target.name]: value

            })
      }
      

  return (
    <Container>
              <Navbar/>
              <Announcement/>
              <Title>{cat}</Title>
              <FilterContainer>
                        <Filter>
                              <FilterText> Filter Products :</FilterText> 
                        <Select name="color" onChange={handleFilters}>
                              <Option disabled>Color</Option>

                              <Option>Black</Option>
                              <Option>Tan</Option>
                              <Option>White</Option>
                              <Option>Blue</Option>
                              <Option>Dark Gray</Option>
                              <Option>Brown</Option>
                        </Select>
                        <Select name="size" onChange={handleFilters}>
                              <Option disabled>Size</Option>
                              <Option>XS</Option>
                              <Option>S</Option>
                              <Option>M</Option>
                              <Option>L</Option>
                              <Option>XL</Option>
                        </Select>
                        </Filter>
                        
 
                        <Filter>
                              <FilterText> Sort Products :</FilterText> 
                        <Select onChange={(e) => setSort(e.target.value)}>
                              <Option value="newest">Newest</Option>
                              <Option value="asc">Price (High)</Option>
                              <Option value="dsc">Price (Low)</Option>
                        </Select>
                        </Filter>

              </FilterContainer>
              
              <Products cat={cat} filters={filters} sort={sort}/>
              <Newsletter/>
              <Footer/>
    </Container>
  )
}

export default ProductList