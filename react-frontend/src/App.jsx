// import Home from "./pages/Home"
// // import Register from "./pages/Register"
// // import Login from "./pages/Login"
// // import Cart from "./pages/Cart"

import React from 'react'
import Success from './Success'
import Pay from './Pay'


const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/pay">
          <Pay />
        </Route>
        <Route path="/success">
          <Success/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App



// function App() {
//   return (
//     <Home/>
   
//   )
// }
// export default App



