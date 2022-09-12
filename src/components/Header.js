import React from "react"
import logo from "../images/logo.svg"
import cart from "../images/icon-cart.svg"
import avatar from "../images/image-avatar.png"

export default function Header() {
    const [hover, setHover] = React.useState("")
    function handleHover1() {
        setHover(1)
    }
    function handleHover2() {
        setHover(2)
    }
    function handleHover3() {
        setHover(3)
    }
    function handleHover4() {
        setHover(4)
    }
    function handleHover5() {
        setHover(5)
    }
    function handleMouseOut() {
        setHover("")
    }

    const [cartOpen, setCartOpen] = React.useState(false)
    function handleCart() {
        setCartOpen(prevState => !prevState)
    }

    return (
        <header>
            <div className="w-full h-[110px] flex border-b-[2px] border-slate-100 items-center relative z-20">
                <a href="index.html" className="mr-[8%]"><img alt="logo" src={logo} className="w-[140px] h-[21px]"/></a>
                <ul className="h-full flex gap-7 text-[1rem] mr-auto">
                    <li onMouseOver={handleHover1} onMouseOut={handleMouseOut} className="cursor-pointer h-full flex items-center relative">
                        <div>Collections</div>
                        {hover === 1 && <span className="absolute bottom-0 w-full h-[4px] bg-[#ff7d1a]"></span>}
                    </li>
                    <li onMouseOver={handleHover2} onMouseOut={handleMouseOut} className="cursor-pointer h-full flex items-center relative">
                        <div>Men</div>
                        {hover === 2 && <span className="absolute bottom-0 w-full h-[4px] bg-[#ff7d1a]"></span>}
                    </li>
                    <li onMouseOver={handleHover3} onMouseOut={handleMouseOut} className="cursor-pointer h-full flex items-center relative">
                        <div>Women</div>
                        {hover === 3 && <span className="absolute bottom-0 w-full h-[4px] bg-[#ff7d1a]"></span>}
                    </li>
                    <li onMouseOver={handleHover4} onMouseOut={handleMouseOut} className="cursor-pointer h-full flex items-center relative">
                        <div>About</div>
                        {hover === 4 && <span className="absolute bottom-0 w-full h-[4px] bg-[#ff7d1a]"></span>}
                    </li>
                    <li onMouseOver={handleHover5} onMouseOut={handleMouseOut} className="cursor-pointer h-full flex items-center relative">
                        <div>Contact</div>
                        {hover === 5 && <span className="absolute bottom-0 w-full h-[4px] bg-[#ff7d1a]"></span>}
                    </li>
                </ul>
                <div className="flex items-center">
                    <img alt="" src={cart} onClick={handleCart} className="w-[20px] h-[20px] mr-10 cursor-pointer hover:scale-[1.2]"/>
                    <img alt="" src={avatar} className="w-[45px] h-[45px] hover:border-[2px] border-[#ff7d1a] rounded-full cursor-pointer"/>
                </div>
                <div 
                    className="bg-white w-[320px] h-[240px] shadow-2xl rounded-lg z-50 absolute right-[-50px] top-[90px]"
                >
                    <div className="w-full p-5 border-b-[2px] border-slate-100 font-[700]">
                        Cart
                    </div>
                    <div className="w-full h-[65%] text-[0.85rem] font-[700] flex items-center justify-center">
                        <p>Your cart is empty</p>
                    </div>
                </div>
            </div>
        </header>
    )
}