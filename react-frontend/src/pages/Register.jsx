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
const Agreement = styled.span`font-size: 14px; margin: 20px 0px;`
const Button = styled.button`width: 50%; height: 40px; background-color: black; color: white; border: none; border-radius: 2px;`

const Register = () => {
  return (
    <Container>
          <Wrapper>
                    <Title>CREATE AN ACCOUNT</Title>
                    <Form>
                              <Input placeholder="Name"/>
                              <Input placeholder="Gender"/>
                              <Input placeholder="Number"/>
                              <Input placeholder="E-mail"/>
                              <Input placeholder="Username"/>
                              <Input placeholder="Password"/>
                              <Agreement>
                                        By creating an account, I consent to the processing of my personal data in accordance with the <b>Privacy Policy.</b>
                              </Agreement>
                              <Button>REGISTER</Button>
                    </Form>
          </Wrapper>
    </Container>
  )
}

export default Register