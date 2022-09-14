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
    const [count, setCount] = React.useState(
            JSON.parse(localStorage.getItem("count")) || 0
        )
    function plusCount() {
        setCount(prevState => prevState + 1)
    }
    function minusCount() {
        setCount(prevState => count === 0 ? prevState: prevState - 1)
    }


    //to toggle cart count
    const [addedToCart, setAddedToCart] = React.useState(
            JSON.parse(localStorage.getItem("addedToCart")) || false
        )
    function displayTag() {
        setAddedToCart(prevState => !prevState)
    }

    //to delete items selected and set count back to 0
    function emptyCart() {
        setCount(0)
        setAddedToCart(false)
    }
    

    //to save count state to local storage
    React.useEffect(() => {
        localStorage.setItem("count", JSON.stringify(count))
    }, [count])

    //to save addedToCart state to local storage
    React.useEffect(() => {
        localStorage.setItem("addedToCart", JSON.stringify(addedToCart))
    }, [addedToCart])

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
                emptyCart={emptyCart}
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