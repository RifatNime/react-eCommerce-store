import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import React from 'react'

function Slider() {
    const arrowStyle = 'rounded-full bg-grey flex justify-center items-center shadow-sm hover:cursor-pointer'
    return (
        <div className='parentDiv h-[540px] bg-white flex items-center justify-between'>
            {/* left arrow */}
            <div className={arrowStyle}>
                <ArrowLeftOutlined style={{fontSize: '50px'}}/>
            </div>
            {/* slider part */}
            <div className="wrapper flex w-[100%] h-[500px]"></div>
            {/* right arrow */}
            <div className={arrowStyle}>
                <ArrowRightOutlined style={{fontSize: '50px'}}/>
            </div>
        </div>
    )
}

export default Slider