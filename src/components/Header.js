import React from "react"
import logo from "../images/logo.svg"
import cart from "../images/icon-cart.svg"
import avatar from "../images/image-avatar.png"
import image1 from "../images/image-product-1.jpg"
import deleteicon from "../images/icon-delete.svg"
import menu from "../images/icon-menu.svg"
import close from "../images/icon-close.svg"

export default function Header(props) {
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

    const [openMenu, setOpenMenu] = React.useState(false)
    function handleClick() {
        setOpenMenu(prevState => !prevState)
    }

    const hide = {
        display: "none"
    }
    const show = {
        display: "block"
    }

    return (
        <header>

            {/*desktop header*/}
            <div className="w-[80%] h-[100px] hidden lg:flex border-b-[2px] bg-white border-slate-100 items-center fixed top-0 left-[50%] translate-x-[-50%] z-30">
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
                    <div onClick={props.handleCart} className="mr-10 cursor-pointer hover:scale-[1.3] relative">
                        {props.addedToCart && <div 
                            className="absolute top-[-7px] right-[-7px] px-[7px] py-[0px] bg-[#ff7d1a] text-white text-[0.5rem] font-[700] rounded-lg"
                        >{props.count ? props.count : ""}</div>}
                        <img alt="" src={cart} className="w-[20px] h-[20px]"/>
                    </div>
                    <img alt="" src={avatar} className="w-[45px] h-[45px] hover:border-[2px] border-[#ff7d1a] rounded-full cursor-pointer"/>
                </div>

                {/*cart */}
                <div 
                    className="bg-white w-[320px] h-[240px] shadow-2xl rounded-lg z-50 absolute right-[-50px] top-[90px]"
                    style={props.cartOpen ? props.show : props.hide}
                >
                    <div className="w-full p-5 border-b-[2px] border-slate-100 font-[700]">
                        Cart
                    </div>
                    <div className="w-full h-[65%] text-[0.85rem] font-[700] flex items-center justify-center">
                        { /*cart logic workings*/ }
                        { 
                            props.count && props.addedToCart ? <div className="w-full p-[20px]">
                                <div className="flex items-center gap-[15px] mb-[20px]">
                                    <img alt="" src={image1} className="w-[50px] h-auto rounded-md"/>
                                    <div className="relative">
                                        <p>Fall Limited Edition Sneakers</p>
                                        <p 
                                            className="text-[0.9rem] mt-[5px]"
                                        >$125 x {props.count} = <span className="text-[#1d2025]">${125 * parseInt(props.count)}</span></p>
                                    </div>
                                    <img alt="" src={deleteicon} onClick={props.emptyCart} className="w-3 h-4 cursor-pointer"/>
                                </div>
                                <button className="w-full bg-[#ff7d1a] text-white py-3 px-6 rounded-lg hover:opacity-50">Checkout</button>
                            </div> 
                            : <p>Your cart is empty</p>
                        }
                    </div>
                </div>
                {/*cart */}
            </div>
            {/*desktop header */}

            {/*mobile header */}
            <div className="flex items-center lg:hidden w-full h-[80px] px-[20px] fixed top-0 left-0 bg-white z-30">
                <img className="w-[20px] h-[18px] cursor-pointer mr-[25px]" alt="" src={menu} onClick={handleClick}/>
                <a href="index.html " className="mr-auto"><img src={logo} alt="logo" className="w-[145px] h-[25px] relative bottom-[2px]"/></a>
                <div className="flex items-center">
                    <div onClick={props.handleCart} className="mr-4 cursor-pointer hover:scale-[1.3] relative">
                        {props.addedToCart && <div 
                            className="absolute top-[-7px] right-[-7px] px-[7px] py-[0px] bg-[#ff7d1a] text-white text-[0.7rem] font-[700] rounded-lg"
                        >{props.count ? props.count : ""}</div>}
                        <img alt="" src={cart} className="w-[25px] h-[25px]"/>
                    </div>
                    <img alt="" src={avatar} className="w-[35px] h-[35px] hover:border-[2px] border-[#ff7d1a] rounded-full cursor-pointer"/>
                </div>
                <div className="w-full h-[100vh] bg-black/80 fixed top-0 left-0" style={openMenu ? show : hide}>
                    <img className="w-[20px] h-[20px] cursor-pointer mr-[25px] absolute top-[30px] left-[30px]" alt="" src={close} onClick={handleClick}/>
                    <ul className="slide w-[65%] h-full bg-white pl-[30px] text-[1.25rem] font-[700] text-[#1d2025] pt-[100px]">
                        <li className="my-4">Collections</li>
                        <li className="my-4">Men</li>
                        <li className="my-4">Women</li>
                        <li className="my-4">About</li>
                        <li className="my-4">Contact</li>
                    </ul>
                </div>

                {/*cart */}
                <div 
                        className="bg-white w-[95%] h-[240px] shadow-2xl rounded-lg z-100 absolute left-[50%] top-[90px] translate-x-[-50%]"
                        style={props.cartOpen ? props.show : props.hide}
                    >
                        <div className="w-full p-5 border-b-[2px] border-slate-100 font-[700]">
                            Cart
                        </div>
                        <div className="w-full h-[65%] text-[0.85rem] font-[700] flex items-center justify-center">
                            { /*cart logic workings*/ }
                            { 
                                props.count && props.addedToCart ? <div className="w-full p-[20px]">
                                    <div className="flex items-center gap-[15px] mb-[20px]">
                                        <img alt="" src={image1} className="w-[50px] h-auto rounded-md"/>
                                        <div className="relative mr-auto">
                                            <p>Fall Limited Edition Sneakers</p>
                                            <p 
                                                className="text-[0.9rem] mt-[5px]"
                                            >$125 x {props.count} = <span className="text-[#1d2025]">${125 * parseInt(props.count)}</span></p>
                                        </div>
                                        <img alt="" src={deleteicon} onClick={props.emptyCart} className="w-4 h-5 cursor-pointer"/>
                                    </div>
                                    <button className="w-full bg-[#ff7d1a] text-white py-3 px-6 rounded-lg hover:opacity-50">Checkout</button>
                                </div> 
                                : <p>Your cart is empty</p>
                            }
                        </div>
                    </div>
                    {/*cart */}
            </div>
            {/*mobile header */}

        </header>
    )
}