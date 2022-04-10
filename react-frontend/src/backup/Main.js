import React from "react"
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing"



class Main extends React.Component{
    render(){
        return (
            <Routes>
                <Route exact path="/" element={<Landing/>} />
                {/* <Route path="/about" element={<About/>} /> */}
                
            </Routes>
        )
    }
}
export default Main;