import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
          width: 100%; 
          height: 100vh; 
          background: 
          url("https://www.apetogentleman.com/wp-content/uploads/2020/04/minimalist-wardrobe.jpg") center;
          display: flex;
          align-items: center;
          justify-content: center;
          
`
const Wrapper = styled.div`padding: 30px; width: 20%; background-color: white; align-items: center;`
const Title = styled.h1`font-size: 24px; font-weight: 500;`
const Form = styled.form`display: flex; flex-wrap: wrap; flex-direction: column; width: 50%;`
const Input = styled.input`flex: 0; margin: 20px 10px 0px 0px; min-width: 40%px; padding: 10px; `

const Button = styled.button`width: 50%; height: 40px; background-color: black; color: white; border: none; border-radius: 2px;`

const Login = () => {
  return (
    <Container>
          <Wrapper>
                    <Title>LOGIN TO SLANDA ACCOUNT</Title>
                    <Form>
                              <Input placeholder="Username"/>
                              <Input placeholder="Password"/>
                             
                              <Button>LOGIN</Button>
                    </Form>
          </Wrapper>
    </Container>
  )
}

export default Login