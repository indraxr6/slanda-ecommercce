// import React, { useState, useEffect } from 'react'
// import StripeCheckout from 'react-stripe-checkout'
// import axios from 'axios'


// const Key = "pk_test_51Kv2RSCe4CMycWZvzLrLmHtrayF7rDugsKywgPA3jmpKK34LE6kPhCNWsuDcAdjJgwuPQLPCpC2L58a776xFVRjc00SLbGTOzb"

// const Pay = () => {
//           const [stripeToken, setStripeToken] = useState(null)
//           const history = useHistory()
//           const onToken = token => {
//                     setStripeToken(token)
//           }
//           useEffect(() => {
//                     const makeRequest = async () => {
//                               try {
//                                         const res = await axios.post('http://localhost:3080/api/checkout/payment', {
//                                                   tokenId: stripeToken,
//                                                   amount: 2000,
//                                         })
//                                         console.log(res.data)
//                                         history.push("/success")
//                               } catch(err) {
//                                         console.log(err)
//                               }
//                   }
//                     stripeToken && makeRequest()
//                   }, [stripeToken, history])

//   return (
//     <div
//           style={{
//                     height: '100vh',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//           }}
//     >           
//     <button
//           style={{
//                     border: 'none',
//                     width: '120px',
//                     borderRadius: 5,
//                     padding: '20px',
//                     backgroundColor: 'black',
//                     color: 'white',
//                     fontWeight: 'bold',
//                     cursor: 'pointer',
//           }}
//     >Pay Now</button>
//               {stripeToken ? (<span>Processing, please wait...</span>) :(

//                     <StripeCheckout
//                         name="Slanda"
//                         image="https://ik.imagekit.io/slanda/Slanda_hiRwQYiut.png?ik-sdk-version=javascript-1.4.3&updatedAt=1650822974625"
//                         billingAddress
//                         shippingAddress
//                         description='Total = $40'
//                         amount={4000}
//                         token={onToken}
//                         stripeKey={Key}
//                     >
//                     </StripeCheckout>
//           )}
//     </div>
//   )
// }

// export default Pay