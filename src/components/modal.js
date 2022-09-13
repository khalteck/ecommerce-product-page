import React from "react"
import closemodal from "../images/icon-close.svg"
import next from "../images/icon-next.svg"
import prev from "../images/icon-previous.svg"

export default function Modal(props) {
    return (
        <div className="w-full px-[20px] lg:px-0 min-h-[100vh] bg-black/90 overscroll-y-contain lg:bg-black/80 fixed md:absolute lg:fixed top-0 left-0 z-[100] flex items-center justify-center">
            <div className="w-[450px] relative">
                <img
                    alt="" 
                    src={closemodal} 
                    onClick={props.handleModal}
                    className="mb-5 w-[20px] h-[20px] float-right cursor-pointer"
                />

                <img alt="" src={props.displayThumb.image} className="w-full h-auto rounded-2xl mb-[25px]"/>

                <div 
                     onClick={props.handlePrev}
                    className="absolute top-[40%] left-[-20px] w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center cursor-pointer"
                >
                    <img alt="" src={prev}/>
                </div>

                <div
                     onClick={props.handleNext}
                    className="absolute top-[40%] right-[-20px] w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center cursor-pointer"
                >
                    <img alt="" src={next}/>
                </div>

                <div className="w-full flex justify-center gap-[25px]">
                    <img 
                        id="first" 
                        alt="" 
                        src={props.imagethumb1} 
                        onClick={props.handleThumbClick} 
                        className={`${props.displayThumb.first} w-[16%] border-[#ff7d1a] h-auto rounded-xl hover:opacity-50 cursor-pointer`}
                    />
                    <img 
                        id="second" 
                        alt="" 
                        src={props.imagethumb2} 
                        onClick={props.handleThumbClick} 
                        className={`${props.displayThumb.second} w-[16%] border-[#ff7d1a] h-auto rounded-xl hover:opacity-50 cursor-pointer`}
                    />
                    <img 
                        id="third" 
                        alt="" 
                        src={props.imagethumb3} 
                        onClick={props.handleThumbClick} 
                        className={`${props.displayThumb.third} w-[16%] border-[#ff7d1a] h-auto rounded-xl hover:opacity-50 cursor-pointer`}
                    />
                    <img 
                        id="fourth" 
                        alt="" 
                        src={props.imagethumb4} 
                        onClick={props.handleThumbClick} 
                        className={`${props.displayThumb.fourth} w-[16%] border-[#ff7d1a] h-auto rounded-xl hover:opacity-50 cursor-pointer`}
                    />
                </div>
            </div>
        </div>
    )
}