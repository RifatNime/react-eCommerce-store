import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import React from 'react'

function Slider() {
    const arrowStyle = 'rounded-full bg-grey flex justify-center items-center shadow-sm hover:cursor-pointer'
    return (
        <div className='parentDiv h-[540px] bg-white flex items-center justify-between'>
            {/* left arrow */}
            <div className={arrowStyle}>
                <ArrowLeftOutlined style={{ fontSize: '50px' }} />
            </div>
            {/* slider part */}
            <div className="wrapper flex w-[100%] h-[500px] justify-center items-center shadow-2xl rounded-lg border-[#c0c0c0] border-10px overflow-hidden relative bg-[#ffd028]">
                <div className='slide flex items-center justify-center h-[100%]'>
                    <div className="image flex flex-1 justify-center items-center h-[100%]">
                        <img className='object-cover h-[100%]' src="https://st3.depositphotos.com/7713882/17906/i/600/depositphotos_179068502-stock-photo-happy-woman-showing-good-big.jpg" alt="slide_image" />
                    </div>
                    <div className="description flex flex-col flex-1 place-items-start justify-center -ml-11">
                        <h2 className='text-[55px]'>Get This An awesome deal today</h2>
                        <p className='text-[30px]'>Upto 40% off</p>
                    
                    <button className="btn">Shop Now</button>
                    </div>
                </div>
            </div>
            {/* right arrow */}
            <div className={arrowStyle}>
                <ArrowRightOutlined style={{ fontSize: '50px' }} />
            </div>
        </div>
    )
}

export default Slider