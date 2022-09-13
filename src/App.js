import React from "react"
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"

export default function App() {

    //to handle cart open and close
    const [cartOpen, setCartOpen] = React.useState(false)
    function handleCart() {
        setCartOpen(prevState => !prevState)
    }
    const hide = {
        display: "none"
    }
    const show = {
        display: "block"
    }


    //to increase and decrease product count
    const [count, setCount] = React.useState(0)
    function plusCount() {
        setCount(prevState => prevState + 1)
    }
    function minusCount() {
        setCount(prevState => count === 0 ? prevState: prevState - 1)
    }

    //to toggle cart count
    const [addedToCart, setAddedToCart] = React.useState(false)
    function displayTag() {
        setAddedToCart(prevState => !prevState)
    }
    

    return (
        <div>
            <Header
                cartOpen={cartOpen}
                handleCart={handleCart}
                hide={hide}
                show={show}
                count={count}
                addedToCart={addedToCart}
                displayTag={displayTag}
            />
            <Main
                count={count}
                plusCount={plusCount}
                minusCount={minusCount}
                displayTag={displayTag}
                addedToCart={addedToCart}
            />
            <Footer/>
        </div>
    )
}