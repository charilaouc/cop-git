import React from 'react';
import'./Header.css'
import SearchIcon from "@material-ui/icons/Search";

function Header() {
    return (
        <div className  = 'header'>
            <img className="header__logo" src="https://github.com/charilaouc/cop-git/blob/800fc1700393f7ef8cac2d27a74baf6a48391f2e/cosmosplatform/src/images/logo.png">
            </img>

            <div className="header__search">
                <input className="header__searchInput" type="text"/>
                <SearchIcon className="header__searchIcon"/>
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
                    <span className='header__optionLineOne'>Returns</span>
                    <span className='header__optionLineTwo'>& Orders</span>                    
                </div>
                <div className='header__option'>
                    <span className='header__optionLineOne'>Your</span>
                    <span className='header__optionLineTwo'>Prime</span>                    
                </div>
                <div className='header__option'>
                    <span className='header__optionLineOne'>sample</span>
                    <span className='header__optionLineTwo'>sample</span>                    
                </div>
            </div>

        </div>
    )
}

export default Header
