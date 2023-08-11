import React from 'react';
import './header.css';
import search from './search.svg';
import carrot from './caret-down-fill.svg';
import location from './geo-alt.svg';
import Login from '../../../buttton/login';


const Header = () => {
  return (
    <div className='max-width header'>
      <img src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png'
        alt='zomato logo'
        className='header-logo' />
      <div className="header-right">
        <div className="header-location-search-container">
          <div className="location-wrapper">
            <div className="location-icon-name">

              <img className='absolute-center location-icon ' src={location} alt="location icon" />
              <div>Banglore</div>
            </div>
            <div>
              <img className='absolute-center carrot-icon' src={carrot} alt=" down-image" />
            </div>
            <div className='location-search-separator'></div>
            <div className="header-searchbar absolute-center ">
           
                <img className='absolute-center search-icon ' src={search} />
             

              <input className='search-input' type="text" placeholder='search for restaurants , cuisine or dish' />

            </div>
          </div>
        </div>

        <div className="profile-wrapper">

          <img className='header-profile-image' src="https://b.zmtcdn.com/web/assets/2267aec184e096c98c46a1565a5563661664945464.png?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A" alt="profile" />
          <span className='header-username' > <Login/> </span>
          <img className='profile-options-icon' src={carrot} alt=""/>
        </div>
        
      </div>


    </div>
  )
}


export default Header