import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
          height : 18px;
          background-color : white;
          color : black;
          display : flex;
          aligh-items : center;
          justify-content : center;
          font-size : 14px;
          font-weight : 500;

`
const Announcement = () => {
  return (
    <Container>SLANDA Free BLACK FRIDAY items start this week!!</Container>
  )
}

export default Announcement