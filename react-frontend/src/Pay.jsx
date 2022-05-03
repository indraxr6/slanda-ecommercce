import React, { useState, useEffect } from 'react'
import StripeCheckout from 'react-stripe-checkout'

const Key = "pk_test_51Kv2RSCe4CMycWZvzLrLmHtrayF7rDugsKywgPA3jmpKK34LE6kPhCNWsuDcAdjJgwuPQLPCpC2L58a776xFVRjc00SLbGTOzb"

const Pay = () => {
          const[stripeToken, setStripeToken] = useState(null)
          const onToken = token => {
                    setStripeToken(token)
          }
          useEffect(() => {
                    const makeRequest = async () => {
                              try {
                                        axios
                              } catch(err) {

                              }
                    }
                    }, [stripeToken])

          }

  return (
    <div>
              <StripeCheckout
                    name="Slanda"
                    image="https://ik.imagekit.io/slanda/Slanda_hiRwQYiut.png?ik-sdk-version=javascript-1.4.3&updatedAt=1650822974625"
                    billingAddress
                    shippingAddress
                    description='Total = $40'
                    amount={4000}
                    token={onToken}
                    stripeKey={Key}
              >

              </StripeCheckout>
    </div>
  )
}

export default Pay