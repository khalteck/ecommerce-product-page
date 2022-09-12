import React from "react"
import logo from "../images/logo.svg"
import cart from "../images/icon-cart.svg"
import avatar from "../images/image-avatar.png"

export default function Header() {
    return (
        <header>
            <div className="w-full h-[110px] flex border-b-[2px] border-slate-100 items-center">
                <img alt="logo" src={logo} className="w-[140px] h-[21px] mr-[8%]"/>
                <ul className="flex gap-7 text-[1rem] mr-auto">
                    <li>Collections</li>
                    <li>Men</li>
                    <li>Women</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <div className="flex items-center">
                    <img alt="" src={cart} className="w-[20px] h-[20px] mr-10"/>
                    <img alt="" src={avatar} className="w-[45px] h-[45px]"/>
                </div>
            </div>
        </header>
    )
}