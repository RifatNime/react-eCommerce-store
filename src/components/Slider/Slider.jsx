import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import React, { useState } from 'react';
import { ApiSlides } from '../../API/SliderApi';
import './Slide.css'

function Slider() {
    //STYLE
    const slideStyle = "slide flex items-center justify-center h-[100%]";
    const arrowStyle = 'rounded-full bg-grey flex justify-center items-center shadow-sm hover:cursor-pointer'

    //useState hooks
    const [slides] = useState(ApiSlides);
    const [activeSlide, setActiveSlide] = useState(0);

    //function
    const nextSlide = () => {
        if (activeSlide === slides.length - 1) {
            setActiveSlide(0)
        }
        else {
            setActiveSlide(activeSlide + 1)
        }
    }
    const prevSlide = () => {
        if (activeSlide === 0) {
            setActiveSlide(slides.length - 1)
        }
        else {
            setActiveSlide(activeSlide - 1)
        }
    }

    return (
        <div className='parentDiv h-[540px] bg-white flex items-center justify-between'>
            {/* left arrow */}
            <div className={arrowStyle}>
                <ArrowLeftOutlined style={{ fontSize: '50px' }} onClick={prevSlide}/>
            </div>
            {/* slider part */}
            {slides.map((slide, index) => {
                if (index === activeSlide) {
                    return (
                        <div className={`wrapper flex w-[100%] h-[500px] items-center justify-center shadow-2xl rounded-lg border-[#c0c0c0] border-10px overflow-hidden relative` + slide.background} key={index}>
                            <div className={slideStyle}>
                                <div className="flex-1 flex justify-center items-center h-[100%]">
                                    <img
                                        className=' h-[100%] object-cover'
                                        src={slide.src}
                                        alt="man"
                                    />
                                </div>
                                <div className="description flex flex-col flex-1 place-items-start justify-center ml-11">
                                    <h2 className="text-[55px] uppercase font-semibold">{slide.content.h2}</h2>
                                    <p className=" text-[30px] font-medium">{slide.content.p}</p>
                                    <button className="btn">
                                        Shop Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                }
            })}
            {/* right arrow */}
            <div className={arrowStyle}>
                <ArrowRightOutlined style={{ fontSize: '50px' }} onClick={nextSlide} />
            </div>
        </div>
    )
}

export default Slider