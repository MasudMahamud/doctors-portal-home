import React from 'react';
import './Header.css';
import HeaderMain from '../HeaderMain/HeaderMain';
import NavBar from '../../Shared/NavBar/NavBar';
import BusinessInfo from '../BusinessInfo/BusinessInfo';


const Header = () => {
    return (
        <div className="header-container">
            
            <NavBar></NavBar>
             <HeaderMain></HeaderMain> 
            <BusinessInfo></BusinessInfo> 
        </div>
    );
};

export default Header;