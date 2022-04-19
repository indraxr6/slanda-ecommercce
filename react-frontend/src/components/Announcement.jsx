import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
          height : 20px;
          background-color : black;
          color : white;
          display : flex;
          aligh-items : center;
          justify-content : center;
          font-size : 14px;
          font-weight : 500;

`
const Announcement = () => {
  return (
    <Container>Free black FRIDAY bitches near malang!!</Container>
  )
}

export default Announcement