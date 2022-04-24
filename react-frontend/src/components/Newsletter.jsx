import { Send } from '@material-ui/icons'
import React from 'react'

const Container = styled.div`
          height =6vh;
          background-color : #fcf5f5;
          display : flex;
          align-items : center;
          justify-content : center;
`
const Title = styled.div`
          
`
const Desc = styled.div``
const InputContainer= styled.div``
const Input = styled.input``
const Button = styled.button``




const NewsLetter = () => {
  return (
    <Container>
          <Title>Newsletter</Title>
          <Desc>Get timely updates from your favorite products.</Desc>
          <InputContainer>
                    <Input placeholder="Your E-mail"/>
                    <Button>
                              <Send/>
                    </Button>
          </InputContainer>
          
    </Container>
  )
}

export default NewsLetter