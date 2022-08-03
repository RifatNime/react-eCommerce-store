import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import { Badge } from '@mui/material'
import React from 'react'

function Navbar() {
    const style = 'text-[14px] cursor-pointer ml-[25px]'
    return (
        <div className='navbar h-[60px] shadow-md relative z-10'>

            <div className='wrapper pl-[20px] pr-[10px] pt-[10px] pd-[10px] flex justify-between items-center'>
                {/* left */}
                <div className="left flex flex-1 items-center">
                    <div className="language cursor-pointer text-[16px]">En</div>
                    <div className="searchInput flex border-[2px] border-solid border-light-gray rounded-md items-center ml-[10px] p-[5px] focus-within:border-[#FEBD69] transition-all">
                        <input type="text" className='input outline-none' />
                        <Search className='' style={{ fontsize: '16px' }} />
                    </div>
                </div>
                {/* logo part */}
                <div className="center flex-1 text-center">
                    <div className="logo font-bold text-lg">All Weather Shop</div>
                </div>
                {/* right div */}
                <div className="right flex flex-1 text-center items-center justify-end">
                    <div className={style} >Register</div>
                    <div className={style} >Sign In</div>
                    <div className={style}>
                        <Badge badgeContent={2} color='primary'>
                            <ShoppingCartOutlined />
                        </Badge>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar