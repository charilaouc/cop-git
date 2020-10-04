import React from 'react';
import'./Header.css'

function Header() {
    return (
        <div className  = 'header'>
            <img className="header__logo" src="">
            </img>

            <div className="header__search">
                <input className="header__searchInput" type="text"/>
                {
                //logo
                }

            </div>
            <div className="header__nav">
                <div className='header__option'>
                    <span className='header__optionLineOne'>Hello User</span>
                    <span className='header__optionLineTwo'>Sign In</span>
                </div>
                <div className='header__option'>
                    <span className='header__optionLineOne'>Hello User</span>
                    <span className='header__optionLineTwo'>Sign In</span>                    
                </div>
                <div className='header__option'>
                    <span className='header__optionLineOne'>Hello User</span>
                    <span className='header__optionLineTwo'>Sign In</span>                    
                </div>
                <div className='header__option'>
                    <span className='header__optionLineOne'>Hello User</span>
                    <span className='header__optionLineTwo'>Sign In</span>                    
                </div>
            </div>

        </div>
    )
}

export default Header
