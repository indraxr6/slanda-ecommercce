import styled from "styled-components";
import Product from "./Product";
import { popularProducts } from "../data";
import { useEffect } from "react";
import React, { useState } from "react";
import axios from "axios";


const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
`;

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  return (
    <Container>
    {popularProducts.map(item=>(
              <Product item={item} key={item.id}/>
    ))}
</Container>
  );
};

export default Products;
