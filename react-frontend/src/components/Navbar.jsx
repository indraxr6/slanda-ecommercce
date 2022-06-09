import React from 'react'
import styled from 'styled-components'
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from '@material-ui/core';
import { Link } from "react-router-dom";
// import { mobile } from "../responsive" 
// import Slanda from '../assets/images/slanda.png'
      

const Container = styled.div`
          height : 65px;
          
`;

const Wrapper = styled.div`
          padding : 10px 20px;
          display : flex;
          justify-content : space-between;
          align-items : center;
          
 
`

const Left = styled.div`
          flex : 1;
          display : flex;
          align-items : center;
`
const Languange = styled.span`
          font-size : 14px;
          cursor : pointer;
`

const SearchContainer = styled.div`
          border : 0.5px solid lightgray;
          display : flex;
          align-items : center;
          margin-left : 25px;
          padding : 5px;
          width : 80%;
`
const Input = styled.input` 
border : 0; 
width : 500%;
text-align : center;
// padding-left : ;
`

//////////////////////////////////////////////////Left

const Center = styled.div`
          
          flex : 1;
          display : flex;
          align-items : center;
`

const Logo = styled.img`
          
          width : 8%;
          
`

const Right = styled.div`
          flex : 1;
          align-items : center;
          display : flex;
          justify-content : flex-end;
`

const MenuItem = styled.div`
          font-size : 14px;
          cursor : pointer;
          margin-left : 25px;
`

const Navbar = () => {
  return (
    <Container>
          <Wrapper>
                    <Left>
                    <Link to="/" style={{ width: "100%" }}>
                        <Logo src="https://ik.imagekit.io/slanda/Slanda-removebg-preview__cTXvfHzl.png?ik-sdk-version=javascript-1.4.3&updatedAt=1650824039455"/>
                    </Link>
                    </Left>


                    <Center>
                       <Languange>ID</Languange>
                       <SearchContainer>
                                 <Input/>
                                 <Search style={{color:"gray", fontSize:16}}/>
                       </SearchContainer>
                    </Center>

                    <Right>
                    <Link to="/products/:category" style={{ textDecoration: "none", color: "#000" }}>
                    <MenuItem>PRODUCTS</MenuItem>
                    </Link>

                    <MenuItem>ABOUT</MenuItem>

                    <Link to="/register" style={{ textDecoration: "none", color: "#000" }}>
                      <MenuItem>REGISTER</MenuItem>
                    </Link>

                    <Link to="/login" style={{ textDecoration: "none", color: "#000" }}>
                      <MenuItem>LOG IN</MenuItem>
                    </Link>

                      <MenuItem>
                      <Badge badgeContent={4} color="primary">
                      <Link to="/cart" style={{ textDecoration: "none", color: "#000" }}>
                        <ShoppingCartOutlined />
                      </Link>
                      </Badge>
                      </MenuItem>
                    </Right>
          </Wrapper>
    </Container>
  );
};

export default Navbar