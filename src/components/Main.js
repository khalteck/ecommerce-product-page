import React from "react"
import image1 from "../images/image-product-1.jpg"
import image2 from "../images/image-product-2.jpg"
import image3 from "../images/image-product-3.jpg"
import image4 from "../images/image-product-4.jpg"
import imagethumb1 from "../images/image-product-1-thumbnail.jpg"
import imagethumb2 from "../images/image-product-2-thumbnail.jpg"
import imagethumb3 from "../images/image-product-3-thumbnail.jpg"
import imagethumb4 from "../images/image-product-4-thumbnail.jpg"
import cartwhite from "../images/icons8-shopping-cart-24.png"
import minus from "../images/icon-minus.svg"
import plus from "../images/icon-plus.svg"
import Modal from "./modal"

export default function Main(props) {

    //to save the state of the thumbnail images and the big imag on display
    const [displayThumb, setDisplayThumb] = React.useState({
        first: "border-[3px] opacity-40",
        second: "border-[0px] opacity-100",
        third: "border-[0px] opacity-100",
        fourth: "border-[0px] opacity-100",
        image: image1
    })
    //to handle the state when clicking each thumbnail image
    function handleClick(event) {
        const {id} = event.target;
        setDisplayThumb(prevState => { 
            return {
                ...prevState,
                first: "border-[0px] opacity-100",
                second: "border-[0px] opacity-100",
                third: "border-[0px] opacity-100",
                fourth: "border-[0px] opacity-100",
                [id]: "border-[3px] opacity-40",
                image: id === "first" ? image1 : id === "second" ? image2 : id === "third" ? image3 : image4
            }
        })
    }


    //to display next picture
    function handleNext() {
        setDisplayThumb(prevState => {
            return {
                ...prevState,
                image: displayThumb.image === image1 ? image2 
                : displayThumb.image === image2 ? image3 
                : displayThumb.image === image3 ? image4 
                : image1,
                first: "border-[0px] opacity-100",
                second: "border-[0px] opacity-100",
                third: "border-[0px] opacity-100",
                fourth: "border-[0px] opacity-100",
            }
        })
    }

    //to display previous picture
    function handlePrev() {
        setDisplayThumb(prevState => {
            return {
                ...prevState,
                image: displayThumb.image === image4 ? image3 
                : displayThumb.image === image3 ? image2 
                : displayThumb.image === image2 ? image1 
                : image4,
                first: "border-[0px] opacity-100",
                second: "border-[0px] opacity-100",
                third: "border-[0px] opacity-100",
                fourth: "border-[0px] opacity-100",
            }
        })
    }


    //to save the state of the modal
    const [openModal, setOpenModal] = React.useState(false)
    //to toggle show and hide modal
    function handleModal() {
        return (
            setOpenModal(prevState => !prevState)
        )
    }


    return (
        <main className="pt-[0px] lg:pt-[80px] px-[0px] lg:px-[70px] block lg:flex gap-[20px] lg:gap-[100px] items-center">
            {
                openModal && 
                <Modal
                    displayThumb={displayThumb}
                    handleThumbClick={handleClick}
                    imagethumb1={imagethumb1}
                    imagethumb2={imagethumb2}
                    imagethumb3={imagethumb3}
                    imagethumb4={imagethumb4}
                    handleModal={handleModal}
                    handleNext={handleNext}
                    handlePrev={handlePrev}
                />
            }
            <div className="w-full lg:w-[45%]">
                <img alt="" src={displayThumb.image} onClick={handleModal} className="w-full h-auto rounded-0 lg:rounded-2xl mb-[25px] cursor-pointer"/>
                <div className="w-full flex gap-[25px]">
                    <img 
                        id="first" 
                        alt="" 
                        src={imagethumb1} 
                        onClick={handleClick} 
                        className={`${displayThumb.first} w-[20.5%] border-[#ff7d1a] h-auto rounded-xl hover:opacity-50 cursor-pointer`}
                    />
                    <img 
                        id="second" 
                        alt="" 
                        src={imagethumb2} 
                        onClick={handleClick} 
                        className={`${displayThumb.second} w-[20.5%] border-[#ff7d1a] h-auto rounded-xl hover:opacity-50 cursor-pointer`}
                    />
                    <img 
                        id="third" 
                        alt="" 
                        src={imagethumb3} 
                        onClick={handleClick} 
                        className={`${displayThumb.third} w-[20.5%] border-[#ff7d1a] h-auto rounded-xl hover:opacity-50 cursor-pointer`}
                    />
                    <img 
                        id="fourth" 
                        alt="" 
                        src={imagethumb4} 
                        onClick={handleClick} 
                        className={`${displayThumb.fourth} w-[20.5%] border-[#ff7d1a] h-auto rounded-xl hover:opacity-50 cursor-pointer`}
                    />
                </div>
            </div>
            <div className="w-full lg:w-1/2 h-[100%] px-[20px] lg:px-0 flex items-center">
                <div>
                    <h2 className="text-[0.85rem] text-[#ff7d1a] font-[700] tracking-widest">SNEAKER COMPANY</h2>
                    <h1 className="text-[#1d2025] font-[700] text-[2.75rem] leading-[45px] mt-4 mb-8">Fall Limited Edition Sneakers</h1>
                    <p className="mb-5">
                        These low-profile sneakers are your perfect casual wear companion. Featuring a 
                        durable rubber outer sole, they’ll withstand everything the weather can offer.
                    </p>
                    <div className="flex items-center">
                        <h3 className="text-[#1d2025] font-[700] text-[1.85rem] mr-3 leading-2">$125.00</h3>
                        <div className="text-[#ff7d1a] text-[0.9rem] font-[700] bg-[#ffede0] py-[1px] px-[6px] rounded-md">50%</div>
                    </div>
                    <div className="relative mb-7">
                        <p className="font-[700] text-[#b6bcc8]">$250.00</p>
                        <span className="w-[60px] h-[1px] absolute bottom-[10px] bg-[#b6bcc8]"></span>
                    </div>
                    <div className="w-full flex">
                        <div className="w-[150px] flex justify-between bg-[#f7f8fd] mr-[20px] rounded-lg border border-slate-200">
                            <div onClick={props.minusCount} className="w-1/3 py-[22px] cursor-pointer flex justify-center items-center hover:opacity-50">
                                <img alt="" src={minus}/>
                            </div>
                            <div className="w-1/3 flex justify-center items-center font-[700]">{props.count}</div>
                            <div onClick={props.plusCount} className="w-1/3 py-[18px] cursor-pointer flex justify-center items-center hover:opacity-50">
                                <img alt="" src={plus}/>
                            </div>
                        </div>
                        <button 
                            onClick={props.displayTag}
                            className="w-[60%] bg-[#ff7d1a] text-white py-2 px-6 flex justify-center items-center rounded-lg shadow-xl shadow-orange-500/30 hover:opacity-50"
                        >
                            <span><img alt="" className="w-[20px]" src={cartwhite}/></span>{props.addedToCart ? "Remove from" : "Add to" } cart
                        </button>
                    </div>
                </div>
            </div>
        </main>
    )
}